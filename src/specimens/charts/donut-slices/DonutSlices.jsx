import { useState } from 'react';
import c from "../charts.module.css";
import { Legend } from "../shared";

/* 5 */ const DONUT = [['Apps', 34], ['Docs', 22], ['Media', 18], ['Other', 14], ['Free', 12]];

const DONUT_FROM = DONUT.map((_, i) => DONUT.slice(0, i).reduce((a, [, v]) => a + v, 0));

export function DonutSlices() {
  const [hot, setHot] = useState(-1);
  return (
    <div className={c.donut} data-hot={hot}>
      <div className={c.ring}>
        <svg viewBox="0 0 100 100" aria-hidden="true">
          {DONUT.map(([n, v], i) => (
            <circle key={n} className={c.slice} data-hot={hot === i} style={{ '--k': i }} cx="50" cy="50" r="36" pathLength="100" strokeDasharray={`${v - 1.2} ${101.2 - v}`} strokeDashoffset={-DONUT_FROM[i]} onPointerEnter={() => setHot(i)} onPointerLeave={() => setHot(-1)} />
          ))}
        </svg>
        <p><b>{hot < 0 ? 100 : DONUT[hot][1]}</b><i>{hot < 0 ? 'total' : DONUT[hot][0]}</i></p>
      </div>
      <Legend items={DONUT} hot={hot} setHot={setHot} />
    </div>
  );
}
