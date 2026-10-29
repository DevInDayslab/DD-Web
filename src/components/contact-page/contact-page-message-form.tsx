"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/config/site";
import type { ContactPageMessageContent } from "@/types/contact-page";

type FormValues = Record<string, string>;

type ContactPageMessageFormProps = {
  content: ContactPageMessageContent;
};

function initialValues(fields: ContactPageMessageContent["fields"]): FormValues {
  return Object.fromEntries(fields.map((field) => [field.id, ""]));
}

export function ContactPageMessageForm({ content }: ContactPageMessageFormProps) {
  const [values, setValues] = useState<FormValues>(() => initialValues(content.fields));
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const updateField = (fieldId: string, value: string) => {
    setValues((current) => ({ ...current, [fieldId]: value }));
    setError(null);
    setSuccess(false);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const missingRequired = content.fields.some(
      (field) => field.required && !values[field.id]?.trim(),
    );
    if (missingRequired) {
      setError(content.missingRequiredMessage);
      return;
    }

    setSubmitting(true);
    setError(null);

    const payload = {
      name: values.name,
      email: values.email,
      company: values.company,
      message: values.message,
      _subject: content.formSubject,
    };

    try {
      const endpoint = site.contact.formEndpoint;
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error("Submit failed");
        }
      }

      setSuccess(true);
      setValues(initialValues(content.fields));
    } catch {
      setError(content.errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="contact-page-message-form" onSubmit={handleSubmit} noValidate>
      {content.fields.map((field) => {
        const fieldId = `contact-${field.id}`;
        return (
          <div key={field.id} className="contact-page-form-field">
            <label htmlFor={fieldId} className="contact-page-form-label">
              <span>{field.label}</span>
              {field.required ? <span aria-hidden> *</span> : null}
              {field.optionalSuffix ? (
                <span className="contact-page-form-label-optional"> {field.optionalSuffix}</span>
              ) : null}
            </label>
            {field.type === "textarea" ? (
              <textarea
                id={fieldId}
                name={field.id}
                className="contact-page-form-control contact-page-form-control--textarea"
                placeholder={field.placeholder}
                required={field.required}
                rows={4}
                value={values[field.id] ?? ""}
                onChange={(event) => updateField(field.id, event.target.value)}
              />
            ) : (
              <input
                id={fieldId}
                name={field.id}
                className="contact-page-form-control"
                type={field.type}
                placeholder={field.placeholder}
                required={field.required}
                autoComplete={field.autoComplete}
                value={values[field.id] ?? ""}
                onChange={(event) => updateField(field.id, event.target.value)}
              />
            )}
          </div>
        );
      })}

      {error ? (
        <p className="contact-page-form-feedback contact-page-form-feedback--error" role="alert">
          {error}
        </p>
      ) : null}
      {success ? (
        <p className="contact-page-form-feedback contact-page-form-feedback--success" role="status">
          {content.successMessage}
        </p>
      ) : null}

      <div className="contact-page-form-submit-wrap">
        <button
          type="submit"
          className="contact-page-form-submit"
          disabled={submitting}
          aria-label={content.submitAriaLabel}
        >
          <span>{submitting ? "Sending…" : content.submitLabel}</span>
          <span className="contact-page-form-submit-arrow" aria-hidden>
            →
          </span>
        </button>
      </div>

      <p className="contact-page-form-footer">{content.footerNote}</p>
    </form>
  );
}
