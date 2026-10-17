import { Sim } from "../../../stage/components/sim/Sim";
import { plot, wipe } from "../../../stage/draw";
import { mid, none } from "../shared";

const setup = none;

const tick = (S) => { wipe(S); plot(S, (x) => mid(S) + Math.sin((x * x) * 0.0012 - S.t * 5) * S.h * 0.3, '#ffd43b', 1.4, 1); };

export function Chirp() {
  return <Sim label={'A tone rising in pitch along its length'} mode={"auto"} setup={setup} tick={tick} />;
}
