import { Sim } from '../../stage/Sim';
import { dot, wipe } from '../../stage/draw';
import { none } from './shared';

const setup = none;

const tick = (S) => { wipe(S); for (let j = 0; j < 8; j += 1) for (let i = 0; i < 18; i += 1) { const x = 10 + i * 9.4; const y = 14 + j * 11 + Math.sin(i * 0.5 - S.t * 3 + j * 0.3) * 4; dot(S.ctx, x, y, 1.4 + Math.sin(i * 0.5 - S.t * 3 + j * 0.3) * 0.6, '#fff'); } };

export function DotSwell() {
  return <Sim label={'A grid of dots lifted by a travelling wave'} mode={"auto"} setup={setup} tick={tick} />;
}
