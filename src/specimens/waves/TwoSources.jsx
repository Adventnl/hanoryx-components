import { Sim } from '../../stage/Sim';
import { wipe } from '../../stage/draw';
import { none } from './shared';

const setup = none;

const tick = (S) => {
  wipe(S);
  const a = [S.w * 0.35 + Math.sin(S.t * 0.5) * 12, S.h / 2]; const b = [S.w * 0.65 - Math.sin(S.t * 0.5) * 12, S.h / 2];
  for (let y = 0; y < S.h; y += 4) for (let x = 0; x < S.w; x += 4) {
    const v = Math.sin(Math.hypot(x - a[0], y - a[1]) * 0.45 - S.t * 4) + Math.sin(Math.hypot(x - b[0], y - b[1]) * 0.45 - S.t * 4);
    const l = (v + 2) / 4; S.ctx.fillStyle = `hsl(205,80%,${8 + l * 62}%)`; S.ctx.fillRect(x, y, 3.4, 3.4);
  }
};

export function TwoSources() {
  return <Sim label={'Interference between two wave sources'} mode={"auto"} setup={setup} tick={tick} />;
}
