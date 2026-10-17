import { Sim } from "../../../stage/components/sim/Sim";
import { plot, wipe } from "../../../stage/draw";
import { GREEN, mid, none } from "../shared";

const setup = none;

const tick = (S) => {
  wipe(S);
  const f = (x) => (Math.sin(x * 0.4 - S.t * 6) + Math.sin(x * 0.44 - S.t * 6.6)) / 2;
  plot(S, (x) => mid(S) - f(x) * S.h * 0.38, GREEN, 1.3, 1);
  plot(S, (x) => mid(S) - Math.cos(x * 0.02 - S.t * 0.3) * S.h * 0.38, 'rgba(255,107,107,0.6)', 1);
  plot(S, (x) => mid(S) + Math.cos(x * 0.02 - S.t * 0.3) * S.h * 0.38, 'rgba(255,107,107,0.6)', 1);
};

export function BeatPattern() {
  return <Sim label={'Two close notes making a slow beat'} mode={"auto"} setup={setup} tick={tick} />;
}
