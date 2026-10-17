import { Sim } from "../../../stage/components/sim/Sim";
import { TAU, line, prune, rnd, wipe } from "../../../stage/draw";

/* 17 spark burst */
const burst = (S, x, y, n = 26) => { for (let i = 0; i < n; i += 1) { const a = rnd(0, TAU); const v = rnd(20, 90); S.st.s.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 20, l: 1, h: rnd(20, 55) }); } };

const setup = () => ({ s: [], n: 0 });

const tick = (S, dt) => {
    wipe(S, 0.3);
    S.ctx.globalCompositeOperation = 'lighter';
    S.st.n -= dt;
    if (S.st.n <= 0) { burst(S, rnd(S.w * 0.2, S.w * 0.8), rnd(S.h * 0.3, S.h * 0.7)); S.st.n = 1.4; }
    S.poke.splice(0).forEach((p) => burst(S, p.x, p.y, 34));
    S.st.s.forEach((p) => { p.vy += 120 * dt; p.x += p.vx * dt; p.y += p.vy * dt; p.l -= dt * 0.9; if (p.l <= 0) p.dead = true; line(S.ctx, p.x, p.y, p.x - p.vx * 0.04, p.y - p.vy * 0.04, `hsla(${p.h},100%,65%,${p.l})`, 1.2); });
    prune(S.st.s);
  };

export function SparkBurst() {
  return <Sim label={'Sparks bursting; click to set one off'} mode={"click"} setup={setup} tick={tick} />;
}
