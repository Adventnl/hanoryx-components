import { Sim } from "../../../stage/components/sim/Sim";
import { TAU, rnd, soft, wipe } from "../../../stage/draw";

const setup = (S) => ({ s: Array.from({ length: 14 }, () => ({ x: rnd(0, S.w), y: rnd(0, S.h), a: rnd(0, TAU), p: rnd(0, TAU), f: rnd(0.6, 1.6) })) });

const tick = (S, dt) => {
    wipe(S, 0.3);
    S.ctx.globalCompositeOperation = 'lighter';
    S.st.s.forEach((p) => { p.a += rnd(-1.5, 1.5) * dt * 2; p.x += Math.cos(p.a) * 14 * dt; p.y += Math.sin(p.a) * 14 * dt; if (p.x < 0) p.x += S.w; if (p.x > S.w) p.x -= S.w; if (p.y < 0) p.y += S.h; if (p.y > S.h) p.y -= S.h; soft(S.ctx, p.x, p.y, 9, 70, 100, 60, Math.max(0, Math.sin(S.t * p.f + p.p)) * 0.9); });
  };

export function Fireflies() {
  return <Sim label={'Fireflies wandering and glowing'} mode={"auto"} setup={setup} tick={tick} />;
}
