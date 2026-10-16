/** ISO civil dates are parsed at noon to avoid daylight-saving midnight gaps. */
export function parseDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value || '')) return null;
  const [year, month, day] = value.split('-').map(Number);
  const date = new Date(0);
  date.setFullYear(year, month - 1, day);
  date.setHours(12, 0, 0, 0);
  return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day ? date : null;
}

export function formatDate(date) {
  return `${String(date.getFullYear()).padStart(4, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

export function moveDate(value, days) {
  const date = parseDate(value);
  if (!date) return value;
  date.setDate(date.getDate() + days);
  return formatDate(date);
}

export function monthDays(month, weekStartsOn = 0) {
  const date = parseDate(`${month}-01`);
  if (!date) return [];
  date.setDate(1 - ((date.getDay() - weekStartsOn + 7) % 7));
  return Array.from({ length: 42 }, (_, i) => moveDate(formatDate(date), i));
}

export function shiftMonth(value, delta) {
  const date = parseDate(value);
  const day = date.getDate();
  date.setDate(1);
  date.setMonth(date.getMonth() + delta);
  const last = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  date.setDate(Math.min(day, last));
  return formatDate(date);
}
