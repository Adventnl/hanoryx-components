import { rng } from "../../../stage/hooks";
import c from "../charts.module.css";
import { f1, useScan } from "../shared";

/* 7 */ const CANDLES = (() => {
  const r = rng(41);
  let p = 50;
  const raw = [];
  for (let i = 0; i < 16; i += 1) {
    const o = p;
    const cl = o + (r() - 0.46) * 16;
    raw.push({ o, cl, h: Math.max(o, cl) + r() * 6, l: Math.min(o, cl) - r() * 6 });
    p = cl;
  }
  const lo = Math.min(...raw.map((d) => d.l));
  const hi = Math.max(...raw.map((d) => d.h));
  const y = (v) => f1(48 - ((v - lo) / (hi - lo)) * 44);
  return raw.map((d, i) => ({ x: f1(3 + i * 6.2), hy: y(d.h), ly: y(d.l), oy: y(d.o), cy: y(d.cl), up: d.cl >= d.o, o: Math.round(d.o), cl: Math.round(d.cl) }));
})();

export function Candlesticks() {
  const [i, bind] = useScan(16, { label: (k) => `Candle ${k + 1}: open ${CANDLES[k].o}, close ${CANDLES[k].cl}` });
  const d = CANDLES[i];
  return (
    <div className={c.ch} {...bind} aria-label="Candlesticks, move across them to read open and close">
      <svg viewBox="0 0 100 52" aria-hidden="true">
        {CANDLES.map((k, n) => (
          <g key={n} className={c.candle} data-up={k.up} data-hot={n === i}>
            <line x1={k.x} x2={k.x} y1={k.hy} y2={k.ly} />
            <rect x={k.x - 2} width="4" y={Math.min(k.oy, k.cy)} height={Math.max(Math.abs(k.oy - k.cy), 0.8)} />
          </g>
        ))}
      </svg>
      <output className={c.out}>{d ? <>Open <b>{d.o}</b> · Close <b>{d.cl}</b></> : 'Move across the candles'}</output>
    </div>
  );
}
