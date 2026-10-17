import { Sim } from "../../../stage/components/sim/Sim";
import { dot, prune, rnd, wipe } from "../../../stage/draw";

const setup = () => ({ s: [], pile: 2, n: 0 });

const tick = (S, dt) => {
    wipe(S);
    S.st.n -= dt;
    if (S.st.n <= 0) { S.st.s.push({ x: S.w / 2 + rnd(-1, 1), y: 0, v: rnd(80, 120) }); S.st.n = 0.02; }
    const top = S.h - S.st.pile;
    S.st.s.forEach((p) => { p.y += p.v * dt; if (p.y >= top) { p.dead = true; S.st.pile += 0.05; if (S.st.pile > S.h * 0.8) S.st.pile = 2; } else dot(S.ctx, p.x, p.y, 0.8, '#e8c98a'); });
    prune(S.st.s);
    S.ctx.fillStyle = '#c9a86a'; S.ctx.beginPath(); S.ctx.moveTo(S.w / 2 - S.st.pile * 1.6, S.h); S.ctx.lineTo(S.w / 2, top); S.ctx.lineTo(S.w / 2 + S.st.pile * 1.6, S.h); S.ctx.fill();
  };

export function SandStream() {
  return <Sim label={'A stream of sand building a pile'} mode={"auto"} setup={setup} tick={tick} />;
}
