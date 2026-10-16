import { Sim } from '../../stage/Sim';
import { line, rnd, wipe } from '../../stage/draw';
import { snowSetup } from './shared';

const setup = snowSetup;

const tick = (S, dt) => {
  wipe(S, 0.5);
  const wind = S.in.has ? (S.in.x / S.w - 0.5) * 260 : Math.sin(S.t * 0.5) * 120;
  S.st.s.forEach((p) => {
    p.x += (wind + Math.sin(S.t + p.p) * 10) * dt * (0.5 + p.r * 0.3); p.y += p.v * dt * 1.4;
    if (p.y > S.h + 4) { p.y = -4; p.x = rnd(0, S.w); }
    if (p.x > S.w + 6) p.x = -6; if (p.x < -6) p.x = S.w + 6;
    line(S.ctx, p.x, p.y, p.x - wind * 0.03, p.y - 2, `rgba(255,255,255,${0.5 + p.r * 0.2})`, p.r);
  });
};

export function Blizzard() {
  return <Sim label={'Snow blown sideways; the pointer sets the wind'} mode={"hover"} setup={setup} tick={tick} />;
}
