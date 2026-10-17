import { Sim } from "../../../stage/components/sim/Sim";
import { at, prune, rnd, wipe } from "../../../stage/draw";

const setup = () => ({ s: [] });

const tick = (S, dt) => {
    wipe(S, 0.4);
    S.ctx.globalCompositeOperation = 'lighter';
    const o = at(S, 1.4);
    if (Math.random() < 0.7) S.st.s.push({ x: o.x + rnd(-24, 24), y: o.y + rnd(-18, 18), l: 1, s: rnd(2, 5), h: rnd(30, 330) });
    S.st.s.forEach((p) => { p.l -= dt * 1.4; if (p.l <= 0) p.dead = true; const k = Math.sin(p.l * Math.PI) * p.s; S.ctx.fillStyle = `hsla(${p.h},100%,75%,${p.l})`; S.ctx.beginPath(); S.ctx.moveTo(p.x, p.y - k); S.ctx.lineTo(p.x + k * 0.22, p.y - k * 0.22); S.ctx.lineTo(p.x + k, p.y); S.ctx.lineTo(p.x + k * 0.22, p.y + k * 0.22); S.ctx.lineTo(p.x, p.y + k); S.ctx.lineTo(p.x - k * 0.22, p.y + k * 0.22); S.ctx.lineTo(p.x - k, p.y); S.ctx.lineTo(p.x - k * 0.22, p.y - k * 0.22); S.ctx.fill(); });
    prune(S.st.s);
  };

export function Glitter() {
  return <Sim label={'Glitter sparkling around the pointer'} mode={"hover"} setup={setup} tick={tick} />;
}
