import c from "../studio.module.css";

export function Visual() {
  return (
    <div className={c.vis} aria-hidden="true">
      <div className={c.vuBig}>
        <svg viewBox="0 0 100 62">
          <path d="M10 52A46 46 0 0 1 90 52" className={c.arcBase} />
          <path d="M66 14A46 46 0 0 1 90 52" className={c.arcHot} />
          {Array.from({ length: 11 }, (_, k) => { const a = -50 + k * 10; const r = (a * Math.PI) / 180; const x1 = 50 + Math.sin(r) * 44; const y1 = 62 - Math.cos(r) * 44; const x2 = 50 + Math.sin(r) * (k % 5 === 0 ? 36 : 40); const y2 = 62 - Math.cos(r) * (k % 5 === 0 ? 36 : 40); return <line key={k} x1={x1} y1={y1} x2={x2} y2={y2} className={c.vtick} />; })}
          <text x="50" y="40" textAnchor="middle" className={c.vText}>VU</text>
        </svg>
        <i />
        <b />
      </div>
      <div className={c.visBars}>{Array.from({ length: 20 }, (_, k) => <u key={k} style={{ '--k': k }} />)}</div>
      <small>1 NEEDLE · 20 BANDS</small>
    </div>
  );
}
