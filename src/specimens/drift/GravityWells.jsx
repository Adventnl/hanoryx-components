import { Sim } from '../../stage/Sim';
import { TAU, dot, rnd, wipe } from '../../stage/draw';

const setup = (S) => ({ w: [{ x: S.w * 0.5, y: S.h * 0.5 }], s: Array.from({ length: 50 }, () => ({ x: rnd(0, S.w), y: rnd(0, S.h), vx: rnd(-20, 20), vy: rnd(-20, 20) })) });

const tick = (S, dt) => {
    wipe(S, 0.25);
    S.poke.splice(0).forEach((p) => { S.st.w.push({ x: p.x, y: p.y }); if (S.st.w.length > 3) S.st.w.shift(); });
    S.st.s.forEach((p) => {
      S.st.w.forEach((w) => { const dx = w.x - p.x; const dy = w.y - p.y; const d2 = Math.max(100, dx * dx + dy * dy); const f = 9000 / d2; p.vx += (dx / Math.sqrt(d2)) * f * dt; p.vy += (dy / Math.sqrt(d2)) * f * dt; });
      p.x += p.vx * dt; p.y += p.vy * dt;
      if (p.x < 0 || p.x > S.w || p.y < 0 || p.y > S.h) { p.x = rnd(0, S.w); p.y = rnd(0, S.h); p.vx = rnd(-20, 20); p.vy = rnd(-20, 20); }
      dot(S.ctx, p.x, p.y, 1.1, 'rgba(255,255,255,0.85)');
    });
    S.st.w.forEach((w) => { S.ctx.strokeStyle = 'rgba(255,90,90,0.7)'; S.ctx.lineWidth = 1; S.ctx.beginPath(); S.ctx.arc(w.x, w.y, 5, 0, TAU); S.ctx.stroke(); dot(S.ctx, w.x, w.y, 2, '#ff5a5a'); });
  };

export function GravityWells() {
  return <Sim label={'Particles orbiting wells; click to place one'} mode={"click"} setup={setup} tick={tick} />;
}
