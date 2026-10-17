import { useState } from 'react';
import c from "../charts.module.css";

/* 15 */ const FUNNEL = [['Visit', 100], ['View', 72], ['Add', 48], ['Buy', 31], ['Keep', 19]];

export function FunnelSteps() {
  const [k, setK] = useState(2);
  return (
    <button type="button" className={c.funnel} aria-label={`Funnel, step ${k + 1} of 5. Click for the next step`} onClick={() => setK((k + 1) % 5)}>
      <svg viewBox="0 0 100 60" aria-hidden="true">
        {FUNNEL.map(([n, v], i) => {
          const nx = FUNNEL[i + 1] ? FUNNEL[i + 1][1] : v * 0.7;
          const y = i * 12;
          return <polygon key={n} data-on={i === k} points={`${50 - v * 0.46},${y} ${50 + v * 0.46},${y} ${50 + nx * 0.46},${y + 11} ${50 - nx * 0.46},${y + 11}`} />;
        })}
      </svg>
      <span className={c.fl}>
        {FUNNEL.map(([n, v], i) => <span key={n} data-on={i === k}><i>{n}</i><b>{v}</b></span>)}
      </span>
    </button>
  );
}
