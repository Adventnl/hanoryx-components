import { usePointer } from "../../../stage/pointerVars";
import c from "../heroes.module.css";
import { Sc, cx } from "../shared";

/* 15 */ export function SpotlightOpening() {
  const [ref, bind] = usePointer();
  return <Sc label="Spotlight hero" className={cx(c.spot)} ref={ref} {...bind} tabIndex={0}><h3>Find the light</h3></Sc>;
}
