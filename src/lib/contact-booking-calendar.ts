export type ContactBookingCalendarDay =
  | {
      kind: "muted";
      label: string;
    }
  | {
      kind: "day";
      date: Date;
      label: string;
      selectable: boolean;
    };

function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export function isSameCalendarDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function formatBookingMonthYear(viewDate: Date): string {
  return new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(viewDate);
}

export function formatBookingSlotsHeading(date: Date, prefix: string): string {
  const formatted = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  }).format(date);
  return `${prefix} ${formatted}`;
}

export function addMonths(date: Date, delta: number): Date {
  return new Date(date.getFullYear(), date.getMonth() + delta, 1);
}

export function buildBookingMonthGrid(viewDate: Date, today: Date = new Date()): ContactBookingCalendarDay[][] {
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const firstOfMonth = new Date(year, month, 1);
  const startWeekday = firstOfMonth.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const todayStart = startOfDay(today);

  const cells: ContactBookingCalendarDay[] = [];

  const previousMonthLength = new Date(year, month, 0).getDate();
  for (let i = 0; i < startWeekday; i += 1) {
    cells.push({
      kind: "muted",
      label: String(previousMonthLength - startWeekday + i + 1),
    });
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const date = new Date(year, month, day);
    cells.push({
      kind: "day",
      date,
      label: String(day),
      selectable: startOfDay(date).getTime() >= todayStart.getTime(),
    });
  }

  let nextMonthDay = 1;
  while (cells.length % 7 !== 0) {
    cells.push({ kind: "muted", label: String(nextMonthDay) });
    nextMonthDay += 1;
  }

  const weeks: ContactBookingCalendarDay[][] = [];
  for (let i = 0; i < cells.length; i += 7) {
    weeks.push(cells.slice(i, i + 7));
  }

  return weeks;
}

export function firstSelectableDayInMonth(viewDate: Date, today: Date = new Date()): Date | null {
  const weeks = buildBookingMonthGrid(viewDate, today);
  for (const week of weeks) {
    for (const cell of week) {
      if (cell.kind === "day" && cell.selectable) {
        return cell.date;
      }
    }
  }
  return null;
}
