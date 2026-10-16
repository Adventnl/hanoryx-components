import { Sim } from '../../stage/Sim';
import { TAU, line, prune, rnd, wipe } from '../../stage/draw';
import { rainSetup } from './shared';

const setup = rainSetup;

const tick = (S, dt) => {
  wipe(S, 0.4);
  const g = S.h - 8;
  S.st.s.forEach((p) => {
    p.y += p.v * dt; p.x -= p.v * dt * 0.1;
    if (p.y > g) { S.st.rip.push({ x: p.x, r: 0, a: 0.7 }); p.y = -10; p.x = rnd(0, S.w + 10); }
    line(S.ctx, p.x, p.y, p.x + p.l * 0.1, p.y - p.l, 'rgba(160,200,255,0.5)', 0.8);
  });
  S.st.rip.forEach((r) => { r.r += dt * 30; r.a -= dt * 1.4; if (r.a <= 0) r.dead = true; S.ctx.strokeStyle = `rgba(160,200,255,${r.a})`; S.ctx.lineWidth = 0.8; S.ctx.beginPath(); S.ctx.ellipse(r.x, g + 3, r.r, r.r * 0.3, 0, 0, TAU); S.ctx.stroke(); });
  prune(S.st.rip);
  line(S.ctx, 0, g + 3, S.w, g + 3, 'rgba(160,200,255,0.12)');
};

export function SplashRain() {
  return <Sim label={'Rain that splashes where it lands'} mode={"auto"} setup={setup} tick={tick} />;
}
