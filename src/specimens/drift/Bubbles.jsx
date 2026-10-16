import { Sim } from '../../stage/Sim';
import { TAU, dot, rnd, wipe } from '../../stage/draw';

const setup = (S) => ({ s: Array.from({ length: 22 }, () => ({ x: rnd(0, S.w), y: rnd(0, S.h), r: rnd(2, 7), v: rnd(10, 30), p: rnd(0, TAU) })) });

const tick = (S, dt) => {
    wipe(S);
    S.st.s.forEach((p) => { p.y -= p.v * dt; if (p.y < -10) { p.y = S.h + 10; p.x = rnd(0, S.w); } const x = p.x + Math.sin(S.t * 1.5 + p.p) * 4; S.ctx.strokeStyle = 'rgba(160,220,255,0.6)'; S.ctx.lineWidth = 0.8; S.ctx.beginPath(); S.ctx.arc(x, p.y, p.r, 0, TAU); S.ctx.stroke(); dot(S.ctx, x - p.r * 0.35, p.y - p.r * 0.35, p.r * 0.2, 'rgba(255,255,255,0.7)'); });
  };

export function Bubbles() {
  return <Sim label={'Bubbles rising and wobbling'} mode={"auto"} setup={setup} tick={tick} />;
}
