import { rng, clamp } from "../../../stage/hooks";
import c from "../charts.module.css";
import { f1, useScan } from "../shared";

/* 10 */ const SCAT = (() => {
  const r = rng(71);
  return Array.from({ length: 36 }, () => {
    const x = r();
    return { x: f1(4 + x * 92), y: f1(46 - clamp(x * 0.7 + (r() - 0.5) * 0.5 + 0.1, 0, 1) * 42) };
  }).sort((a, b) => a.x - b.x);
})();

export function ScatterField() {
  const [i, bind] = useScan(36, { label: (k) => `Point ${k + 1}` });
  const p = SCAT[i];
  return (
    <div className={c.ch} {...bind} aria-label="Scatter field, move across it to pick a point">
      <svg viewBox="0 0 100 52" aria-hidden="true">
        <path className={c.axis} d="M2 2V50H98" />
        {p && <g className={c.hair}><line x1={p.x} x2={p.x} y1="2" y2="50" /><line x1="2" x2="98" y1={p.y} y2={p.y} /></g>}
        {SCAT.map((d, k) => <circle key={k} className={c.dot} data-hot={k === i} cx={d.x} cy={d.y} r={k === i ? 2.2 : 1.3} />)}
      </svg>
      <output className={c.out}>{p ? <>x <b>{Math.round(p.x)}</b> · y <b>{Math.round(((46 - p.y) / 42) * 100)}</b></> : 'Move across the field'}</output>
    </div>
  );
}
