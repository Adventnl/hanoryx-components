import { Sim } from '../../stage/Sim';
import { dot, rnd, wipe } from '../../stage/draw';

const setup = (S) => ({ s: Array.from({ length: 3 }, (_, i) => ({ x: S.w * (0.25 + i * 0.25), y: S.h * 0.3, vx: rnd(-30, 30), vy: 0, r: 5 + i * 1.5, h: i * 70 })) });

const tick = (S, dt) => {
    wipe(S, 0.35);
    S.poke.splice(0).forEach((p) => { S.st.s.push({ x: p.x, y: p.y, vx: rnd(-40, 40), vy: -40, r: rnd(3, 7), h: rnd(0, 360) }); if (S.st.s.length > 9) S.st.s.shift(); });
    S.st.s.forEach((b) => { b.vy += 260 * dt; b.x += b.vx * dt; b.y += b.vy * dt; if (b.y > S.h - b.r) { b.y = S.h - b.r; b.vy *= -0.82; if (Math.abs(b.vy) < 24) b.vy = -rnd(120, 190); } if (b.x < b.r || b.x > S.w - b.r) { b.vx *= -1; b.x = Math.min(S.w - b.r, Math.max(b.r, b.x)); } dot(S.ctx, b.x, b.y, b.r, `hsl(${b.h},80%,62%)`); });
  };

export function BouncingBalls() {
  return <Sim label={'Balls bouncing; click to drop another'} mode={"click"} setup={setup} tick={tick} />;
}
