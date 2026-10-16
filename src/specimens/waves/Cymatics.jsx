import { Sim } from '../../stage/Sim';
import { dot, wipe } from '../../stage/draw';
import { none } from './shared';

const setup = none;

const tick = (S) => { wipe(S); for (let y = 2; y < S.h; y += 5) for (let x = 2; x < S.w; x += 5) { const r = Math.hypot(x - S.w / 2, (y - S.h / 2) * 1.5); const v = Math.cos(r * 0.28) * Math.cos(S.t * 3); dot(S.ctx, x, y, 0.5 + Math.abs(v) * 1.7, v > 0 ? '#60a5fa' : '#ff6b6b'); } };

export function Cymatics() {
  return <Sim label={'A circular standing wave drawn in dots'} mode={"auto"} setup={setup} tick={tick} />;
}
