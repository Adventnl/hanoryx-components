import { Sim } from "../../../stage/components/sim/Sim";
import { wipe } from "../../../stage/draw";
import { none } from "../shared";

const setup = none;

const tick = (S) => { wipe(S); const n = 24; for (let i = 0; i < n; i += 1) { const h = (0.15 + Math.abs(Math.sin(i * 0.35 - S.t * 3)) * 0.8) * S.h * 0.8; S.ctx.fillStyle = `hsl(${180 + i * 6},80%,60%)`; S.ctx.fillRect(4 + i * ((S.w - 8) / n), (S.h - h) / 2, 3.4, h); } };

export function RippleBars() {
  return <Sim label={'Bars whose heights follow a travelling wave'} mode={"auto"} setup={setup} tick={tick} />;
}
