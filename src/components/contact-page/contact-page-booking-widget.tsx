"use client";

import { useCallback, useMemo, useState } from "react";
import { useOptionalProjectQualifier } from "@/components/project-qualifier/project-qualifier-provider";
import { site } from "@/config/site";
import {
  addMonths,
  buildBookingMonthGrid,
  firstSelectableDayInMonth,
  formatBookingMonthYear,
  formatBookingSlotsHeading,
  isSameCalendarDay,
} from "@/lib/contact-booking-calendar";
import type { ContactPageBookCallContent } from "@/types/contact-page";

const WEEKDAY_LABELS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"] as const;

type ContactPageBookingWidgetProps = {
  content: ContactPageBookCallContent;
};

function ClockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" aria-hidden>
      <circle cx="6.5" cy="6.5" r="5.5" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <path d="M6.5 3.5V6.5L8.5 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function initialViewMonth(today: Date): Date {
  return new Date(today.getFullYear(), today.getMonth(), 1);
}

function initialSelectedDate(today: Date): Date | null {
  const view = initialViewMonth(today);
  const weeks = buildBookingMonthGrid(view, today);
  for (const week of weeks) {
    for (const cell of week) {
      if (cell.kind === "day" && cell.selectable && isSameCalendarDay(cell.date, today)) {
        return today;
      }
    }
  }
  return firstSelectableDayInMonth(view, today);
}

export function ContactPageBookingWidget({ content }: ContactPageBookingWidgetProps) {
  const bookingUrl = site.booking.embedUrl;
  const qualifier = useOptionalProjectQualifier();

  const [today] = useState(() => new Date());
  const [viewMonth, setViewMonth] = useState(() => initialViewMonth(today));
  const [selectedDate, setSelectedDate] = useState<Date | null>(() => initialSelectedDate(today));
  const [selectedSlotId, setSelectedSlotId] = useState<string>(() => {
    return content.widget.timeSlots[0]?.id ?? "";
  });

  const calendarWeeks = useMemo(
    () => buildBookingMonthGrid(viewMonth, today),
    [viewMonth, today],
  );

  const monthLabel = useMemo(() => formatBookingMonthYear(viewMonth), [viewMonth]);

  const slotsHeading = useMemo(() => {
    if (!selectedDate) {
      return content.widget.slotsHeadingPrefix;
    }
    return formatBookingSlotsHeading(selectedDate, content.widget.slotsHeadingPrefix);
  }, [content.widget.slotsHeadingPrefix, selectedDate]);

  const selectedSlotLabel = useMemo(
    () => content.widget.timeSlots.find((slot) => slot.id === selectedSlotId)?.label,
    [content.widget.timeSlots, selectedSlotId],
  );

  const canGoToPreviousMonth = useMemo(() => {
    const earliest = initialViewMonth(today);
    return (
      viewMonth.getFullYear() > earliest.getFullYear() ||
      (viewMonth.getFullYear() === earliest.getFullYear() && viewMonth.getMonth() > earliest.getMonth())
    );
  }, [today, viewMonth]);

  const goToPreviousMonth = useCallback(() => {
    if (!canGoToPreviousMonth) {
      return;
    }
    setViewMonth((current) => addMonths(current, -1));
  }, [canGoToPreviousMonth]);

  const goToNextMonth = useCallback(() => {
    setViewMonth((current) => addMonths(current, 1));
  }, []);

  const selectDate = useCallback((date: Date) => {
    setSelectedDate(date);
    setSelectedSlotId((current) => {
      if (content.widget.timeSlots.some((slot) => slot.id === current)) {
        return current;
      }
      return content.widget.timeSlots[0]?.id ?? "";
    });
  }, [content.widget.timeSlots]);

  if (bookingUrl) {
    return (
      <div className="contact-page-booking-card contact-page-booking-card--embed">
        <iframe
          title="Book a discovery call"
          src={bookingUrl}
          className="contact-page-booking-embed"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className="contact-page-booking-card">
      <div className="contact-page-booking-card-header">
        <div className="contact-page-booking-card-copy">
          <p className="contact-page-booking-card-eyebrow">{content.widget.eyebrow}</p>
          <p className="contact-page-booking-card-title">{content.widget.title}</p>
        </div>
        <span className="contact-page-booking-duration">
          <ClockIcon />
          {content.widget.durationLabel}
        </span>
      </div>

      <div className="contact-page-booking-calendar">
        <div className="contact-page-booking-calendar-toolbar">
          <p className="contact-page-booking-month">{monthLabel}</p>
          <div className="contact-page-booking-month-nav">
            <button
              type="button"
              className="contact-page-booking-nav-btn"
              aria-label="Previous month"
              disabled={!canGoToPreviousMonth}
              onClick={goToPreviousMonth}
            >
              ‹
            </button>
            <button
              type="button"
              className="contact-page-booking-nav-btn"
              aria-label="Next month"
              onClick={goToNextMonth}
            >
              ›
            </button>
          </div>
        </div>

        <div className="contact-page-booking-weekdays" aria-hidden>
          {WEEKDAY_LABELS.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>

        <div className="contact-page-booking-grid" role="grid" aria-label="Calendar dates">
          {calendarWeeks.map((week, weekIndex) =>
            week.map((cell, cellIndex) => {
              const key = `${weekIndex}-${cellIndex}-${cell.label}-${cell.kind}`;

              if (cell.kind === "muted") {
                return (
                  <span
                    key={key}
                    className="contact-page-booking-day contact-page-booking-day--muted"
                  >
                    {cell.label}
                  </span>
                );
              }

              const isSelected = selectedDate ? isSameCalendarDay(cell.date, selectedDate) : false;

              if (!cell.selectable) {
                return (
                  <span
                    key={key}
                    className="contact-page-booking-day contact-page-booking-day--disabled"
                  >
                    {cell.label}
                  </span>
                );
              }

              return (
                <button
                  key={key}
                  type="button"
                  className={`contact-page-booking-day${
                    isSelected ? " contact-page-booking-day--selected" : ""
                  }`}
                  aria-pressed={isSelected}
                  onClick={() => selectDate(cell.date)}
                >
                  {cell.label}
                </button>
              );
            }),
          )}
        </div>
      </div>

      <div className="contact-page-booking-slots">
        <p className="contact-page-booking-slots-heading">{slotsHeading}</p>
        <div className="contact-page-booking-slots-grid">
          {content.widget.timeSlots.map((slot) => {
            const isSelected = slot.id === selectedSlotId;
            const slotsDisabled = !selectedDate;
            return (
              <button
                key={slot.id}
                type="button"
                className={`contact-page-booking-slot${
                  isSelected ? " contact-page-booking-slot--selected" : ""
                }`}
                aria-pressed={isSelected}
                disabled={slotsDisabled}
                onClick={() => {
                  setSelectedSlotId(slot.id);
                  // Picking a time hands off to the full-screen booking flow, after a beat so the pick registers.
                  if (qualifier) {
                    window.setTimeout(qualifier.open, 260);
                  }
                }}
              >
                {isSelected ? `${slot.label} (Selected)` : slot.label}
              </button>
            );
          })}
        </div>
        {selectedDate && selectedSlotLabel ? (
          <p className="sr-only">
            Selected {formatBookingSlotsHeading(selectedDate, content.widget.slotsHeadingPrefix)} at{" "}
            {selectedSlotLabel}
          </p>
        ) : null}
      </div>
    </div>
  );
}
