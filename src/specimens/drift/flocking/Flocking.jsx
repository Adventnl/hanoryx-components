import { Sim } from "../../../stage/components/sim/Sim";
import { rnd, wipe } from "../../../stage/draw";

const setup = (S) => ({ s: Array.from({ length: 34 }, () => ({ x: rnd(0, S.w), y: rnd(0, S.h), vx: rnd(-30, 30), vy: rnd(-30, 30) })) });

const tick = (S, dt) => {
    wipe(S, 0.35);
    const b = S.st.s;
    b.forEach((p) => {
      let ax = 0; let ay = 0; let cx = 0; let cy = 0; let n = 0;
      b.forEach((q) => { if (q === p) return; const dx = q.x - p.x; const dy = q.y - p.y; const d = Math.hypot(dx, dy); if (d < 36) { ax += q.vx; ay += q.vy; cx += q.x; cy += q.y; n += 1; if (d < 10) { p.vx -= dx * 0.4; p.vy -= dy * 0.4; } } });
      if (n) { p.vx += ((ax / n - p.vx) * 0.6 + (cx / n - p.x) * 0.4) * dt * 2; p.vy += ((ay / n - p.vy) * 0.6 + (cy / n - p.y) * 0.4) * dt * 2; }
      if (S.in.has) { p.vx += (S.in.x - p.x) * dt * 0.8; p.vy += (S.in.y - p.y) * dt * 0.8; }
      const sp = Math.hypot(p.vx, p.vy) || 1; const k = Math.min(1.4, Math.max(0.6, 46 / sp)); p.vx *= k > 1 ? 1 + (k - 1) * dt * 3 : 1 - (1 - k) * dt * 3; p.vy *= k > 1 ? 1 + (k - 1) * dt * 3 : 1 - (1 - k) * dt * 3;
      p.x += p.vx * dt; p.y += p.vy * dt;
      if (p.x < 0) p.x = S.w; if (p.x > S.w) p.x = 0; if (p.y < 0) p.y = S.h; if (p.y > S.h) p.y = 0;
      const a = Math.atan2(p.vy, p.vx);
      S.ctx.fillStyle = '#fff'; S.ctx.beginPath(); S.ctx.moveTo(p.x + Math.cos(a) * 4, p.y + Math.sin(a) * 4); S.ctx.lineTo(p.x + Math.cos(a + 2.5) * 3, p.y + Math.sin(a + 2.5) * 3); S.ctx.lineTo(p.x + Math.cos(a - 2.5) * 3, p.y + Math.sin(a - 2.5) * 3); S.ctx.fill();
    });
  };

export function Flocking() {
  return <Sim label={'A flock that turns together and follows the pointer'} mode={"hover"} setup={setup} tick={tick} />;
}
