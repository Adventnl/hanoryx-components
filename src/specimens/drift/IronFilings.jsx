import { Sim } from '../../stage/Sim';
import { at, dot, line, rnd, wipe } from '../../stage/draw';

const setup = (S) => ({ s: Array.from({ length: 12 * 7 }, (_, i) => ({ x: 8 + (i % 12) * ((S.w - 16) / 11), y: 8 + Math.floor(i / 12) * ((S.h - 16) / 6), a: rnd(0, Math.PI) })) });

const tick = (S, dt) => {
    wipe(S);
    const o = at(S, 0.9);
    S.st.s.forEach((p) => { const t = Math.atan2(o.y - p.y, o.x - p.x); let d = t - p.a; d = Math.atan2(Math.sin(d), Math.cos(d)); p.a += d * Math.min(1, dt * 6); line(S.ctx, p.x - Math.cos(p.a) * 5, p.y - Math.sin(p.a) * 5, p.x + Math.cos(p.a) * 5, p.y + Math.sin(p.a) * 5, 'rgba(210,214,230,0.8)', 1); });
    dot(S.ctx, o.x, o.y, 3, '#ff5a5a');
  };

export function IronFilings() {
  return <Sim label={'Iron filings turning toward the pointer'} mode={"hover"} setup={setup} tick={tick} />;
}
