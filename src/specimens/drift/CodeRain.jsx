import { Sim } from '../../stage/Sim';
import { pick, rnd, wipe } from '../../stage/draw';

/* 29 code rain */
const GLYPHS = 'ｱｲｳｴｵｶｷｸｹｺ01234789ABCDEFXYZ'.split('');

const setup = (S) => ({ cols: Array.from({ length: Math.floor(S.w / 9) }, () => ({ y: rnd(-S.h, 0), v: rnd(30, 80), ch: [] })) });

const tick = (S, dt) => {
    wipe(S, 0.2);
    S.ctx.font = '9px monospace';
    S.st.cols.forEach((col, i) => {
      col.y += col.v * dt;
      if (Math.random() < 0.3) col.ch = [pick(GLYPHS), ...col.ch].slice(0, 9);
      col.ch.forEach((g, k) => { S.ctx.fillStyle = k === 0 ? '#e6ffe6' : `rgba(60,220,120,${1 - k / 9})`; S.ctx.fillText(g, i * 9, col.y - k * 9); });
      if (col.y - 80 > S.h) { col.y = rnd(-30, 0); col.v = rnd(30, 80); }
    });
  };

export function CodeRain() {
  return <Sim label={'Columns of glyphs falling'} mode={"auto"} setup={setup} tick={tick} />;
}
