import { Sim } from '../../stage/Sim';
import { dot, rnd, soft, wipe } from '../../stage/draw';

const setup = () => ({ s: Array.from({ length: 200 }, (_, i) => ({ r: Math.pow(Math.random(), 0.7) * 44 + 3, a: (i % 2) * Math.PI + rnd(-0.4, 0.4), j: rnd(-3, 3) })) });

const tick = (S, dt) => {
    wipe(S, 0.5);
    S.ctx.globalCompositeOperation = 'lighter';
    S.st.s.forEach((p) => {
      p.a += (dt * 1.4) / (0.5 + p.r * 0.05);
      const sw = p.r * 0.09;
      const x = S.w / 2 + Math.cos(p.a + sw) * p.r * 1.8 + p.j;
      const y = S.h / 2 + Math.sin(p.a + sw) * p.r * 0.95 + p.j * 0.5;
      dot(S.ctx, x, y, 0.9, `hsla(${210 - p.r * 3},80%,${70 - p.r * 0.5}%,0.8)`);
    });
    soft(S.ctx, S.w / 2, S.h / 2, 16, 40, 90, 70, 0.8);
  };

export function GalaxySwirl() {
  return <Sim label={'A galaxy with two spiral arms turning'} mode={"auto"} setup={setup} tick={tick} />;
}
