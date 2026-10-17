import c from "../steps.module.css";

const WAVE = Array.from({ length: 41 }, (_, i) => `${i ? 'L' : 'M'}${(i * 100) / 40} ${30 + Math.sin((i / 40) * Math.PI * 4) * 17}`).join('');

export function Visual() {
  return (
    <div className={c.vis} aria-hidden="true">
      <div className={c.visPath}>
        <svg viewBox="0 0 100 60" preserveAspectRatio="none"><path d={WAVE} className={c.visBase} /><path d={WAVE} pathLength="1" className={c.visDraw} /></svg>
        {[0, 1, 2, 3, 4].map((k) => <i key={k} style={{ '--k': k }} />)}
        <b />
      </div>
      <small>5 WAYPOINTS · 1 MARKER</small>
    </div>
  );
}
