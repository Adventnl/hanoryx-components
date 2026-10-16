import { Sim } from '../../stage/Sim';
import { vnoise, wipe } from '../../stage/draw';
import { none } from './shared';

const setup = none;

const tick = (S) => {
  wipe(S);
  [[0.35, 0.03, 4, 0.32], [0.5, 0.05, 8, 0.5], [0.66, 0.08, 14, 0.75]].forEach(([base, f, v, a]) => {
    S.ctx.fillStyle = `rgba(${40 + a * 60},${50 + a * 70},${90 + a * 100},1)`; S.ctx.beginPath(); S.ctx.moveTo(0, S.h);
    for (let x = 0; x <= S.w; x += 3) S.ctx.lineTo(x, S.h * base + vnoise(x * f + S.t * v * 0.1) * 20);
    S.ctx.lineTo(S.w, S.h); S.ctx.fill();
  });
};

export function NoiseRidges() {
  return <Sim label={'Layers of mountains scrolling at different speeds'} mode={"auto"} setup={setup} tick={tick} />;
}
