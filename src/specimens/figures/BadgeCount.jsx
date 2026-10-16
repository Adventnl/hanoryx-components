import { useState } from 'react';
import c from './figures.module.css';

/* 25 */ export function BadgeCount() {
  const [n, setN] = useState(3);
  return (
    <button type="button" className={c.bell} aria-label={`${n} notifications. Click to add one`} onClick={() => setN((v) => (v >= 12 ? 0 : v + 1))}>
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a6 6 0 0 0-6 6v4l-2 3h16l-2-3V9a6 6 0 0 0-6-6zM10 19a2 2 0 0 0 4 0" /></svg>
      {n > 0 && <b key={n}>{n > 9 ? '9+' : n}</b>}
    </button>
  );
}
