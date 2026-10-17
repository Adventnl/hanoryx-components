import c from "../signals.module.css";

export function Visual() {
  return (
    <div className={c.vis} aria-hidden="true">
      <div className={c.beacon}>
        {[0, 1, 2].map((k) => <i key={k} style={{ '--k': k }} />)}
        <b />
      </div>
      <p className={c.word}><span>NOMINAL</span><span>WATCH</span><span>ALERT</span></p>
      <small>1 BEACON · 3 STATES</small>
    </div>
  );
}
