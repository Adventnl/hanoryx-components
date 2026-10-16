import { Sim } from '../../stage/Sim';
import { TAU, rnd, soft, wipe } from '../../stage/draw';

const setup = (S) => ({ s: Array.from({ length: 7 }, (_, i) => ({ x: rnd(0, S.w), y: rnd(0, S.h), r: rnd(30, 52), h: 260 + i * 25, p: rnd(0, TAU) })) });

const tick = (S) => { wipe(S); S.ctx.globalCompositeOperation = 'lighter'; S.st.s.forEach((p) => soft(S.ctx, p.x + Math.sin(S.t * 0.4 + p.p) * 14, p.y + Math.cos(S.t * 0.3 + p.p) * 8, p.r, p.h, 80, 55, 0.28)); };

export function NebulaPuffs() {
  return <Sim label={'Soft clouds of colour drifting'} mode={"auto"} setup={setup} tick={tick} />;
}
