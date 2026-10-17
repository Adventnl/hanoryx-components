import c from "../charts.module.css";
import { f1, pct, poly, series, useScan } from "../shared";

/* 32 */ const ERR = series(7, 161, 0.3, 0.85).map((v, i) => ({ v, e: 0.05 + ((i * 37) % 11) / 100 }));

export function ErrorBars() {
  const [i, bind] = useScan(7, { label: (k) => `Point ${k + 1}: ${pct(ERR[k].v)} give or take ${pct(ERR[k].e)}` });
  return (
    <div className={c.ch} {...bind} aria-label="Error bars, move across the points">
      <svg viewBox="0 0 100 52" aria-hidden="true">
        <path className={c.axis} d="M2 48H98" />
        <path className={c.ln} d={poly(ERR.map((d, k) => [f1(8 + k * 14), f1(48 - d.v * 42)]))} />
        {ERR.map((d, k) => {
          const x = 8 + k * 14;
          const y = 48 - d.v * 42;
          const h = d.e * 42;
          return <g key={k} className={c.err} data-hot={k === i}><line x1={x} x2={x} y1={f1(y - h)} y2={f1(y + h)} /><line x1={x - 2} x2={x + 2} y1={f1(y - h)} y2={f1(y - h)} /><line x1={x - 2} x2={x + 2} y1={f1(y + h)} y2={f1(y + h)} /><circle cx={x} cy={f1(y)} r="1.8" /></g>;
        })}
      </svg>
      <output className={c.out}>{i < 0 ? 'Move across the points' : <><b>{pct(ERR[i].v)}</b> ± {pct(ERR[i].e)}</>}</output>
    </div>
  );
}
