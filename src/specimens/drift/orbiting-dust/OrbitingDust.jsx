import { Sim } from "../../../stage/components/sim/Sim";
import { TAU, at, dot, rnd, soft, wipe } from "../../../stage/draw";

const setup = () => ({ s: Array.from({ length: 60 }, () => ({ r: rnd(8, 42), a: rnd(0, TAU), w: rnd(0.6, 2.2) })) });

const tick = (S, dt) => {
    wipe(S, 0.25);
    const o = at(S);
    S.st.s.forEach((p) => { p.a += p.w * dt * (1.2 - p.r / 60); dot(S.ctx, o.x + Math.cos(p.a) * p.r * 1.5, o.y + Math.sin(p.a) * p.r * 0.8, 0.9, `hsla(${30 + p.r * 4},90%,70%,0.85)`); });
    soft(S.ctx, o.x, o.y, 9, 40, 100, 70, 0.7);
  };

export function OrbitingDust() {
  return <Sim label={'Dust orbiting a centre that follows the pointer'} mode={"hover"} setup={setup} tick={tick} />;
}
