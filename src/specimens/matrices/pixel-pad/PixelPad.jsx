import { useState } from 'react';
import { clamp } from "../../../stage/hooks";
import c from "../matrices.module.css";

/* 10 */ const PW = 12;

const PH = 8;

const HEART = ['000000000000', '001100001100', '011110011110', '011111111110', '001111111100', '000111111000', '000011110000', '000001100000'];

const PAD_START = [...HEART.join('')].map((b) => b === '1');

export function PixelPad() {
  const [cells, setCells] = useState(PAD_START);
  const [paint, setPaint] = useState(null);
  const [cur, setCur] = useState(-1);
  const idx = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    return Math.floor(clamp((e.clientY - r.top) / r.height, 0, 0.9999) * PH) * PW + Math.floor(clamp((e.clientX - r.left) / r.width, 0, 0.9999) * PW);
  };
  const put = (i, v) => setCells((p) => (p[i] === v ? p : p.map((x, j) => (j === i ? v : x))));
  return (
    <div className={c.box}>
      <div
        className={c.pad}
        role="application"
        aria-roledescription="pixel pad"
        aria-label="Pixel pad, drag to draw or erase, or use arrow keys and space"
        tabIndex={0}
        style={{ touchAction: 'none' }}
        onPointerDown={(e) => { e.currentTarget.setPointerCapture?.(e.pointerId); const i = idx(e); const v = !cells[i]; setPaint(v); setCur(i); put(i, v); }}
        onPointerMove={(e) => { if (paint !== null) { const i = idx(e); setCur(i); put(i, paint); } }}
        onPointerUp={() => setPaint(null)}
        onPointerCancel={() => setPaint(null)}
        onBlur={() => setCur(-1)}
        onKeyDown={(e) => {
          const d = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -PW, ArrowDown: PW }[e.key];
          if (d) { e.preventDefault(); setCur((i) => clamp((i < 0 ? 0 : i) + d, 0, PW * PH - 1)); }
          if ((e.key === ' ' || e.key === 'Enter') && cur >= 0) { e.preventDefault(); put(cur, !cells[cur]); }
        }}
      >
        {cells.map((on, i) => <i key={i} data-on={on} data-cur={i === cur} />)}
      </div>
      <button type="button" className={c.mini2} onClick={() => setCells(PAD_START.map(() => false))}>Clear</button>
    </div>
  );
}
