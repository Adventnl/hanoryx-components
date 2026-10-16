import { Sim } from '../../stage/Sim';
import { at, dot, rnd, wipe } from '../../stage/draw';

const setup = (S) => ({ s: Array.from({ length: 36 }, (_, i) => ({ x: rnd(0, S.w), y: rnd(0, S.h), k: 0.6 + (i % 6) * 0.35 })) });

const tick = (S, dt) => { wipe(S, 0.3); const o = at(S, 1.2); S.st.s.forEach((p) => { p.x += (o.x - p.x) * dt * p.k + rnd(-1.2, 1.2); p.y += (o.y - p.y) * dt * p.k + rnd(-1.2, 1.2); dot(S.ctx, p.x, p.y, 1.3, `hsla(${200 + p.k * 40},90%,70%,0.9)`); }); };

export function SwarmChase() {
  return <Sim label={'A swarm chasing the pointer'} mode={"hover"} setup={setup} tick={tick} />;
}
