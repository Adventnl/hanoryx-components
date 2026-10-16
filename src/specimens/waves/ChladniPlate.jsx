import { Sim } from '../../stage/Sim';
import { dot, wipe } from '../../stage/draw';

/* 32 */ const CHL = [[2, 3], [3, 4], [1, 4], [4, 5], [3, 5]];

const setup = (S) => ({ m: 0, p: Array.from({ length: 260 }, () => ({ x: Math.random(), y: Math.random() })), w: S.w });

const tick = (S) => {
  wipe(S);
  S.poke.splice(0).forEach(() => { S.st.m = (S.st.m + 1) % CHL.length; });
  const [n, m] = CHL[S.st.m];
  S.st.p.forEach((p) => {
    const f = Math.abs(Math.cos(n * Math.PI * p.x) * Math.cos(m * Math.PI * p.y) - Math.cos(m * Math.PI * p.x) * Math.cos(n * Math.PI * p.y));
    const s = f * 0.05;
    p.x = Math.min(1, Math.max(0, p.x + (Math.random() - 0.5) * s)); p.y = Math.min(1, Math.max(0, p.y + (Math.random() - 0.5) * s));
    dot(S.ctx, p.x * S.w, p.y * S.h, 0.9, '#f4e2a8');
  });
};

export function ChladniPlate() {
  return <Sim label={'Sand settling on the still lines of a vibrating plate; click for another tone'} mode={"click"} setup={setup} tick={tick} />;
}
