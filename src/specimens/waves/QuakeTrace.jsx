import { Sim } from '../../stage/Sim';
import { dot, line, rnd, wipe } from '../../stage/draw';
import { RED, mid } from './shared';

const setup = () => ({ y: [], q: 0 });

const tick = (S, dt) => {
  wipe(S);
  for (let x = 0; x < S.w; x += 12) line(S.ctx, x - ((S.t * 30) % 12), 0, x - ((S.t * 30) % 12), S.h, 'rgba(255,255,255,0.07)');
  S.st.q = Math.max(0, S.st.q - dt * 1.4); if (Math.random() < 0.012) S.st.q = rnd(0.6, 1);
  S.st.y.push(mid(S) + (Math.random() - 0.5) * (3 + S.st.q * 34)); if (S.st.y.length > S.w / 2) S.st.y.shift();
  S.ctx.strokeStyle = '#6ee7b7'; S.ctx.lineWidth = 1; S.ctx.beginPath(); S.st.y.forEach((y, i) => { const x = S.w - (S.st.y.length - i) * 2; if (i) S.ctx.lineTo(x, y); else S.ctx.moveTo(x, y); }); S.ctx.stroke();
  dot(S.ctx, S.w - 2, S.st.y.at(-1), 2, RED);
};

export function QuakeTrace() {
  return <Sim label={'A seismograph pen tracing tremors on moving paper'} mode={"auto"} setup={setup} tick={tick} />;
}
