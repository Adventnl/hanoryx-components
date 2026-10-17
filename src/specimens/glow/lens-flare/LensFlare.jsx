import { usePoint } from "../../../stage/chartKit";
import c from "../glow.module.css";
import { light } from "../shared";

export function LensFlare() {
  const [p, bind] = usePoint();
  return (
    <div className={c.fig}>
      <div {...bind} className={`${c.card} ${c.flare}`} aria-label="A card with a lens flare that follows the pointer" style={{ ...bind.style, ...light(p, [70, 30]) }}>
        <i /><i /><i /><b>Flare</b>
      </div>
    </div>
  );
}
