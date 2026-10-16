import { Sim } from '../../stage/Sim';
import { line, plot, wipe } from '../../stage/draw';
import { GREEN, mid, none, py } from './shared';

const setup = none;

const tick = (S) => { wipe(S); const a = (1 - py(S)) * S.h * 0.45; plot(S, (x) => mid(S) + Math.sin(x * 0.09 - S.t * 3) * a, GREEN, 1.6); line(S.ctx, 0, mid(S) - a, S.w, mid(S) - a, 'rgba(255,255,255,0.15)'); line(S.ctx, 0, mid(S) + a, S.w, mid(S) + a, 'rgba(255,255,255,0.15)'); };

export function Amplitude() {
  return <Sim label={'A wave whose height follows the pointer'} mode={"hover"} setup={setup} tick={tick} />;
}
