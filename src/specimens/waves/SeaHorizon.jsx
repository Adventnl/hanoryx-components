import { Sim } from '../../stage/Sim';
import { none } from './shared';

const setup = none;

const tick = (S) => {
  const g = S.ctx.createLinearGradient(0, 0, 0, S.h * 0.5); g.addColorStop(0, '#1a0f3a'); g.addColorStop(1, '#ff7b54');
  S.ctx.fillStyle = g; S.ctx.fillRect(0, 0, S.w, S.h * 0.5);
  S.ctx.fillStyle = '#ffd9a0'; S.ctx.beginPath(); S.ctx.arc(S.w / 2, S.h * 0.5, 16, Math.PI, 0); S.ctx.fill();
  S.ctx.fillStyle = '#0d1a33'; S.ctx.fillRect(0, S.h * 0.5, S.w, S.h * 0.5);
  for (let r = 0; r < 14; r += 1) { const y = S.h * 0.5 + 3 + r * 3.2 + r * r * 0.12; const w = 6 + r * 4 + Math.sin(S.t * 3 + r) * 4; S.ctx.fillStyle = `rgba(255,190,120,${0.7 - r * 0.04})`; S.ctx.fillRect(S.w / 2 - w / 2 + Math.sin(S.t * 2 + r * 1.7) * 3, y, w, 1.2); }
};

export function SeaHorizon() {
  return <Sim label={'A sun on the horizon glittering on moving water'} mode={"auto"} setup={setup} tick={tick} />;
}
