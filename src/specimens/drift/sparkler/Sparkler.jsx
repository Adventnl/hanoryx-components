import { Sim } from "../../../stage/components/sim/Sim";
import { TAU, at, dot, prune, rnd, soft, wipe } from "../../../stage/draw";

const setup = () => ({ s: [] });

const tick = (S, dt) => {
    wipe(S, 0.35);
    S.ctx.globalCompositeOperation = 'lighter';
    const o = at(S, 1.6);
    for (let i = 0; i < 3; i += 1) { const a = rnd(0, TAU); const v = rnd(10, 60); S.st.s.push({ x: o.x, y: o.y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, l: 1 }); }
    S.st.s.forEach((p) => { p.vy += 60 * dt; p.x += p.vx * dt; p.y += p.vy * dt; p.l -= dt * 1.6; if (p.l <= 0) p.dead = true; dot(S.ctx, p.x, p.y, 0.9, `hsla(${40 + p.l * 20},100%,${60 + p.l * 30}%,${p.l})`); });
    prune(S.st.s);
    soft(S.ctx, o.x, o.y, 8, 45, 100, 80, 0.9);
  };

export function Sparkler() {
  return <Sim label={'A sparkler that trails the pointer'} mode={"hover"} setup={setup} tick={tick} />;
}
