import c from "../charts.module.css";
import { curve, f1, pct, series, useScan } from "../shared";

/* 38 */ const BL_BARS = series(8, 151, 0.2, 0.9);

const BL_LINE = series(8, 152, 0.2, 0.9);

export function BarsAndLine() {
  const [i, bind] = useScan(8, { label: (k) => `Month ${k + 1}: bar ${pct(BL_BARS[k])}, line ${pct(BL_LINE[k])}` });
  const lp = BL_LINE.map((v, k) => [f1(7 + k * 12.3), f1(48 - v * 42)]);
  return (
    <div className={c.ch} {...bind} aria-label="Bars and line, move across the months">
      <svg viewBox="0 0 100 52" aria-hidden="true">
        <path className={c.axis} d="M2 48H98" />
        {BL_BARS.map((v, k) => <rect key={k} className={c.blBar} data-hot={k === i} x={f1(3 + k * 12.3)} width="8" y={f1(48 - v * 42)} height={f1(v * 42)} />)}
        <path className={`${c.ln} ${c.red}`} d={curve(lp)} />
        {lp.map(([x, y], k) => <circle key={k} className={c.dot} data-hot={k === i} cx={x} cy={y} r="1.5" />)}
      </svg>
      <output className={c.out}>{i < 0 ? 'Move across the months' : <>Bar <b>{pct(BL_BARS[i])}</b> · Line <b>{pct(BL_LINE[i])}</b></>}</output>
    </div>
  );
}
