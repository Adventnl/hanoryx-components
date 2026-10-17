import { Sim } from "../../../stage/components/sim/Sim";
import { line, rnd, wipe } from "../../../stage/draw";
import { rainSetup } from "../shared";

const setup = rainSetup;

const tick = (S, dt) => {
  wipe(S, 0.5);
  S.st.s.forEach((p) => { p.y += p.v * dt; p.x -= p.v * dt * 0.2; if (p.y > S.h) { p.y = -10; p.x = rnd(0, S.w + 20); } line(S.ctx, p.x, p.y, p.x + p.l * 0.2, p.y - p.l, 'rgba(160,200,255,0.55)', 0.8); });
};

export function Rain() {
  return <Sim label={'Rain falling at a slant'} mode={"auto"} setup={setup} tick={tick} />;
}
