import { Sim } from "../../../stage/components/sim/Sim";
import { starSetup, starTick } from "../shared";

const setup = starSetup;

const tick = starTick((S) => (S.in.has ? 0.3 + (S.in.x / S.w) * 5 : 2.2), 6);

export function WarpSpeed() {
  return <Sim label={'Stars streaking; the pointer sets the speed'} mode={"hover"} setup={setup} tick={tick} />;
}
