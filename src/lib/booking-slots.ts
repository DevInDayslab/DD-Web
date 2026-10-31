import { bookingAvailability } from "@/config/booking";

const MS_PER_MINUTE = 60_000;

/** Every bookable start time from now, as real instants. */
export function generateBookingSlots(now: Date = new Date()): Date[] {
  const { utcOffsetMinutes, weekdays, startHour, endHour, slotMinutes, daysAhead, minNoticeHours } =
    bookingAvailability;
  const earliest = now.getTime() + minNoticeHours * 60 * MS_PER_MINUTE;
  // "Today" as the studio sees it.
  const studioNow = new Date(now.getTime() + utcOffsetMinutes * MS_PER_MINUTE);
  const slots: Date[] = [];

  for (let offset = 0; offset <= daysAhead; offset += 1) {
    const day = new Date(
      Date.UTC(studioNow.getUTCFullYear(), studioNow.getUTCMonth(), studioNow.getUTCDate() + offset),
    );
    if (!(weekdays as readonly number[]).includes(day.getUTCDay())) {
      continue;
    }
    for (let minute = startHour * 60; minute < endHour * 60; minute += slotMinutes) {
      const instant = day.getTime() + minute * MS_PER_MINUTE - utcOffsetMinutes * MS_PER_MINUTE;
      if (instant >= earliest) {
        slots.push(new Date(instant));
      }
    }
  }
  return slots;
}

/** yyyy-mm-dd in the visitor's own zone. */
export function localDateKey(date: Date): string {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}

export function groupSlotsByLocalDay(slots: readonly Date[]): Map<string, Date[]> {
  const groups = new Map<string, Date[]>();
  for (const slot of slots) {
    const key = localDateKey(slot);
    const list = groups.get(key);
    if (list) {
      list.push(slot);
    } else {
      groups.set(key, [slot]);
    }
  }
  return groups;
}

export function formatSlotTime(date: Date): string {
  return new Intl.DateTimeFormat(undefined, { hour: "numeric", minute: "2-digit" }).format(date);
}

export function formatSlotDay(date: Date): string {
  return new Intl.DateTimeFormat(undefined, { weekday: "short", day: "numeric", month: "short" }).format(
    date,
  );
}

export function visitorTimeZoneLabel(): string {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone.replace(/_/g, " ");
  } catch {
    return bookingAvailability.timeZone;
  }
}
