import { Sim } from "../../../stage/components/sim/Sim";
import { wipe } from "../../../stage/draw";
import { none } from "../shared";

const setup = none;

const tick = (S) => {
  wipe(S);
  const set = (rot) => { S.ctx.save(); S.ctx.translate(S.w / 2, S.h / 2); S.ctx.rotate(rot); S.ctx.strokeStyle = 'rgba(255,255,255,0.8)'; S.ctx.lineWidth = 0.8; S.ctx.beginPath(); for (let x = -120; x <= 120; x += 6) { S.ctx.moveTo(x, -80); S.ctx.lineTo(x, 80); } S.ctx.stroke(); S.ctx.restore(); };
  set(0); set(Math.sin(S.t * 0.4) * 0.12);
};

export function MoireLines() {
  return <Sim label={'Two sets of lines turning against each other'} mode={"auto"} setup={setup} tick={tick} />;
}
