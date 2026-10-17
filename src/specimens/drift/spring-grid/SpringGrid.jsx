import { Sim } from "../../../stage/components/sim/Sim";
import { dot, line, wipe } from "../../../stage/draw";

const setup = (S) => ({ s: Array.from({ length: 40 }, (_, i) => { const x = 12 + (i % 8) * ((S.w - 24) / 7); const y = 12 + Math.floor(i / 8) * ((S.h - 24) / 4); return { ox: x, oy: y, x, y, vx: 0, vy: 0 }; }) });

const tick = (S, dt) => {
    wipe(S);
    const o = S.in.has ? S.in : { x: -99, y: -99 };
    S.st.s.forEach((p) => {
      const dx = p.x - o.x; const dy = p.y - o.y; const d = Math.hypot(dx, dy) || 1;
      if (d < 34) { p.vx += (dx / d) * (34 - d) * 30 * dt; p.vy += (dy / d) * (34 - d) * 30 * dt; }
      p.vx += (p.ox - p.x) * 40 * dt; p.vy += (p.oy - p.y) * 40 * dt; p.vx *= 0.88; p.vy *= 0.88; p.x += p.vx * dt * 10; p.y += p.vy * dt * 10;
      line(S.ctx, p.ox, p.oy, p.x, p.y, 'rgba(255,255,255,0.12)', 0.6); dot(S.ctx, p.x, p.y, 1.6, '#fff');
    });
  };

export function SpringGrid() {
  return <Sim label={'A grid of dots on springs that the pointer pushes away'} mode={"hover"} setup={setup} tick={tick} />;
}
