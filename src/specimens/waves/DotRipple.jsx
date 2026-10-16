import { Sim } from '../../stage/Sim';
import { dot, wipe } from '../../stage/draw';
import { none } from './shared';

const setup = none;

const tick = (S) => { wipe(S); for (let j = 0; j < 12; j += 1) for (let i = 0; i < 22; i += 1) { const x = 8 + i * 7.6; const y = 8 + j * 8; const r = Math.hypot(x - S.w / 2, y - S.h / 2); dot(S.ctx, x, y, 0.4 + Math.max(0, Math.sin(r * 0.18 - S.t * 3)) * 2.4, `hsl(${200 + r},80%,65%)`); } };

export function DotRipple() {
  return <Sim label={'Dots that swell in rings from the centre'} mode={"auto"} setup={setup} tick={tick} />;
}
