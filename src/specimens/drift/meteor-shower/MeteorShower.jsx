import { Sim } from "../../../stage/components/sim/Sim";
import { prune, rnd, wipe } from "../../../stage/draw";

/* 05 meteors */
const meteor = (S, x) => S.st.m.push({ x: x ?? rnd(S.w * 0.3, S.w * 1.2), y: rnd(-10, S.h * 0.3), v: rnd(120, 210), l: rnd(18, 34) });

const setup = () => ({ m: [], n: 0 });

const tick = (S, dt) => {
    wipe(S, 0.4);
    S.st.n -= dt;
    if (S.st.n <= 0) { meteor(S); S.st.n = rnd(0.3, 0.9); }
    S.poke.splice(0).forEach((p) => meteor(S, p.x + 20));
    S.st.m.forEach((m) => {
      m.x -= m.v * dt * 0.8; m.y += m.v * dt * 0.5;
      const g = S.ctx.createLinearGradient(m.x, m.y, m.x + m.l * 0.85, m.y - m.l * 0.55);
      g.addColorStop(0, 'rgba(255,255,255,0.95)'); g.addColorStop(1, 'rgba(255,255,255,0)');
      S.ctx.strokeStyle = g; S.ctx.lineWidth = 1.4; S.ctx.beginPath(); S.ctx.moveTo(m.x, m.y); S.ctx.lineTo(m.x + m.l * 0.85, m.y - m.l * 0.55); S.ctx.stroke();
      if (m.x < -40 || m.y > S.h + 20) m.dead = true;
    });
    prune(S.st.m);
  };

export function MeteorShower() {
  return <Sim label={'A meteor shower; click to send one'} mode={"click"} setup={setup} tick={tick} />;
}
