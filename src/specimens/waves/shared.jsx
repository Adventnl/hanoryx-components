import { TAU, dot, line, wipe } from '../../stage/draw';

export const none = () => ({});

export const mid = (S) => S.h / 2;

export const GREEN = '#6ee7b7';

export const BLUE = '#60a5fa';

export const RED = '#ff6b6b';

/* horizontal position of the pointer as 0..1, or a slow sweep when nobody is pointing */
export const px = (S) => (S.in.has ? S.in.x / S.w : 0.5 + Math.sin(S.t * 0.6) * 0.4);

export const py = (S) => (S.in.has ? S.in.y / S.h : 0.5 + Math.sin(S.t * 0.8 + 1) * 0.4);

/* 25-26 doppler and mach share an engine */
export const moving = (speed) => (S, dt) => {
  wipe(S, 0.5);
  const st = S.st; st.x += speed * dt; if (st.x > S.w + 10) { st.x = -10; st.e = []; }
  st.n -= dt; if (st.n <= 0) { st.e.push({ x: st.x, t: S.t }); st.n = 0.28; }
  st.e.forEach((q) => { const r = (S.t - q.t) * 42; S.ctx.strokeStyle = 'rgba(110,200,255,0.55)'; S.ctx.lineWidth = 0.9; S.ctx.beginPath(); S.ctx.arc(q.x, S.h / 2, r, 0, TAU); S.ctx.stroke(); });
  if (speed > 42) { const a = Math.asin(42 / speed); line(S.ctx, st.x, S.h / 2, st.x - 80 * Math.cos(a), S.h / 2 - 80 * Math.sin(a), 'rgba(255,255,255,0.8)', 1.2); line(S.ctx, st.x, S.h / 2, st.x - 80 * Math.cos(a), S.h / 2 + 80 * Math.sin(a), 'rgba(255,255,255,0.8)', 1.2); }
  dot(S.ctx, st.x, S.h / 2, 3, RED);
};
