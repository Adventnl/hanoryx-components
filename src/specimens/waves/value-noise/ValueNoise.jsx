import { Sim } from "../../../stage/components/sim/Sim";
import { plot, vnoise, wipe } from "../../../stage/draw";
import { none } from "../shared";

const setup = none;

const tick = (S) => { wipe(S); plot(S, (x) => S.h * 0.2 + vnoise(x * 0.05 + S.t * 1.5) * S.h * 0.6, '#c084fc', 1.6, 1); plot(S, (x) => S.h * 0.2 + vnoise(x * 0.12 + S.t * 2.5 + 40) * S.h * 0.6, 'rgba(192,132,252,0.35)', 1, 1); };

export function ValueNoise() {
  return <Sim label={'A noise line scrolling past'} mode={"auto"} setup={setup} tick={tick} />;
}
