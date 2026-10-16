import { useDrag } from '../../stage/hooks';
import { curve } from '../../stage/chartKit';
import c from './studio.module.css';

/* 18 */ export function EQCurve() {
  const [lo, bLo] = useDrag({ mode: 'y', init: 0.62 });
  const [mid, bMid] = useDrag({ mode: 'y', init: 0.45 });
  const [hi, bHi] = useDrag({ mode: 'y', init: 0.58 });
  const p = [[0, 0.5], [18, lo], [50, mid], [82, hi], [100, 0.5]].map(([x, y]) => [x, 50 - (y - 0.5) * 80]);
  return (
    <div className={c.eq}>
      <svg viewBox="0 0 100 100" aria-hidden="true"><path d="M0 50h100M25 0v100M50 0v100M75 0v100" className={c.grid} /><path d={curve(p)} className={c.trace} /></svg>
      <div>{[['Low', lo, bLo], ['Mid', mid, bMid], ['High', hi, bHi]].map(([n, v, b]) => <span key={n}><div {...b} aria-label={`${n} gain`} aria-valuetext={`${((v - 0.5) * 24).toFixed(1)} dB`} style={{ ...b.style, '--v': v }}><i /></div><small>{n}</small></span>)}</div>
    </div>
  );
}
