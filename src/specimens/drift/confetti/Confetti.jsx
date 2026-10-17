import { Sim } from "../../../stage/components/sim/Sim";
import { TAU, pick, prune, rnd, wipe } from "../../../stage/draw";

/* 27 confetti */
const COLS = ['#ff5a5a', '#ffd43b', '#4ade80', '#60a5fa', '#c084fc', '#fff'];

const pop = (S, x, y, n = 30) => { for (let i = 0; i < n; i += 1) { const a = rnd(-Math.PI, 0); const v = rnd(40, 130); S.st.s.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, a: rnd(0, TAU), w: rnd(-8, 8), col: pick(COLS), l: 1 }); } };

const setup = () => ({ s: [], n: 0.2 });

const tick = (S, dt) => {
    wipe(S, 0.6);
    S.st.n -= dt;
    if (S.st.n <= 0) { pop(S, rnd(S.w * 0.25, S.w * 0.75), S.h, 24); S.st.n = 1.8; }
    S.poke.splice(0).forEach((p) => pop(S, p.x, p.y, 36));
    S.st.s.forEach((p) => { p.vy += 130 * dt; p.vx *= 0.99; p.x += p.vx * dt; p.y += p.vy * dt; p.a += p.w * dt; p.l -= dt * 0.35; if (p.l <= 0 || p.y > S.h + 6) p.dead = true; S.ctx.save(); S.ctx.translate(p.x, p.y); S.ctx.rotate(p.a); S.ctx.scale(1, Math.abs(Math.cos(p.a * 1.5))); S.ctx.fillStyle = p.col; S.ctx.fillRect(-2, -1.2, 4, 2.4); S.ctx.restore(); });
    prune(S.st.s);
  };

export function Confetti() {
  return <Sim label={'Confetti; click to pop more'} mode={"click"} setup={setup} tick={tick} />;
}
