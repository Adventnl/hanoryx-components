import { Sim } from "../../../stage/components/sim/Sim";
import { dot, rnd, wipe } from "../../../stage/draw";

const setup = (S) => ({ s: Array.from({ length: 50 }, () => ({ x: rnd(0, S.w), y: rnd(0, S.h), v: rnd(14, 40), l: rnd(0, 1), r: rnd(0.6, 1.8) })) });

const tick = (S, dt) => {
    wipe(S, 0.35);
    S.ctx.globalCompositeOperation = 'lighter';
    S.st.s.forEach((p) => { p.y -= p.v * dt; p.x += Math.sin(S.t * 2 + p.v) * 6 * dt; p.l -= dt * 0.35; if (p.l <= 0 || p.y < -4) { p.y = S.h + 4; p.x = rnd(0, S.w); p.l = 1; } dot(S.ctx, p.x, p.y, p.r, `hsla(${12 + p.l * 30},100%,${45 + p.l * 20}%,${p.l})`); });
  };

export function Embers() {
  return <Sim label={'Embers rising from a fire'} mode={"auto"} setup={setup} tick={tick} />;
}
