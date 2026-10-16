import { Sim } from '../../stage/Sim';
import { TAU, dot, wipe } from '../../stage/draw';
import { none } from './shared';

const setup = none;

const tick = (S) => { wipe(S); for (let k = 0; k < 5; k += 1) { const p = ((S.t * 0.5 + k / 5) % 1); S.ctx.strokeStyle = `rgba(255,107,107,${1 - p})`; S.ctx.lineWidth = 1.4; S.ctx.beginPath(); S.ctx.ellipse(S.w / 2, S.h / 2, p * S.w * 0.5, p * S.h * 0.5, 0, 0, TAU); S.ctx.stroke(); } dot(S.ctx, S.w / 2, S.h / 2, 2.4, '#fff'); };

export function RingPulse() {
  return <Sim label={'Rings expanding from the centre'} mode={"auto"} setup={setup} tick={tick} />;
}
