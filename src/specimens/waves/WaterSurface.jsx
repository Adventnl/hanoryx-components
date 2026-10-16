import { Sim } from '../../stage/Sim';
import { rnd, wipe } from '../../stage/draw';

/* 06 */ const NW = 44;

const NH = 26;

const setup = () => ({ h: new Float32Array(NW * NH), v: new Float32Array(NW * NH), n: 0 });

const tick = (S, dt) => {
  const { h, v } = S.st;
  const drop = (x, y, a = 3) => { const cx = Math.floor((x / S.w) * NW); const cy = Math.floor((y / S.h) * NH); for (let j = -1; j <= 1; j += 1) for (let i = -1; i <= 1; i += 1) { const X = cx + i; const Y = cy + j; if (X > 0 && X < NW - 1 && Y > 0 && Y < NH - 1) h[Y * NW + X] += a; } };
  S.st.n -= dt; if (S.st.n <= 0) { drop(rnd(10, S.w - 10), rnd(10, S.h - 10)); S.st.n = 1.6; }
  S.poke.splice(0).forEach((p) => drop(p.x, p.y, 5));
  for (let y = 1; y < NH - 1; y += 1) for (let x = 1; x < NW - 1; x += 1) { const i = y * NW + x; v[i] += ((h[i - 1] + h[i + 1] + h[i - NW] + h[i + NW]) / 4 - h[i]) * 0.9; v[i] *= 0.985; }
  for (let i = 0; i < h.length; i += 1) h[i] += v[i];
  wipe(S);
  const cw = S.w / NW; const ch = S.h / NH;
  for (let y = 0; y < NH; y += 1) for (let x = 0; x < NW; x += 1) { const z = h[y * NW + x]; S.ctx.fillStyle = `hsl(${205 + z * 6},75%,${Math.max(6, Math.min(80, 22 + z * 14))}%)`; S.ctx.fillRect(x * cw, y * ch, cw + 0.5, ch + 0.5); }
};

export function WaterSurface() {
  return <Sim label={'A water surface; click to drop a stone'} mode={"click"} setup={setup} tick={tick} />;
}
