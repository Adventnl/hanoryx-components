import { Sim } from '../../stage/Sim';
import { line, wipe } from '../../stage/draw';

const setup = () => ({ gap: 0 });

const tick = (S) => {
  wipe(S, 0.5);
  S.poke.splice(0).forEach(() => { S.st.gap = 1 - S.st.gap; });
  const bx = S.w * 0.36; const g = S.st.gap ? 0.3 : 0.16;
  for (let k = 0; k < 4; k += 1) { const x = ((S.t * 30 + k * 18) % 72) * (bx / 72); line(S.ctx, x, 0, x, S.h, 'rgba(110,200,255,0.45)', 1); }
  S.ctx.fillStyle = '#3a3b42'; [[0, S.h * (0.5 - g) - 3], [S.h * (0.5 - g) + 3, S.h * (0.5 + g) - 3], [S.h * (0.5 + g) + 3, S.h]].forEach(([a, b]) => S.ctx.fillRect(bx - 2, a, 4, b - a));
  [S.h * (0.5 - g), S.h * (0.5 + g)].forEach((y) => { for (let k = 0; k < 6; k += 1) { const r = ((S.t * 30 + k * 12) % 72) * 0.9; S.ctx.strokeStyle = `rgba(110,200,255,${0.5 - r / 140})`; S.ctx.lineWidth = 0.9; S.ctx.beginPath(); S.ctx.arc(bx, y, r, -Math.PI / 2, Math.PI / 2); S.ctx.stroke(); } });
};

export function SlitTank() {
  return <Sim label={'A wave front passing two slits; click to move the slits'} mode={"click"} setup={setup} tick={tick} />;
}
