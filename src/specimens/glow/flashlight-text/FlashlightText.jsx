import { usePoint } from "../../../stage/chartKit";
import c from "../glow.module.css";
import { light } from "../shared";

const FLASH = 'The names on this card are only readable inside the beam of the flashlight.';

export function FlashlightText() {
  const [p, bind] = usePoint();
  return (
    <div className={c.fig}>
      <div {...bind} className={`${c.card} ${c.flash}`} aria-label="Text that can be read only inside a circle of light" style={{ ...bind.style, ...light(p, [30, 40]) }}>
        <p className={c.dim}>{FLASH}</p>
        <p className={c.lit} aria-hidden="true">{FLASH}</p>
      </div>
    </div>
  );
}
