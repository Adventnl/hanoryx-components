import { Sim } from '../../stage/Sim';
import { dot, line, rnd, wipe } from '../../stage/draw';

const setup = (S) => ({ s: Array.from({ length: 28 }, () => ({ x: rnd(0, S.w), y: rnd(0, S.h), vx: rnd(-8, 8), vy: rnd(-8, 8) })) });

const tick = (S, dt) => {
    wipe(S);
    const p0 = S.in.has ? S.in : null;
    S.st.s.forEach((p) => {
      if (p0) { p.vx += (p0.x - p.x) * dt * 0.4; p.vy += (p0.y - p.y) * dt * 0.4; }
      p.vx *= 0.995; p.vy *= 0.995;
      p.x += p.vx * dt; p.y += p.vy * dt;
      if (p.x < 0 || p.x > S.w) p.vx *= -1;
      if (p.y < 0 || p.y > S.h) p.vy *= -1;
    });
    const s = S.st.s;
    for (let i = 0; i < s.length; i += 1) {
      for (let j = i + 1; j < s.length; j += 1) {
        const d = Math.hypot(s[i].x - s[j].x, s[i].y - s[j].y);
        if (d < 40) line(S.ctx, s[i].x, s[i].y, s[j].x, s[j].y, `rgba(255,255,255,${(1 - d / 40) * 0.5})`, 0.6);
      }
      dot(S.ctx, s[i].x, s[i].y, 1.5, '#fff');
    }
  };

export function StarLinks() {
  return <Sim label={'Stars that link when they come close; the pointer pulls them'} mode={"hover"} setup={setup} tick={tick} />;
}
