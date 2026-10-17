import { useTick } from "../../../stage/hooks";
import c from "../morphs.module.css";
import { ngonR, poly, radial } from "../shared";

/* 42 */ export function SideCounter() {
  const n = useTick(1600);
  const sides = [3, 4, 5, 6][n % 4];
  return (
    <div className={c.stage} role="img" aria-label={`A ${sides}-sided shape that gains a side each moment`}>
      <i className={c.nside} style={{ clipPath: poly(radial(ngonR(sides))) }} />
      <small className={c.cap}>{sides} sides</small>
    </div>
  );
}
