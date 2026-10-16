import { useState } from 'react';
import c from './steps.module.css';

/* 12 */ export function LoadMore() {
  const [n, setN] = useState(12);
  return (
    <div className={c.more}>
      <div role="progressbar" aria-label="Loaded" aria-valuemin={0} aria-valuemax={60} aria-valuenow={n}><i style={{ '--v': n / 60 }} /></div>
      <button type="button" disabled={n >= 60} onClick={() => setN((v) => Math.min(60, v + 12))}>{n >= 60 ? 'All loaded' : 'Load 12 more'}</button>
      <small>{n} of 60</small>
    </div>
  );
}
