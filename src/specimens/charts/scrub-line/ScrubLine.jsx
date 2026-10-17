import c from "../charts.module.css";
import { areaOf, curve, pct, pts, series, smooth3, useScan } from "../shared";

/* 2 */ const LINE = smooth3(series(24, 5, 0.2, 0.92));

const LINE_P = pts(LINE, 100, 50, 5);

export function ScrubLine() {
  const [i, bind] = useScan(24, { label: (k) => `Point ${k + 1}: ${pct(LINE[k])}` });
  const on = i >= 0;
  return (
    <div className={c.ch} {...bind} aria-label="Scrub line, move across it to read values">
      <svg viewBox="0 0 100 52" aria-hidden="true">
        <path className={c.ar} d={areaOf(LINE_P, 52)} />
        <path className={`${c.ln} ${c.red}`} d={curve(LINE_P)} />
        {on && <g><line className={c.hair} x1={LINE_P[i][0]} x2={LINE_P[i][0]} y1="0" y2="52" /><circle className={c.dot} cx={LINE_P[i][0]} cy={LINE_P[i][1]} r="1.8" /></g>}
      </svg>
      <output className={c.out}>{on ? <>Point {i + 1} · <b>{pct(LINE[i])}</b></> : 'Move across the line'}</output>
    </div>
  );
}
