import c from "../kinetic.module.css";

/* 32 */ export function StrokeWrite() {
  return (
    <div className={c.fig} role="img" aria-label="Write, drawn letter by letter">
      <svg className={c.writeSvg} viewBox="0 0 120 40" aria-hidden="true">
        {[...'WRITE'].map((ch, i) => <text key={i} className={c.writeText} x={12 + i * 24} y="31" style={{ '--i': i }}>{ch}</text>)}
      </svg>
    </div>
  );
}
