import { Sim } from "../../../stage/components/sim/Sim";
import { dot, line, plot, wipe } from "../../../stage/draw";
import { BLUE, none } from "../shared";

const setup = none;

const tick = (S) => {
  wipe(S);
  const f = (x) => S.h * 0.5 - (Math.sin(x * 0.045) + 0.4 * Math.sin(x * 0.11 + 1)) * S.h * 0.22;
  S.ctx.fillStyle = 'rgba(96,165,250,0.18)'; S.ctx.beginPath(); S.ctx.moveTo(0, S.h); for (let x = 0; x <= S.w; x += 2) S.ctx.lineTo(x, f(x)); S.ctx.lineTo(S.w, S.h); S.ctx.fill();
  plot(S, f, BLUE, 1.6);
  const mx = ((S.t * 14) % S.w); line(S.ctx, mx, 0, mx, S.h, 'rgba(255,255,255,0.2)'); dot(S.ctx, mx, f(mx), 3, '#fff');
};

export function TideChart() {
  return <Sim label={'A tide curve with a marker riding it'} mode={"auto"} setup={setup} tick={tick} />;
}
