import { useState } from 'react';
import c from './charts.module.css';
import { areaOf, curve, pts, series, smooth3 } from './shared';

/* 3 */ const MORPH = [21, 22, 23].map((s) => pts(smooth3(series(10, s)), 100, 50, 5));

export function MorphArea() {
  const [k, setK] = useState(0);
  const area = areaOf(MORPH[k], 52);
  const ln = curve(MORPH[k]);
  return (
    <button type="button" className={c.chBtn} aria-label={`Morph area, dataset ${k + 1} of 3. Click to change`} onClick={() => setK((k + 1) % 3)}>
      <svg viewBox="0 0 100 52" aria-hidden="true">
        <path className={`${c.ar} ${c.morph}`} d={area} style={{ d: `path("${area}")` }} />
        <path className={`${c.ln} ${c.red} ${c.morph}`} d={ln} style={{ d: `path("${ln}")` }} />
      </svg>
      <span className={c.out}>Series <b>{'ABC'[k]}</b></span>
    </button>
  );
}
