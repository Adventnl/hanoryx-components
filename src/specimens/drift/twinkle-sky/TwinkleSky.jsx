import { Sim } from "../../../stage/components/sim/Sim";
import { TAU, dot, rnd, wipe } from "../../../stage/draw";

const setup = (S) => ({ s: Array.from({ length: 80 }, () => ({ x: rnd(0, S.w), y: rnd(0, S.h), r: rnd(0.4, 1.4), p: rnd(0, TAU), f: rnd(1, 3) })) });

const tick = (S) => { wipe(S); S.st.s.forEach((p) => dot(S.ctx, p.x, p.y, p.r, `rgba(255,255,255,${0.2 + 0.8 * Math.abs(Math.sin(S.t * p.f + p.p))})`)); };

export function TwinkleSky() {
  return <Sim label={'A sky of twinkling stars'} mode={"auto"} setup={setup} tick={tick} />;
}
