/**
 * When founders take intro calls. Times are defined in the studio time zone and shown to each
 * visitor in their own. Until real availability is wired to a calendar, this is the single place to edit.
 */
export const bookingAvailability = {
  /** IANA name, shown to visitors when their zone differs. */
  timeZone: "Asia/Kolkata",
  /** Fixed offset of the studio zone in minutes (India has no daylight saving). */
  utcOffsetMinutes: 330,
  /** 0 = Sunday ... 6 = Saturday. */
  weekdays: [1, 2, 3, 4, 5],
  startHour: 10,
  endHour: 18,
  slotMinutes: 30,
  daysAhead: 35,
  minNoticeHours: 12,
} as const;
