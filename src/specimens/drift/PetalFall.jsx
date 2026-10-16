import { Sim } from '../../stage/Sim';
import { TAU, rnd, wipe } from '../../stage/draw';

const setup = (S) => ({ s: Array.from({ length: 22 }, () => ({ x: rnd(0, S.w), y: rnd(0, S.h), a: rnd(0, TAU), v: rnd(10, 24), w: rnd(-2, 2), s: rnd(2.4, 4.4) })) });

const tick = (S, dt) => {
    wipe(S);
    S.st.s.forEach((p) => { p.y += p.v * dt; p.x += Math.sin(S.t + p.a) * 10 * dt; p.a += p.w * dt; if (p.y > S.h + 6) { p.y = -6; p.x = rnd(0, S.w); } S.ctx.save(); S.ctx.translate(p.x, p.y); S.ctx.rotate(p.a); S.ctx.scale(1, 0.55 + Math.abs(Math.sin(S.t * 1.5 + p.a)) * 0.45); S.ctx.fillStyle = 'rgba(255,170,200,0.85)'; S.ctx.beginPath(); S.ctx.ellipse(0, 0, p.s, p.s * 0.55, 0, 0, TAU); S.ctx.fill(); S.ctx.restore(); });
  };

export function PetalFall() {
  return <Sim label={'Petals turning as they fall'} mode={"auto"} setup={setup} tick={tick} />;
}
