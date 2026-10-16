import { Sim } from '../../stage/Sim';
import { TAU, dot, prune, rnd, wipe } from '../../stage/draw';

/* 18 fireworks */
const rocket = (S, x) => S.st.r.push({ x, y: S.h, vy: -rnd(90, 120), h: rnd(0, 360), tx: rnd(S.h * 0.15, S.h * 0.45) });

const setup = () => ({ r: [], s: [], n: 0.3 });

const tick = (S, dt) => {
    wipe(S, 0.28);
    S.ctx.globalCompositeOperation = 'lighter';
    S.st.n -= dt;
    if (S.st.n <= 0) { rocket(S, rnd(S.w * 0.2, S.w * 0.8)); S.st.n = 1.6; }
    S.poke.splice(0).forEach((p) => rocket(S, p.x));
    S.st.r.forEach((r) => {
      r.y += r.vy * dt; dot(S.ctx, r.x, r.y, 1.2, '#fff');
      if (r.y <= r.tx) { r.dead = true; for (let i = 0; i < 36; i += 1) { const a = (i / 36) * TAU; const v = rnd(30, 50); S.st.s.push({ x: r.x, y: r.y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, l: 1, h: r.h }); } }
    });
    S.st.s.forEach((p) => { p.vy += 40 * dt; p.vx *= 0.985; p.vy *= 0.985; p.x += p.vx * dt; p.y += p.vy * dt; p.l -= dt * 0.8; if (p.l <= 0) p.dead = true; dot(S.ctx, p.x, p.y, 1.1, `hsla(${p.h},100%,65%,${p.l})`); });
    prune(S.st.r); prune(S.st.s);
  };

export function Fireworks() {
  return <Sim label={'Fireworks; click to launch one'} mode={"click"} setup={setup} tick={tick} />;
}
