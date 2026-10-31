"use client";

import Link from "next/link";
import { Fragment, useState, type FormEvent } from "react";
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
  const [projectType, setProjectType] = useState("");
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
      projectType,
      _subject: content.formSubject,
    };

    try {
      // No backend yet: until NEXT_PUBLIC_FORMSPREE_ENDPOINT is set the message is not sent anywhere,
      // and the visitor still sees the confirmation. Wire the endpoint before launch.
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
      setProjectType("");
    } catch {
      setError(content.errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="contact-page-success" role="status">
        <span className="contact-page-success-icon" aria-hidden>
          <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
            <path
              className="contact-page-success-check"
              d="M5.5 12.5L10 17L18.5 7.5"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <h3 className="contact-page-success-title">{content.success.title}</h3>
        <p className="contact-page-success-body">{content.success.body}</p>
        <div className="contact-page-success-actions">
          <Link href={content.success.linkHref} className="contact-page-success-link">
            {content.success.linkLabel} <span aria-hidden>→</span>
          </Link>
          <button
            type="button"
            className="contact-page-success-reset"
            onClick={() => setSuccess(false)}
          >
            {content.success.resetLabel}
          </button>
        </div>
      </div>
    );
  }

  const projectTypeChips = (
    <div
      key="project-type"
      className="contact-page-form-field contact-page-form-field--wide"
      role="group"
      aria-labelledby="contact-project-type-label"
    >
      <span id="contact-project-type-label" className="contact-page-form-label">
        {content.projectTypes.label}
        <span className="contact-page-form-label-optional"> {content.projectTypes.optionalSuffix}</span>
      </span>
      <div className="contact-page-chips">
        {content.projectTypes.options.map((option) => (
          <button
            key={option}
            type="button"
            className={`contact-page-chip${projectType === option ? " contact-page-chip--active" : ""}`}
            aria-pressed={projectType === option}
            onClick={() => setProjectType((current) => (current === option ? "" : option))}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <form className="contact-page-message-form" onSubmit={handleSubmit} noValidate>
      {content.fields.map((field) => {
        const fieldId = `contact-${field.id}`;
        return (
          <Fragment key={field.id}>
          {field.id === "message" ? projectTypeChips : null}
          <div className="contact-page-form-field">
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
          </Fragment>
        );
      })}

      {error ? (
        <p className="contact-page-form-feedback contact-page-form-feedback--error" role="alert">
          {error}
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
