import { Sim } from '../../stage/Sim';
import { line, plot, wipe } from '../../stage/draw';
import { GREEN, none, px } from './shared';

const setup = none;

const tick = (S) => {
  wipe(S);
  const f = px(S);
  plot(S, (x) => S.h * 0.38 + Math.sin(x * (0.05 + f * 0.4) - S.t * 4) * 12, GREEN, 1.4);
  for (let i = 0; i <= 20; i += 1) line(S.ctx, 8 + (i / 20) * (S.w - 16), S.h - 18, 8 + (i / 20) * (S.w - 16), S.h - (i % 5 ? 13 : 9), 'rgba(255,255,255,0.4)');
  line(S.ctx, 8 + f * (S.w - 16), S.h - 24, 8 + f * (S.w - 16), S.h - 4, '#ff5a5a', 1.6);
};

export function FrequencyDial() {
  return <Sim label={'A tuning dial; the pointer picks the frequency'} mode={"hover"} setup={setup} tick={tick} />;
}
