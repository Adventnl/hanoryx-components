import { useId, useLayoutEffect, useRef, useState } from 'react';
import { useControllable } from "../../internal/useControllable";
import { formatDate, monthDays, moveDate, parseDate, shiftMonth } from "../../internal/calendar-model";
import styles from "./Calendar.module.css";

/** A single-date calendar with roving keyboard focus and ISO civil-date values. */
export default function Calendar({
  label = 'Choose a date',
  value,
  defaultValue = '',
  onChange,
  min,
  max,
  disabled = false,
  locale = 'en',
  weekStartsOn = 0,
  today = formatDate(new Date()),
}) {
  const [selected, setSelected] = useControllable({ value, defaultValue, onChange });
  const initial = parseDate(selected) ? selected : today;
  const [focused, setFocused] = useState(initial);
  const [month, setMonth] = useState(initial.slice(0, 7));
  const root = useRef(null);
  const pendingFocus = useRef(null);
  const headingId = useId();
  const start = ((Math.trunc(weekStartsOn) % 7) + 7) % 7;
  const days = monthDays(month, start);
  useLayoutEffect(() => {
    if (pendingFocus.current) {
      root.current?.querySelector(`[data-date="${pendingFocus.current}"]`)?.focus();
      pendingFocus.current = null;
    }
  }, [month, focused]);
  const unavailable = (day) => disabled || Boolean((min && day < min) || (max && day > max));
  function focus(day) {
    const bounded = min && day < min ? min : max && day > max ? max : day;
    pendingFocus.current = bounded;
    setFocused(bounded);
    setMonth(bounded.slice(0, 7));
  }
  function keyDown(event, day) {
    const offset = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 }[event.key];
    let next;
    if (offset) next = moveDate(day, offset);
    else if (event.key === 'Home') next = moveDate(day, -((parseDate(day).getDay() - start + 7) % 7));
    else if (event.key === 'End') next = moveDate(day, 6 - ((parseDate(day).getDay() - start + 7) % 7));
    else if (event.key === 'PageUp' || event.key === 'PageDown')
      next = shiftMonth(day, (event.key === 'PageUp' ? -1 : 1) * (event.shiftKey ? 12 : 1));
    if (next) {
      event.preventDefault();
      focus(next);
    }
  }
  const focusable =
    days.includes(focused) && !unavailable(focused)
      ? focused
      : days.find((d) => d.startsWith(month) && !unavailable(d));
  return (
    <section ref={root} className={styles.calendar} aria-label={label}>
      <div className={styles.header}>
        <button
          type="button"
          disabled={disabled || Boolean(min && `${month}-01` <= min.slice(0, 7) + '-01')}
          aria-label="Previous month"
          onClick={() => focus(shiftMonth(`${month}-01`, -1))}
        >
          ‹
        </button>
        <h3 id={headingId} aria-live="polite">
          {new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }).format(
            parseDate(`${month}-01`),
          )}
        </h3>
        <button
          type="button"
          disabled={disabled || Boolean(max && month >= max.slice(0, 7))}
          aria-label="Next month"
          onClick={() => focus(shiftMonth(`${month}-01`, 1))}
        >
          ›
        </button>
      </div>
      <table aria-labelledby={headingId} className={styles.grid}>
        <thead>
          <tr>
            {Array.from({ length: 7 }, (_, i) => (
              <th key={i} scope="col">
                <abbr
                  title={new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(
                    new Date(2024, 0, 7 + ((start + i) % 7)),
                  )}
                >
                  {new Intl.DateTimeFormat(locale, { weekday: 'short' }).format(
                    new Date(2024, 0, 7 + ((start + i) % 7)),
                  )}
                </abbr>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 6 }, (_, row) => (
            <tr key={row}>
              {days.slice(row * 7, row * 7 + 7).map((day) => (
                <td key={day}>
                  <button
                    type="button"
                    data-date={day}
                    data-outside={!day.startsWith(month) || undefined}
                    aria-label={new Intl.DateTimeFormat(locale, { dateStyle: 'full' }).format(parseDate(day))}
                    aria-pressed={day === selected}
                    aria-current={day === today ? 'date' : undefined}
                    tabIndex={day === focusable ? 0 : -1}
                    disabled={unavailable(day)}
                    onFocus={() => setFocused(day)}
                    onKeyDown={(e) => keyDown(e, day)}
                    onClick={() => {
                      setSelected(day);
                      setMonth(day.slice(0, 7));
                    }}
                  >
                    {parseDate(day).getDate()}
                  </button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
