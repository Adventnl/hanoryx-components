import { Sim } from '../../stage/Sim';
import { plot, wipe } from '../../stage/draw';
import { BLUE, mid, none, px } from './shared';

const setup = none;

const tick = (S) => { wipe(S); const f = 0.03 + px(S) * 0.25; plot(S, (x) => mid(S) + Math.sin(x * f - S.t * 3) * S.h * 0.28, BLUE, 1.6); };

export function Frequency() {
  return <Sim label={'A wave whose pitch follows the pointer'} mode={"hover"} setup={setup} tick={tick} />;
}
