import { Sim } from "../../../stage/components/sim/Sim";
import { wipe } from "../../../stage/draw";
import { none } from "../shared";

const setup = none;

const tick = (S) => {
  wipe(S);
  [[0.4, 0.07, 1.0, '#1d4f91'], [0.5, 0.09, 1.6, '#2563a8'], [0.62, 0.06, 2.2, '#3b82c4'], [0.76, 0.08, 3, '#60a5e0']].forEach(([top, f, v, col]) => {
    S.ctx.fillStyle = col; S.ctx.beginPath(); S.ctx.moveTo(0, S.h);
    for (let x = 0; x <= S.w; x += 3) S.ctx.lineTo(x, S.h * top + Math.sin(x * f - S.t * v) * 6);
    S.ctx.lineTo(S.w, S.h); S.ctx.fill();
  });
};

export function LayeredSwells() {
  return <Sim label={'Four layers of sea sliding at different speeds'} mode={"auto"} setup={setup} tick={tick} />;
}
