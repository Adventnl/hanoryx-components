import { Sim } from '../../stage/Sim';
import { line, plot, wipe } from '../../stage/draw';
import { GREEN, mid, none, px } from './shared';

const setup = none;

const tick = (S) => {
  wipe(S);
  const n = 1 + Math.round(px(S) * 8);
  line(S.ctx, 0, mid(S) - S.h * 0.3, S.w, mid(S) - S.h * 0.3, 'rgba(255,255,255,0.1)'); line(S.ctx, 0, mid(S) + S.h * 0.3, S.w, mid(S) + S.h * 0.3, 'rgba(255,255,255,0.1)');
  plot(S, (x) => { let s = 0; for (let k = 1; k <= n * 2; k += 2) s += Math.sin(k * (x * 0.06 - S.t * 1.5)) / k; return mid(S) - s * S.h * 0.38; }, GREEN, 1.6, 1);
  S.ctx.fillStyle = 'rgba(255,255,255,0.5)'; S.ctx.font = '8px monospace'; S.ctx.fillText(`${n} terms`, 6, 12);
};

export function HarmonicSum() {
  return <Sim label={'A square wave built from more and more sine waves'} mode={"hover"} setup={setup} tick={tick} />;
}
