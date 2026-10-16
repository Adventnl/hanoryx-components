import { Sim } from '../../stage/Sim';
import { rnd, soft, wipe } from '../../stage/draw';

const setup = (S) => ({ s: Array.from({ length: 9 }, () => ({ x: rnd(-20, S.w), y: rnd(S.h * 0.3, S.h), r: rnd(24, 44), v: rnd(4, 12) })) });

const tick = (S, dt) => { wipe(S); S.st.s.forEach((p) => { p.x += p.v * dt; if (p.x - p.r > S.w) p.x = -p.r; soft(S.ctx, p.x, p.y, p.r, 210, 20, 80, 0.14); }); };

export function MistDrift() {
  return <Sim label={'Banks of mist sliding past'} mode={"auto"} setup={setup} tick={tick} />;
}
