import { useEffect, useState } from 'react';
import c from './steps.module.css';

/* 26 */ export function Countdown() {
  const [n, setN] = useState(3);
  useEffect(() => {
    if (n < 0) return undefined;
    const id = setTimeout(() => setN((v) => v - 1), 900);
    return () => clearTimeout(id);
  }, [n]);
  return (
    <div className={c.count}>
      <output aria-live="polite" key={n}>{n > 0 ? n : n === 0 ? 'Go' : '·'}</output>
      <button type="button" onClick={() => setN(3)}>Again</button>
    </div>
  );
}
