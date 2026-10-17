import c from "../keypads.module.css";

/* 17 */ export function StrokeDraw() {
  return <button type="button" className={c.stroke}><svg viewBox="0 0 120 40" preserveAspectRatio="none" aria-hidden="true"><rect x="1" y="1" width="118" height="38" pathLength="1" /></svg><span>Draw</span></button>;
}
