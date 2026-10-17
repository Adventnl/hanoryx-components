import { Sim } from "../../../stage/components/sim/Sim";
import { plot, wipe } from "../../../stage/draw";
import { mid, none } from "../shared";

const setup = none;

const tick = (S) => {
  wipe(S);
  const n = 1 + Math.floor((S.t * 1.2) % 10);
  plot(S, (x) => { let s = 0; for (let k = 1; k <= n; k += 1) s += (k % 2 ? 1 : -1) * Math.sin(k * (x * 0.05 - S.t)) / k; return mid(S) - s * S.h * 0.28; }, '#ffd43b', 1.6, 1);
};

export function SawtoothBuild() {
  return <Sim label={'A sawtooth growing from sine waves'} mode={"auto"} setup={setup} tick={tick} />;
}
