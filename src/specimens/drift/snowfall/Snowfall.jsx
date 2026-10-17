import { Sim } from "../../../stage/components/sim/Sim";
import { dot, rnd, wipe } from "../../../stage/draw";
import { snowSetup } from "../shared";

const setup = snowSetup;

const tick = (S, dt) => {
  wipe(S);
  S.st.s.forEach((p) => { p.y += p.v * dt; p.x += Math.sin(S.t * 1.2 + p.p) * 8 * dt; if (p.y > S.h + 4) { p.y = -4; p.x = rnd(0, S.w); } dot(S.ctx, p.x, p.y, p.r, `rgba(255,255,255,${0.5 + p.r * 0.2})`); });
};

export function Snowfall() {
  return <Sim label={'Snow drifting down'} mode={"auto"} setup={setup} tick={tick} />;
}
