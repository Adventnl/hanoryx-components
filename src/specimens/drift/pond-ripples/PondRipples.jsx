import { Sim } from "../../../stage/components/sim/Sim";
import { TAU, prune, rnd, wipe } from "../../../stage/draw";

const setup = () => ({ s: [], n: 0 });

const tick = (S, dt) => {
    wipe(S, 0.4);
    S.st.n -= dt;
    if (S.st.n <= 0) { S.st.s.push({ x: rnd(10, S.w - 10), y: rnd(10, S.h - 10), r: 0, a: 1 }); S.st.n = rnd(0.3, 0.8); }
    S.st.s.forEach((p) => { p.r += 24 * dt; p.a -= dt * 0.55; if (p.a <= 0) p.dead = true; for (let k = 0; k < 3; k += 1) { S.ctx.strokeStyle = `rgba(150,210,255,${Math.max(0, p.a - k * 0.25)})`; S.ctx.lineWidth = 0.8; S.ctx.beginPath(); S.ctx.ellipse(p.x, p.y, Math.max(0, p.r - k * 5), Math.max(0, (p.r - k * 5) * 0.4), 0, 0, TAU); S.ctx.stroke(); } });
    prune(S.st.s);
  };

export function PondRipples() {
  return <Sim label={'Raindrops making rings on a pond'} mode={"auto"} setup={setup} tick={tick} />;
}
