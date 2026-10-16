import { Sim } from '../../stage/Sim';
import { TAU, dot, rnd, wipe } from '../../stage/draw';

const setup = (S) => ({ s: Array.from({ length: 14 }, () => ({ x: rnd(0, S.w), y: rnd(0, S.h), r: rnd(6, 18), v: rnd(2, 8), h: rnd(0, 60), p: rnd(0, TAU) })) });

const tick = (S, dt) => { wipe(S); S.ctx.globalCompositeOperation = 'lighter'; S.st.s.forEach((p) => { p.y -= p.v * dt; if (p.y < -p.r) p.y = S.h + p.r; dot(S.ctx, p.x, p.y, p.r, `hsla(${p.h},90%,60%,${0.1 + Math.abs(Math.sin(S.t * 0.6 + p.p)) * 0.14})`); }); };

export function BokehDiscs() {
  return <Sim label={'Out-of-focus discs of light'} mode={"auto"} setup={setup} tick={tick} />;
}
