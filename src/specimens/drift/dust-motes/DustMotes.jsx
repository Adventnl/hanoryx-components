import { Sim } from "../../../stage/components/sim/Sim";
import { TAU, dot, rnd, wipe } from "../../../stage/draw";

const setup = (S) => ({ s: Array.from({ length: 50 }, () => ({ x: rnd(S.w * 0.2, S.w * 0.8), y: rnd(0, S.h), r: rnd(0.4, 1.3), p: rnd(0, TAU) })) });

const tick = (S, dt) => {
    wipe(S);
    const g = S.ctx.createLinearGradient(S.w * 0.3, 0, S.w * 0.7, S.h); g.addColorStop(0, 'rgba(255,240,200,0.22)'); g.addColorStop(1, 'rgba(255,240,200,0)');
    S.ctx.fillStyle = g; S.ctx.beginPath(); S.ctx.moveTo(S.w * 0.15, 0); S.ctx.lineTo(S.w * 0.55, 0); S.ctx.lineTo(S.w * 0.95, S.h); S.ctx.lineTo(S.w * 0.45, S.h); S.ctx.fill();
    S.st.s.forEach((p) => { p.y += 4 * dt; p.x += Math.sin(S.t * 0.7 + p.p) * 4 * dt; if (p.y > S.h) p.y = 0; dot(S.ctx, p.x, p.y, p.r, `rgba(255,245,210,${0.3 + Math.abs(Math.sin(S.t + p.p)) * 0.6})`); });
  };

export function DustMotes() {
  return <Sim label={'Dust turning in a shaft of light'} mode={"auto"} setup={setup} tick={tick} />;
}
