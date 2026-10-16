import { Sim } from '../../stage/Sim';
import { TAU, plot, wipe } from '../../stage/draw';
import { BLUE, RED, mid, none, px } from './shared';

const setup = none;

const tick = (S) => {
  wipe(S);
  const ph = px(S) * TAU;
  plot(S, (x) => mid(S) + Math.sin(x * 0.08 - S.t * 2) * 16, BLUE, 1.2);
  plot(S, (x) => mid(S) + Math.sin(x * 0.08 - S.t * 2 + ph) * 16, RED, 1.2);
  plot(S, (x) => mid(S) + (Math.sin(x * 0.08 - S.t * 2) + Math.sin(x * 0.08 - S.t * 2 + ph)) * 8, 'rgba(255,255,255,0.8)', 1.6);
};

export function PhaseShift() {
  return <Sim label={'Two waves; the pointer shifts the phase of one'} mode={"hover"} setup={setup} tick={tick} />;
}
