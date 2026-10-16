import { Sim } from '../../stage/Sim';
import { TAU, at, prune, wipe } from '../../stage/draw';

const setup = () => ({ r: [], n: 0 });

const tick = (S, dt) => {
  wipe(S, 0.3);
  const o = at(S, 1.1);
  S.st.n -= dt; if (S.st.n <= 0) { S.st.r.push({ x: o.x, y: o.y, r: 0, a: 1 }); S.st.n = 0.3; }
  S.st.r.forEach((q) => { q.r += 40 * dt; q.a -= dt * 0.7; if (q.a <= 0) q.dead = true; S.ctx.strokeStyle = `rgba(110,200,255,${q.a})`; S.ctx.lineWidth = 1; S.ctx.beginPath(); S.ctx.arc(q.x, q.y, q.r, 0, TAU); S.ctx.stroke(); });
  prune(S.st.r);
};

export function PointerRipples() {
  return <Sim label={'Rings spreading from the pointer'} mode={"hover"} setup={setup} tick={tick} />;
}
