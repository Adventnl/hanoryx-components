import c from "../heroes.module.css";
import { Sc } from "../shared";

/* 11 */ export function MarqueeWords() {
  return <Sc label="Marquee headline" className={c.marq} role="img"><div><span>BUILD · SHIP · REPEAT · BUILD · SHIP · REPEAT · </span><span>BUILD · SHIP · REPEAT · BUILD · SHIP · REPEAT · </span></div></Sc>;
}
