import { usePoint } from "../../../stage/chartKit";
import c from "../glow.module.css";
import { light } from "../shared";

export function MagicCard() {
  const [p, bind] = usePoint();
  return (
    <div className={c.fig}>
      <div {...bind} className={`${c.card} ${c.magic}`} aria-label="A card with a spotlight inside and a glowing border" style={{ ...bind.style, ...light(p) }}>
        <b>Magic</b><span>border and fill together</span>
      </div>
    </div>
  );
}
