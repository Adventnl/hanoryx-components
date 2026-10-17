import { useCycle } from "../../../stage/hooks";
import c from "../heroes.module.css";
import { Sc } from "../shared";

/* 13 */ export function WordRotator() {
  const i = useCycle(4, 1600);
  const W = ['faster', 'calmer', 'smarter', 'together'];
  return <Sc label="Word rotator" className={c.cen} role="img"><h3>Work <span className={c.rot}><b key={i}>{W[i]}</b></span></h3></Sc>;
}
