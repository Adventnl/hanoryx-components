import c from "../waypoints.module.css";

export function Visual() {
  return (
    <div className={c.vis} aria-hidden="true">
      <div className={c.dial}>
        {Array.from({ length: 8 }, (_, k) => <i key={k} style={{ '--a': k * 45 }}><b>{'N NE E SE S SW W NW'.split(' ')[k]}</b></i>)}
        <u />
        <s />
      </div>
      <small>1 NEEDLE · 8 WAYPOINTS</small>
    </div>
  );
}
