import { useState } from 'react';
import { useTick } from '../../stage/hooks';
import c from './terminal.module.css';
import { cx } from './shared';

/* 40 */ export function TestDots() {
  const n = useTick(240);
  const [t0, setT0] = useState(0);
  const total = 28;
  const k = Math.min(total, ((n - t0) % (total + 12)));
  const dots = Array.from({ length: k }, (_, i) => (i === 13 ? 'F' : '.'));
  return (
    <button type="button" className={cx(c.win, c.btn)} onClick={() => setT0(n)} aria-label="Test run. Click to rerun">
      <span className={cx(c.ln, c.dots)}>{dots.map((d, i) => <b key={i} className={d === 'F' ? c.err : c.ok}>{d}</b>)}</span>
      <span className={c.ln}>{k >= total ? <><b className={c.err}>1 failed</b> <span className={c.dim}>27 passed</span></> : <span className={c.dim}>running {k}/{total}</span>}</span>
    </button>
  );
}
