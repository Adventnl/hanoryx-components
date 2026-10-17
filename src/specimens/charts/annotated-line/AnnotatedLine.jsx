import c from "../charts.module.css";
import { areaOf, curve, pts, series, smooth3, useScan } from "../shared";

/* 40 */ const NOTE_LINE = pts(smooth3(series(24, 191, 0.2, 0.9)), 100, 50, 6);

const NOTES = [[4, 'Launch'], [11, 'Spike'], [19, 'Fix']];

export function AnnotatedLine() {
  const [i, bind] = useScan(24, { label: (k) => `Point ${k + 1}${NOTES.find(([n]) => n === k) ? `, ${NOTES.find(([n]) => n === k)[1]}` : ''}` });
  const note = NOTES.find(([n]) => Math.abs(n - i) <= 1);
  return (
    <div className={c.ch} {...bind} aria-label="Annotated line, move across it to read the notes">
      <svg viewBox="0 0 100 52" aria-hidden="true">
        <path className={c.ar} d={areaOf(NOTE_LINE, 52)} />
        <path className={`${c.ln} ${c.red}`} d={curve(NOTE_LINE)} />
        {NOTES.map(([n, t]) => <g key={n} className={c.flag} data-hot={note?.[0] === n}><line x1={NOTE_LINE[n][0]} x2={NOTE_LINE[n][0]} y1={NOTE_LINE[n][1]} y2="2" /><circle cx={NOTE_LINE[n][0]} cy={NOTE_LINE[n][1]} r="1.7" /><text className={c.t} x={NOTE_LINE[n][0]} y="0" textAnchor="middle">{t}</text></g>)}
      </svg>
      <output className={c.out}>{note ? <>Note · <b>{note[1]}</b></> : 'Move across the line'}</output>
    </div>
  );
}
