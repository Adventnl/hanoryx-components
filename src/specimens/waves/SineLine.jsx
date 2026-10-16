import { Sim } from '../../stage/Sim';
import { plot, wipe } from '../../stage/draw';
import { mid, none } from './shared';

const setup = none;

const tick = (S) => { wipe(S); plot(S, (x) => mid(S) + Math.sin(x * 0.08 - S.t * 3) * S.h * 0.28); };

export function SineLine() {
  return <Sim label={'A sine wave travelling along a line'} mode={"auto"} setup={setup} tick={tick} />;
}
