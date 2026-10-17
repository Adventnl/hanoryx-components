import { Sim } from "../../../stage/components/sim/Sim";
import { rnd, wipe } from "../../../stage/draw";

/* 15 lightning */
const bolt = (S, x) => {
  const pts = [[x, 0]];
  let y = 0; let px = x;
  while (y < S.h) { y += rnd(8, 16); px += rnd(-9, 9); pts.push([px, y]); }
  S.st.b = { pts, a: 1 };
  S.st.flash = 0.5;
};

const setup = () => ({ b: null, flash: 0, n: 1 });

const tick = (S, dt) => {
    wipe(S, 0.5);
    S.st.n -= dt;
    if (S.st.n <= 0) { bolt(S, rnd(S.w * 0.2, S.w * 0.8)); S.st.n = rnd(1.8, 3.6); }
    S.poke.splice(0).forEach((p) => bolt(S, p.x));
    if (S.st.flash > 0) { S.ctx.fillStyle = `rgba(180,200,255,${S.st.flash * 0.6})`; S.ctx.fillRect(0, 0, S.w, S.h); S.st.flash -= dt * 1.6; }
    const b = S.st.b;
    if (b && b.a > 0) {
      S.ctx.strokeStyle = `rgba(220,230,255,${b.a})`; S.ctx.lineWidth = 1.6; S.ctx.shadowColor = '#9db8ff'; S.ctx.shadowBlur = 10;
      S.ctx.beginPath(); b.pts.forEach(([x, y], i) => (i ? S.ctx.lineTo(x, y) : S.ctx.moveTo(x, y))); S.ctx.stroke(); S.ctx.shadowBlur = 0;
      b.a -= dt * 2.4;
    }
  };

export function Lightning() {
  return <Sim label={'Lightning; click to strike'} mode={"click"} setup={setup} tick={tick} />;
}
