import { Sim } from "../../../stage/components/sim/Sim";
import { vnoise, wipe } from "../../../stage/draw";
import { none } from "../shared";

const setup = none;

const tick = (S) => {
  wipe(S);
  for (let r = 0; r < 12; r += 1) {
    const base = 14 + r * 7;
    S.ctx.fillStyle = '#07080a';
    S.ctx.beginPath(); S.ctx.moveTo(0, base);
    for (let x = 0; x <= S.w; x += 2) { const k = Math.exp(-(((x - S.w / 2) / (S.w * 0.22)) ** 2)); S.ctx.lineTo(x, base - k * (8 + vnoise(x * 0.09 + r * 7, S.t * 1.5 + r) * 14)); }
    S.ctx.lineTo(S.w, base + 20); S.ctx.lineTo(0, base + 20); S.ctx.fill();
    S.ctx.strokeStyle = `rgba(255,255,255,${0.35 + r * 0.05})`; S.ctx.lineWidth = 0.9; S.ctx.beginPath();
    for (let x = 0; x <= S.w; x += 2) { const k = Math.exp(-(((x - S.w / 2) / (S.w * 0.22)) ** 2)); const y = base - k * (8 + vnoise(x * 0.09 + r * 7, S.t * 1.5 + r) * 14); if (x === 0) S.ctx.moveTo(x, y); else S.ctx.lineTo(x, y); }
    S.ctx.stroke();
  }
};

export function WaveStack() {
  return <Sim label={'Stacked lines rippling like a signal plot'} mode={"auto"} setup={setup} tick={tick} />;
}
