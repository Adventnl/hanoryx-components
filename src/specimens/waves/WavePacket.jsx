import { Sim } from '../../stage/Sim';
import { plot, wipe } from '../../stage/draw';
import { GREEN, mid, none } from './shared';

const setup = none;

const tick = (S) => {
  wipe(S);
  const cx = ((S.t * 24) % (S.w * 1.6)) - S.w * 0.3;
  const env = (x) => Math.exp(-(((x - cx) / 22) ** 2));
  plot(S, (x) => mid(S) - env(x) * S.h * 0.42, 'rgba(255,255,255,0.2)', 1);
  plot(S, (x) => mid(S) + Math.cos((x - cx) * 0.5 + S.t * 8) * env(x) * S.h * 0.38, GREEN, 1.6, 1);
};

export function WavePacket() {
  return <Sim label={'A packet of waves under a bell-shaped envelope'} mode={"auto"} setup={setup} tick={tick} />;
}
