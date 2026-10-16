import { Sim } from '../../stage/Sim';
import { line, wipe } from '../../stage/draw';
import { none } from './shared';

const setup = none;

const tick = (S) => {
  wipe(S);
  const bx = (S.t * 26) % (S.w + 60) - 20; const by = S.h * 0.5;
  for (let k = 1; k <= 6; k += 1) { const d = k * 11; [-1, 1].forEach((s) => line(S.ctx, bx - d * 1.6, by + s * d * 0.8, bx - d * 1.6 - 14, by + s * d * 0.8 + s * 3 + Math.sin(S.t * 3 + k) * 1.5, `rgba(180,220,255,${0.7 - k * 0.1})`, 1)); }
  S.ctx.fillStyle = '#fff'; S.ctx.beginPath(); S.ctx.moveTo(bx + 8, by); S.ctx.lineTo(bx - 6, by - 4); S.ctx.lineTo(bx - 6, by + 4); S.ctx.fill();
};

export function BoatWake() {
  return <Sim label={'A boat leaving a V-shaped wake'} mode={"auto"} setup={setup} tick={tick} />;
}
