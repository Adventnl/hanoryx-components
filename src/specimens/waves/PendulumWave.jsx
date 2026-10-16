import { Sim } from '../../stage/Sim';
import { dot, wipe } from '../../stage/draw';
import { none } from './shared';

const setup = none;

const tick = (S) => {
  wipe(S, 0.25);
  for (let i = 0; i < 14; i += 1) { const x = S.w / 2 + Math.sin(S.t * (1.2 + i * 0.07)) * (S.w * 0.42); dot(S.ctx, x, 10 + i * 6.2, 2.2, `hsl(${i * 24},80%,65%)`); }
};

export function PendulumWave() {
  return <Sim label={'A row of pendulums drifting in and out of step'} mode={"auto"} setup={setup} tick={tick} />;
}
