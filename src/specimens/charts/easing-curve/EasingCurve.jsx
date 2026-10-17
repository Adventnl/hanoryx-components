import { useState } from 'react';
import { clamp } from "../../../stage/hooks";
import c from "../charts.module.css";
import { f1 } from "../shared";

/* 31 */ const fmt = (n) => (Math.round(n * 100) / 100).toString().replace(/^0\./, "../index");

export function EasingCurve() {
  const [p, setP] = useState({ a: [0.25, 0.1], b: [0.25, 1] });
  const move = (key, e) => {
    if (!e.currentTarget.hasPointerCapture?.(e.pointerId)) return;
    const r = e.currentTarget.parentElement.getBoundingClientRect();
    const x = clamp((e.clientX - r.left) / r.width);
    const y = clamp(1.2 - ((e.clientY - r.top) / r.height) * 1.4, -0.2, 1.2);
    setP((q) => ({ ...q, [key]: [Math.round(x * 100) / 100, Math.round(y * 100) / 100] }));
  };
  const nudge = (key, e) => {
    const d = { ArrowLeft: [-0.05, 0], ArrowRight: [0.05, 0], ArrowUp: [0, 0.05], ArrowDown: [0, -0.05] }[e.key];
    if (!d) return;
    e.preventDefault();
    setP((q) => ({ ...q, [key]: [clamp(q[key][0] + d[0]), clamp(q[key][1] + d[1], -0.2, 1.2)].map((n) => Math.round(n * 100) / 100) }));
  };
  const Y = (y) => f1(((1.2 - y) / 1.4) * 100);
  const css = `cubic-bezier(${fmt(p.a[0])}, ${fmt(p.a[1])}, ${fmt(p.b[0])}, ${fmt(p.b[1])})`;
  return (
    <div className={c.easeWrap} style={{ '--ease': `cubic-bezier(${p.a[0]},${p.a[1]},${p.b[0]},${p.b[1]})` }}>
      <div className={c.ease}>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <path className={c.gr} d={`M0 ${Y(0)}H100M0 ${Y(1)}H100`} />
          <path className={c.hair} d={`M0 ${Y(0)}L${p.a[0] * 100} ${Y(p.a[1])}M100 ${Y(1)}L${p.b[0] * 100} ${Y(p.b[1])}`} />
          <path className={`${c.ln} ${c.red}`} vectorEffect="non-scaling-stroke" d={`M0 ${Y(0)}C${p.a[0] * 100} ${Y(p.a[1])} ${p.b[0] * 100} ${Y(p.b[1])} 100 ${Y(1)}`} />
        </svg>
        {['a', 'b'].map((key, n) => (
          <button key={key} type="button" className={c.handle} aria-label={`Control point ${n + 1}, arrow keys or drag`} style={{ left: `${p[key][0] * 100}%`, top: `${Y(p[key][1])}%` }}
            onPointerDown={(e) => e.currentTarget.setPointerCapture?.(e.pointerId)} onPointerMove={(e) => move(key, e)} onKeyDown={(e) => nudge(key, e)} />
        ))}
      </div>
      <span className={c.ball}><i /></span>
      <output className={c.out}>{css}</output>
    </div>
  );
}
