import { usePointer } from "../../../stage/pointerVars";
import c from "../beams.module.css";
import { cx } from "../shared";

/* 14 */ export function SearchLight() {
  const [ref, bind] = usePointer();
  return <div ref={ref} {...bind} className={cx(c.sw, c.cone)} tabIndex={0} role="img" aria-label="A search light that follows the pointer or the arrow keys"><i /><b /></div>;
}
