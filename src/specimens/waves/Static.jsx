import { Sim } from '../../stage/Sim';
import { none } from './shared';

const setup = none;

const tick = (S) => { for (let y = 0; y < S.h; y += 3) for (let x = 0; x < S.w; x += 3) { const v = Math.floor(Math.random() * 130); S.ctx.fillStyle = `rgb(${v},${v},${v})`; S.ctx.fillRect(x, y, 3, 3); } };

export function Static() {
  return <Sim label={'Television static'} mode={"auto"} setup={setup} tick={tick} />;
}
