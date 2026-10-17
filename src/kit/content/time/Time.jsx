import { useEffect, useState } from 'react';
import { useOnScreen } from '../../../core/hooks/use-on-screen/useOnScreen';

/** Static by default; dateTime must be a valid ISO date or timestamp. */
export function Timestamp({ dateTime, locale = 'en', options, children }) {
  const date = new Date(dateTime);
  if (!Number.isFinite(date.getTime())) return <span>Invalid date</span>;
  return <time dateTime={dateTime}>{children ?? new Intl.DateTimeFormat(locale, options).format(date)}</time>;
}
/** Elapsed seconds; ticking is opt-in and pauses off screen. No live announcement each second. */
export function Timer({ seconds = 0, running = false, label = 'Elapsed time' }) {
  const [ref, visible] = useOnScreen();
  const [elapsed, setElapsed] = useState(0);
  useEffect(() => {
    if (!running || !visible) return;
    const id = setInterval(() => setElapsed(value => value + 1), 1000);
    return () => clearInterval(id);
  }, [running, visible]);
  const total = Math.max(0, Math.floor(seconds + elapsed));
  return <span ref={ref} role="timer" aria-label={label}>{Math.floor(total / 60)}:{String(total % 60).padStart(2, '0')}</span>;
}
