import { usePointer } from "../../../stage/pointerVars";
import c from "../heroes.module.css";
import { Sc } from "../shared";

/* 16 */ export function ParallaxOpening() {
  const [ref, bind] = usePointer();
  return <Sc label="Parallax layers" className={c.para} ref={ref} {...bind} tabIndex={0}><i /><i /><i /><h3>Depth</h3></Sc>;
}
