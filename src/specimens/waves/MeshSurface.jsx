import { Sim } from '../../stage/Sim';
import { wipe } from '../../stage/draw';
import { none } from './shared';

const setup = none;

const tick = (S) => {
  wipe(S);
  for (let r = 0; r < 12; r += 1) {
    const z = r / 11; S.ctx.strokeStyle = `rgba(110,200,255,${0.25 + z * 0.65})`; S.ctx.lineWidth = 0.8; S.ctx.beginPath();
    for (let i = 0; i <= 24; i += 1) { const x = S.w / 2 + (i - 12) * (2.6 + z * 4.6); const y = S.h * 0.3 + z * S.h * 0.62 - Math.sin(i * 0.5 + r * 0.45 - S.t * 2) * (2 + z * 7); if (i) S.ctx.lineTo(x, y); else S.ctx.moveTo(x, y); }
    S.ctx.stroke();
  }
};

export function MeshSurface() {
  return <Sim label={'A wireframe surface rolling in perspective'} mode={"auto"} setup={setup} tick={tick} />;
}
