import { Sim } from '../../stage/Sim';
import { vnoise } from '../../stage/draw';
import { none } from './shared';

const setup = none;

const tick = (S) => {
  for (let y = 0; y < S.h; y += 4) for (let x = 0; x < S.w; x += 4) { const v = vnoise(x * 0.04 + S.t * 0.8, y * 0.05 + S.t * 0.3); S.ctx.fillStyle = `hsl(260,60%,${6 + v * v * 62}%)`; S.ctx.fillRect(x, y, 4, 4); }
};

export function NoiseCloud() {
  return <Sim label={'A drifting cloud of two-dimensional noise'} mode={"auto"} setup={setup} tick={tick} />;
}
