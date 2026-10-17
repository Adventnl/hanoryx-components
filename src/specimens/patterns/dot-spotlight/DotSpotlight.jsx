import { usePointer } from "../../../stage/pointerVars";
import c from "../patterns.module.css";
import { cx } from "../shared";

/* 34 */ export function DotSpotlight() {
  const [ref, bind] = usePointer();
  return <div ref={ref} {...bind} className={cx(c.sw, c.spot)} tabIndex={0} role="img" aria-label="Dots that glow around the pointer or the arrow keys"><i /></div>;
}
