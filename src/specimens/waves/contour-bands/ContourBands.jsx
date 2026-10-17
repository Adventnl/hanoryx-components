import { Sim } from "../../../stage/components/sim/Sim";
import { vnoise } from "../../../stage/draw";
import { none } from "../shared";

const setup = none;

const tick = (S) => { for (let y = 0; y < S.h; y += 4) for (let x = 0; x < S.w; x += 4) { const v = Math.floor(vnoise(x * 0.035 + S.t * 0.3, y * 0.045 - S.t * 0.2) * 7); S.ctx.fillStyle = `hsl(${170 + v * 22},60%,${12 + v * 8}%)`; S.ctx.fillRect(x, y, 4, 4); } };

export function ContourBands() {
  return <Sim label={'Banded contours of a moving noise field'} mode={"auto"} setup={setup} tick={tick} />;
}
