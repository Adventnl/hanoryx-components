import { Sim } from "../../../stage/components/sim/Sim";
import { rnd, wipe } from "../../../stage/draw";

const setup = (S) => ({ s: Array.from({ length: 26 }, () => ({ x: rnd(0, S.w), y: Math.round(rnd(0, S.h) / 6) * 6, v: rnd(30, 120), l: rnd(6, 20) })) });

const tick = (S, dt) => { wipe(S, 0.5); S.st.s.forEach((p) => { p.x += p.v * dt; if (p.x - p.l > S.w) { p.x = 0; p.y = Math.round(rnd(0, S.h) / 6) * 6; } const g = S.ctx.createLinearGradient(p.x - p.l, 0, p.x, 0); g.addColorStop(0, 'rgba(96,165,250,0)'); g.addColorStop(1, 'rgba(160,210,255,0.95)'); S.ctx.fillStyle = g; S.ctx.fillRect(p.x - p.l, p.y, p.l, 2); }); };

export function DataStream() {
  return <Sim label={'Packets of data streaming sideways'} mode={"auto"} setup={setup} tick={tick} />;
}
