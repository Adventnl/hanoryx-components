import { useState } from 'react';
import { f1 } from '../../stage/chartKit';
import c from './graphs.module.css';

/* 40 */ const tri = (x, y, s, level, out) => {
  if (!level) { out.push(`M${f1(x)} ${f1(y)}L${f1(x + s)} ${f1(y)}L${f1(x + s / 2)} ${f1(y - s * 0.866)}Z`); return; }
  tri(x, y, s / 2, level - 1, out); tri(x + s / 2, y, s / 2, level - 1, out); tri(x + s / 4, y - (s / 2) * 0.866, s / 2, level - 1, out);
};

export function Sierpinski() {
  const [level, setLevel] = useState(4);
  const out = [];
  tri(4, 88, 92, level, out);
  return (
    <button type="button" className={c.chBtn} aria-label={`Sierpinski triangle at level ${level}. Click for the next level`} onClick={() => setLevel((v) => (v + 1) % 7)}>
      <svg className={c.svg} viewBox="0 0 100 92" aria-hidden="true"><path className={c.fill} d={out.join('')} /></svg>
      <span className={c.sub}>level <b>{level}</b> · {3 ** level} triangles</span>
    </button>
  );
}
