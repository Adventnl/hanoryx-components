import { Sim } from '../../stage/Sim';
import { dot, plot, wipe } from '../../stage/draw';
import { mid } from './shared';

const setup = () => ({ t0: 0 });

const tick = (S) => {
  wipe(S);
  S.poke.splice(0).forEach(() => { S.st.t0 = S.t; });
  const k = S.t - S.st.t0;
  const f = (x) => mid(S) + Math.exp(-(x / S.w) * 3.4) * Math.cos(x * 0.14) * S.h * 0.38;
  plot(S, f, 'rgba(255,255,255,0.18)', 1);
  const kx = ((k * 30) % S.w);
  plot(S, (x) => (x < kx ? f(x) : NaN), '#60a5fa', 1.6);
  dot(S.ctx, kx, f(kx), 3, '#fff');
};

export function DampedSpring() {
  return <Sim label={'A spring-mass oscillation dying away; click to flick it'} mode={"click"} setup={setup} tick={tick} />;
}
