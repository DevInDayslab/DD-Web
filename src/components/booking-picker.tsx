"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import {
  formatSlotDay,
  formatSlotTime,
  generateBookingSlots,
  groupSlotsByLocalDay,
  localDateKey,
  visitorTimeZoneLabel,
} from "@/lib/booking-slots";

type BookingPickerProps = {
  /** ISO string of the chosen time, or "" for none. */
  value: string;
  onChange: (iso: string) => void;
  /** Called after a time is picked (used to move on from a compact picker). */
  onPick?: (iso: string) => void;
};

const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];

function monthKey(date: Date): string {
  return `${date.getFullYear()}-${date.getMonth()}`;
}

export function BookingPicker({ value, onChange, onPick }: BookingPickerProps) {
  const reducedMotion = useReducedMotion();
  // Slots depend on "now" and the visitor's zone, so they are built on the client only.
  const [slots, setSlots] = useState<Date[] | null>(null);
  const [timeZone, setTimeZone] = useState("");
  const [viewMonth, setViewMonth] = useState<Date | null>(null);
  const [selectedDay, setSelectedDay] = useState<string>("");

  useEffect(() => {
    const generated = generateBookingSlots();
    setSlots(generated);
    setTimeZone(visitorTimeZoneLabel());
    const selected = value ? new Date(value) : null;
    const anchor = selected ?? generated[0] ?? new Date();
    setViewMonth(new Date(anchor.getFullYear(), anchor.getMonth(), 1));
    setSelectedDay(localDateKey(anchor));
    // Only on mount; later changes come from the visitor.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const byDay = useMemo(() => groupSlotsByLocalDay(slots ?? []), [slots]);

  const monthLabel = useMemo(
    () =>
      viewMonth
        ? new Intl.DateTimeFormat(undefined, { month: "long", year: "numeric" }).format(viewMonth)
        : "",
    [viewMonth],
  );

  const grid = useMemo(() => {
    if (!viewMonth) {
      return [] as Array<{ key: string; day: number | null; available: boolean }>;
    }
    const year = viewMonth.getFullYear();
    const month = viewMonth.getMonth();
    const leading = new Date(year, month, 1).getDay();
    const total = new Date(year, month + 1, 0).getDate();
    const cells: Array<{ key: string; day: number | null; available: boolean }> = [];
    for (let i = 0; i < leading; i += 1) {
      cells.push({ key: `lead-${i}`, day: null, available: false });
    }
    for (let day = 1; day <= total; day += 1) {
      const key = localDateKey(new Date(year, month, day));
      cells.push({ key, day, available: byDay.has(key) });
    }
    return cells;
  }, [byDay, viewMonth]);

  const firstSlot = slots?.[0];
  const lastSlot = slots?.[slots.length - 1];
  const canGoPrev = Boolean(viewMonth && firstSlot && monthKey(viewMonth) !== monthKey(firstSlot));
  const canGoNext = Boolean(viewMonth && lastSlot && monthKey(viewMonth) !== monthKey(lastSlot));

  const shiftMonth = (delta: number) => {
    setViewMonth((current) =>
      current ? new Date(current.getFullYear(), current.getMonth() + delta, 1) : current,
    );
  };

  const daySlots = byDay.get(selectedDay) ?? [];
  const dayHeading = daySlots[0] ? formatSlotDay(daySlots[0]) : "";

  if (!slots || !viewMonth) {
    return (
      <div className="bp bp--loading" aria-busy="true">
        <div className="bp-skeleton" />
      </div>
    );
  }

  return (
    <div className="bp">
      <div className="bp-calendar">
        <div className="bp-calendar-head">
          <p className="bp-month">{monthLabel}</p>
          <div className="bp-month-nav">
            <button type="button" aria-label="Previous month" disabled={!canGoPrev} onClick={() => shiftMonth(-1)}>
              <svg viewBox="0 0 16 16" width="14" height="14" fill="none" aria-hidden>
                <path d="M10 3.5L5.5 8L10 12.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button type="button" aria-label="Next month" disabled={!canGoNext} onClick={() => shiftMonth(1)}>
              <svg viewBox="0 0 16 16" width="14" height="14" fill="none" aria-hidden>
                <path d="M6 3.5L10.5 8L6 12.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className="bp-weekdays" aria-hidden>
          {WEEKDAYS.map((label, index) => (
            <span key={`${label}-${index}`}>{label}</span>
          ))}
        </div>

        <div className="bp-grid" role="grid" aria-label="Choose a date">
          {grid.map((cell) =>
            cell.day === null ? (
              <span key={cell.key} className="bp-cell bp-cell--empty" />
            ) : (
              <button
                key={cell.key}
                type="button"
                disabled={!cell.available}
                aria-pressed={selectedDay === cell.key}
                className={`bp-cell${selectedDay === cell.key ? " bp-cell--selected" : ""}${
                  cell.available ? " bp-cell--available" : ""
                }`}
                onClick={() => setSelectedDay(cell.key)}
              >
                {cell.day}
              </button>
            ),
          )}
        </div>
      </div>

      <div className="bp-times">
        <div className="bp-times-head">
          <p className="bp-times-day">{dayHeading || "Choose a day"}</p>
          <p className="bp-times-zone">{timeZone}</p>
        </div>
        <AnimatePresence mode="wait" initial={false}>
          <motion.ul
            key={selectedDay}
            className="bp-times-list"
            initial={{ opacity: 0, y: reducedMotion ? 0 : 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reducedMotion ? 0 : -6 }}
            transition={{ duration: reducedMotion ? 0 : 0.18, ease: "easeOut" }}
          >
            {daySlots.length === 0 ? (
              <li className="bp-times-empty">No times on this day. Pick one of the highlighted dates.</li>
            ) : (
              daySlots.map((slot) => {
                const iso = slot.toISOString();
                const selected = value === iso;
                return (
                  <li key={iso}>
                    <button
                      type="button"
                      className={`bp-time${selected ? " bp-time--selected" : ""}`}
                      aria-pressed={selected}
                      onClick={() => {
                        onChange(iso);
                        onPick?.(iso);
                      }}
                    >
                      {formatSlotTime(slot)}
                      <svg className="bp-time-check" viewBox="0 0 16 16" width="14" height="14" fill="none" aria-hidden>
                        <path d="M3.5 8.5L6.5 11.5L12.5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </li>
                );
              })
            )}
          </motion.ul>
        </AnimatePresence>
      </div>
    </div>
  );
}
