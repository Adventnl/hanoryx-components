import { TAU, line, rnd, wipe } from '../../stage/draw';

/* 01-02 starfields share one engine */
export const starSetup = () => ({ s: Array.from({ length: 70 }, () => ({ x: rnd(-1, 1), y: rnd(-1, 1), z: rnd(0.05, 1) })) });

export const starTick = (speed, streak) => (S, dt) => {
  wipe(S, 0.35);
  const v = typeof speed === 'function' ? speed(S) : speed;
  S.st.s.forEach((p) => {
    const px = S.w / 2 + (p.x / p.z) * S.w * 0.18;
    const py = S.h / 2 + (p.y / p.z) * S.h * 0.18;
    p.z -= dt * v * 0.3;
    if (p.z <= 0.03 || px < 0 || px > S.w || py < 0 || py > S.h) { p.x = rnd(-1, 1); p.y = rnd(-1, 1); p.z = 1; return; }
    const nx = S.w / 2 + (p.x / p.z) * S.w * 0.18;
    const ny = S.h / 2 + (p.y / p.z) * S.h * 0.18;
    line(S.ctx, px, py, px + (nx - px) * streak, py + (ny - py) * streak, `rgba(255,255,255,${Math.min(1, 1.1 - p.z)})`, 0.6 + (1 - p.z) * 1.2);
  });
};

/* 09 rain */
export const rainSetup = (S) => ({ s: Array.from({ length: 70 }, () => ({ x: rnd(0, S.w + 20), y: rnd(0, S.h), v: rnd(160, 260), l: rnd(6, 12) })), rip: [] });

/* 12-13 snow */
export const snowSetup = (S) => ({ s: Array.from({ length: 70 }, () => ({ x: rnd(0, S.w), y: rnd(0, S.h), r: rnd(0.8, 2.2), v: rnd(10, 30), p: rnd(0, TAU) })) });
