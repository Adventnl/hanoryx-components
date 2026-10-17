import { Sim } from "../../../stage/components/sim/Sim";
import { starSetup, starTick } from "../shared";

const setup = starSetup;

const tick = starTick(1, 2);

export function StarDrift() {
  return <Sim label={'A starfield drifting past'} mode={"auto"} setup={setup} tick={tick} />;
}
