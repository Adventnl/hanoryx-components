import { Sim } from '../../stage/Sim';
import { at, rnd, soft, wipe } from '../../stage/draw';

const setup = (S) => ({ s: Array.from({ length: 40 }, () => ({ x: rnd(0, S.w), y: rnd(0, S.h), vx: 0, vy: 0, h: rnd(260, 330) })) });

const tick = (S, dt) => {
    wipe(S, 0.3);
    S.ctx.globalCompositeOperation = 'lighter';
    const o = at(S, 0.8);
    S.st.s.forEach((p) => { const dx = o.x - p.x; const dy = o.y - p.y; const d = Math.hypot(dx, dy) + 8; p.vx += (dx / d) * 120 * dt + rnd(-6, 6); p.vy += (dy / d) * 120 * dt + rnd(-6, 6); p.vx *= 0.97; p.vy *= 0.97; p.x += p.vx * dt; p.y += p.vy * dt; soft(S.ctx, p.x, p.y, 5, p.h, 100, 65, 0.7); });
  };

export function PlasmaMotes() {
  return <Sim label={'Glowing motes drawn toward the pointer'} mode={"hover"} setup={setup} tick={tick} />;
}
