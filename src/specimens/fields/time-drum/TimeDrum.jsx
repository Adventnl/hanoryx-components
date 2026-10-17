import c from "../fields.module.css";

/* 11 */ export function TimeDrum() {
  return (
    <div className={c.time}>
      {[24, 60].map((n, k) => (
        <ol key={n} tabIndex={0} aria-label={k ? 'Minutes' : 'Hours'}>{Array.from({ length: n }, (_, i) => <li key={i}>{String(i).padStart(2, '0')}</li>)}</ol>
      ))}
    </div>
  );
}
