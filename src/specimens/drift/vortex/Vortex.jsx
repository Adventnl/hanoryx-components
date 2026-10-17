import { Sim } from "../../../stage/components/sim/Sim";
import { TAU, at, dot, rnd, wipe } from "../../../stage/draw";

const setup = () => ({ s: Array.from({ length: 80 }, () => ({ a: rnd(0, TAU), r: rnd(6, 70) })) });

const tick = (S, dt) => {
    wipe(S, 0.2);
    const o = at(S, 0.7);
    S.st.s.forEach((p) => { p.a += (60 / (p.r + 10)) * dt * 2; p.r -= 8 * dt; if (p.r < 2) { p.r = rnd(50, 80); p.a = rnd(0, TAU); } dot(S.ctx, o.x + Math.cos(p.a) * p.r * 1.4, o.y + Math.sin(p.a) * p.r * 0.8, 1, `hsla(${180 + p.r * 2},90%,70%,${Math.min(1, p.r / 20)})`); });
  };

export function Vortex() {
  return <Sim label={'Particles spiralling into the pointer'} mode={"hover"} setup={setup} tick={tick} />;
}
