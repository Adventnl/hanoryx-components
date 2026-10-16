import { Sim } from '../../stage/Sim';
import { dot, line, rnd, wipe } from '../../stage/draw';

const setup = (S) => ({ d: Array.from({ length: 14 }, () => ({ x: rnd(4, S.w - 4), y: rnd(0, S.h), r: rnd(1.2, 2.6), v: 0, hold: rnd(0, 3) })), t: [] });

const tick = (S, dt) => {
    wipe(S, 0.2);
    S.poke.splice(0).forEach((p) => S.st.d.push({ x: p.x, y: p.y, r: 3.2, v: 0, hold: 0 }));
    S.st.d.forEach((d) => {
      d.hold -= dt;
      if (d.hold < 0) { d.v = Math.min(60, d.v + 90 * dt * d.r * 0.3); d.y += d.v * dt; if (Math.random() < 0.02) d.hold = rnd(0.2, 1); }
      if (d.v > 5) line(S.ctx, d.x, d.y, d.x, d.y - d.v * 0.3, 'rgba(160,200,255,0.18)', d.r * 0.6);
      dot(S.ctx, d.x, d.y, d.r, 'rgba(190,220,255,0.55)'); dot(S.ctx, d.x - d.r * 0.3, d.y - d.r * 0.3, d.r * 0.35, 'rgba(255,255,255,0.8)');
      if (d.y > S.h + 10) { d.y = -6; d.v = 0; d.hold = rnd(0.5, 3); d.x = rnd(4, S.w - 4); d.r = rnd(1.2, 2.6); }
    });
    if (S.st.d.length > 30) S.st.d.splice(0, S.st.d.length - 30);
  };

export function WindowRain() {
  return <Sim label={'Drops running down glass; click to add one'} mode={"click"} setup={setup} tick={tick} />;
}
