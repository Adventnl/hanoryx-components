import { Sim } from "../../../stage/components/sim/Sim";
import { TAU, dot, rnd, wipe } from "../../../stage/draw";

const setup = (S) => ({ s: Array.from({ length: 36 }, () => ({ x: rnd(0, S.w), y: rnd(0, S.h), p: rnd(0, TAU), r: rnd(0.8, 1.8) })) });

const tick = (S, dt) => { wipe(S, 0.4); S.st.s.forEach((p) => { p.x += (14 + Math.sin(S.t * 0.8 + p.p) * 10) * dt; p.y += Math.cos(S.t * 1.1 + p.p * 2) * 12 * dt; if (p.x > S.w + 4) p.x = -4; dot(S.ctx, p.x, p.y, p.r, 'rgba(255,224,120,0.85)'); }); };

export function Pollen() {
  return <Sim label={'Pollen floating on a breeze'} mode={"auto"} setup={setup} tick={tick} />;
}
