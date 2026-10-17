import { Sim } from "../../../stage/components/sim/Sim";
import { dot, plot, wipe } from "../../../stage/draw";
import { RED, mid, none } from "../shared";

const setup = none;

const tick = (S) => {
  wipe(S);
  const A = Math.cos(S.t * 4);
  [1, 0.5, 0.25].forEach((k, i) => plot(S, (x) => mid(S) + Math.sin((x / S.w) * Math.PI * 3) * S.h * 0.3 * A * (i ? 1 : 1) * (i === 0 ? 1 : 0), `rgba(110,231,183,${k})`, i ? 1 : 1.8));
  plot(S, (x) => mid(S) - Math.sin((x / S.w) * Math.PI * 3) * S.h * 0.3 * A, 'rgba(110,231,183,0.3)', 1);
  for (let k = 0; k <= 3; k += 1) dot(S.ctx, (k / 3) * S.w, mid(S), 2.4, RED);
};

export function StandingWave() {
  return <Sim label={'A string vibrating in a standing wave'} mode={"auto"} setup={setup} tick={tick} />;
}
