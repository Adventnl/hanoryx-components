import { usePoint } from "../../../stage/chartKit";
import c from "../glow.module.css";

export function HeatTrail() {
  const [p, bind] = usePoint();
  return (
    <div className={c.fig}>
      <div {...bind} className={`${c.card} ${c.heat}`} aria-label="A card where a warm trail follows the pointer" style={{ ...bind.style, '--lx': `${p ? p.x : 50}%`, '--ly': `${p ? p.y : 50}%` }}>
        <i /><i /><i /><b>Trail</b>
      </div>
    </div>
  );
}
