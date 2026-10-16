import { useState } from 'react';
import { useTick } from '../../stage/hooks';
import c from './terminal.module.css';
import { cx } from './shared';

/* 09 */ export function HashProgress() {
  const n = useTick(260);
  const [t0, setT0] = useState(0);
  const p = Math.min(100, ((n - t0) % 30) * 5);
  const f = Math.round(p / 5);
  return (
    <button type="button" className={cx(c.win, c.btn)} onClick={() => setT0(n)} aria-label={`Download ${p} percent. Click to restart`}>
      <span className={c.ln}><span className={c.dim}>fetch</span> data.tar.gz</span>
      <span className={c.ln}>[<span className={c.ok}>{'#'.repeat(f)}</span><span className={c.dim}>{'-'.repeat(20 - f)}</span>] {p}%</span>
    </button>
  );
}
