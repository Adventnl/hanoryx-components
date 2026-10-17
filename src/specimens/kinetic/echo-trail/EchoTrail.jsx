import { usePoint } from "../../../stage/chartKit";
import c from "../kinetic.module.css";

/* 30 */ export function EchoTrail() {
  const [p, bind] = usePoint();
  const dx = p ? (p.x - 50) * 0.5 : 0;
  const dy = p ? (p.y - 50) * 0.5 : 0;
  return (
    <div className={c.fig}>
      <div className={c.echo} {...bind} aria-label="Echo trail, move over it to drag the echoes" style={{ ...bind.style, '--dx': `${dx.toFixed(1)}px`, '--dy': `${dy.toFixed(1)}px` }}><b>ECHO</b></div>
    </div>
  );
}
