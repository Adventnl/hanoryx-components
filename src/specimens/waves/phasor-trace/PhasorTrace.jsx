import { Sim } from "../../../stage/components/sim/Sim";
import { TAU, dot, line, wipe } from "../../../stage/draw";
import { RED, mid } from "../shared";

const setup = () => ({ y: [] });

const tick = (S, dt) => {
  wipe(S);
  const cx = 30; const R = 22; const a = S.t * 2.4;
  const px0 = cx + Math.cos(a) * R; const py0 = mid(S) - Math.sin(a) * R;
  S.ctx.strokeStyle = 'rgba(255,255,255,0.25)'; S.ctx.lineWidth = 1; S.ctx.beginPath(); S.ctx.arc(cx, mid(S), R, 0, TAU); S.ctx.stroke();
  line(S.ctx, cx, mid(S), px0, py0, '#fff', 1.4); dot(S.ctx, px0, py0, 2.6, RED);
  S.st.y.unshift(py0); if (S.st.y.length > S.w - 60) S.st.y.pop();
  line(S.ctx, px0, py0, 60, py0, 'rgba(255,107,107,0.4)', 0.8);
  S.ctx.strokeStyle = RED; S.ctx.lineWidth = 1.4; S.ctx.beginPath(); S.st.y.forEach((y, i) => { if (i) S.ctx.lineTo(60 + i * (dt ? 1 : 1), y); else S.ctx.moveTo(60, y); }); S.ctx.stroke();
};

export function PhasorTrace() {
  return <Sim label={'A turning arrow drawing a sine wave'} mode={"auto"} setup={setup} tick={tick} />;
}
