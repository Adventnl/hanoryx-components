import { Sim } from "../../../stage/components/sim/Sim";
import { none } from "../shared";

const setup = none;

const tick = (S) => { for (let y = 0; y < S.h; y += 4) for (let x = 0; x < S.w; x += 4) { const dx = x - S.w / 2; const dy = y - S.h / 2; const v = Math.sin(Math.atan2(dy, dx) * 2 + Math.hypot(dx, dy) * 0.18 - S.t * 3); S.ctx.fillStyle = `hsl(330,80%,${6 + (v + 1) * 30}%)`; S.ctx.fillRect(x, y, 4, 4); } };

export function SpiralWave() {
  return <Sim label={'A spiral wave turning'} mode={"auto"} setup={setup} tick={tick} />;
}
