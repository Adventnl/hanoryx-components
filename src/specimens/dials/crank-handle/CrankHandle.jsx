import c from "../dials.module.css";
import { useSpin } from "../shared";

/* 19 */ export function CrankHandle() {
  const [rot, bind] = useSpin();
  return (
    <div className={c.crank} {...bind} aria-label="Crank handle" style={{ ...bind.style, '--r': `${rot}deg` }}>
      <i><b /></i><span>{Math.floor(Math.abs(rot) / 360)} turns</span>
    </div>
  );
}
