import { Sim } from "../../../stage/components/sim/Sim";
import { dot, wipe } from "../../../stage/draw";
import { none } from "../shared";

const setup = none;

const tick = (S) => {
  wipe(S);
  for (let r = 0; r < 5; r += 1) for (let i = 0; i < 48; i += 1) { const x0 = 4 + i * ((S.w - 8) / 47); const x = x0 + Math.sin(x0 * 0.1 - S.t * 4) * 4; dot(S.ctx, x, 14 + r * 17, 1.5, `rgba(255,255,255,${0.5 + Math.sin(x0 * 0.1 - S.t * 4 + 1.57) * 0.35})`); }
};

export function PressureWave() {
  return <Sim label={'Particles bunching and thinning as a sound wave passes'} mode={"auto"} setup={setup} tick={tick} />;
}
