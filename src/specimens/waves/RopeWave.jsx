import { Sim } from '../../stage/Sim';
import { dot, wipe } from '../../stage/draw';
import { RED, mid, py } from './shared';

const setup = () => ({ y: new Float32Array(60), v: new Float32Array(60) });

const tick = (S) => {
  const { y, v } = S.st; const n = y.length;
  y[0] = (py(S) - 0.5) * S.h * 0.8;
  for (let i = 1; i < n - 1; i += 1) v[i] += ((y[i - 1] + y[i + 1]) / 2 - y[i]) * 0.5;
  for (let i = 1; i < n - 1; i += 1) { v[i] *= 0.985; y[i] += v[i]; }
  wipe(S);
  S.ctx.strokeStyle = '#ffd43b'; S.ctx.lineWidth = 2; S.ctx.beginPath(); for (let i = 0; i < n; i += 1) { const x = (i / (n - 1)) * S.w; if (i) S.ctx.lineTo(x, mid(S) + y[i]); else S.ctx.moveTo(x, mid(S) + y[i]); } S.ctx.stroke();
  dot(S.ctx, 0, mid(S) + y[0], 3, RED);
};

export function RopeWave() {
  return <Sim label={'A rope the pointer shakes at one end'} mode={"hover"} setup={setup} tick={tick} />;
}
