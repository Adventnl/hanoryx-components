import { Sim } from '../../stage/Sim';
import { prune, rnd, soft, wipe } from '../../stage/draw';

const setup = () => ({ s: [], n: 0 });

const tick = (S, dt) => {
    wipe(S, 0.5);
    S.st.n -= dt;
    if (S.st.n <= 0) { S.st.s.push({ x: S.w / 2 + rnd(-4, 4), y: S.h + 6, r: 4, l: 1, d: rnd(-8, 8) }); S.st.n = 0.12; }
    S.st.s.forEach((p) => { p.y -= 22 * dt; p.x += (p.d + Math.sin(S.t + p.y * 0.05) * 6) * dt; p.r += 12 * dt; p.l -= dt * 0.35; if (p.l <= 0) p.dead = true; soft(S.ctx, p.x, p.y, p.r, 220, 8, 70, p.l * 0.16); });
    prune(S.st.s);
  };

export function SmokeWisps() {
  return <Sim label={'Smoke rising and spreading'} mode={"auto"} setup={setup} tick={tick} />;
}
