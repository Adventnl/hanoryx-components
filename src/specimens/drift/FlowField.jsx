import { Sim } from '../../stage/Sim';
import { line, rnd, wipe } from '../../stage/draw';

const setup = (S) => ({ s: Array.from({ length: 80 }, () => ({ x: rnd(0, S.w), y: rnd(0, S.h) })) });

const tick = (S, dt) => {
    wipe(S, 0.08);
    S.st.s.forEach((p) => { const a = (Math.sin(p.x * 0.035 + S.t * 0.3) + Math.cos(p.y * 0.04 - S.t * 0.2)) * Math.PI; const nx = p.x + Math.cos(a) * 34 * dt; const ny = p.y + Math.sin(a) * 34 * dt; line(S.ctx, p.x, p.y, nx, ny, 'rgba(110,200,255,0.8)', 0.9); p.x = nx; p.y = ny; if (p.x < 0 || p.x > S.w || p.y < 0 || p.y > S.h || Math.random() < 0.004) { p.x = rnd(0, S.w); p.y = rnd(0, S.h); } });
  };

export function FlowField() {
  return <Sim label={'Particles following a curling field'} mode={"auto"} setup={setup} tick={tick} />;
}
