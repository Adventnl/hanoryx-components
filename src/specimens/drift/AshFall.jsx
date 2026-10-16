import { Sim } from '../../stage/Sim';
import { TAU, dot, rnd, wipe } from '../../stage/draw';

const setup = (S) => ({ s: Array.from({ length: 46 }, () => ({ x: rnd(0, S.w), y: rnd(0, S.h), v: rnd(6, 16), r: rnd(0.8, 2), p: rnd(0, TAU) })) });

const tick = (S, dt) => { wipe(S); S.st.s.forEach((p) => { p.y += p.v * dt; p.x += Math.sin(S.t * 0.9 + p.p) * 6 * dt; if (p.y > S.h + 4) { p.y = -4; p.x = rnd(0, S.w); } dot(S.ctx, p.x, p.y, p.r, `rgba(190,190,200,${0.25 + Math.abs(Math.sin(S.t * 2 + p.p)) * 0.4})`); }); };

export function AshFall() {
  return <Sim label={'Grey ash settling'} mode={"auto"} setup={setup} tick={tick} />;
}
