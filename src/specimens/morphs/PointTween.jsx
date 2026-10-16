import { useState } from 'react';
import c from './morphs.module.css';
import { S, useTween } from './shared';

const TW = [['hexagon', S.hex], ['5 points', S.star5], ['heart', S.heart], ['9 teeth', S.gear9]];

/* 23 */ export function PointTween() {
  const [i, setI] = useState(0);
  const flat = TW[i][1].flat();
  const v = useTween(flat, 700);
  const pts = v.reduce((a, x, k) => (k % 2 ? a : [...a, `${x.toFixed(1)},${v[k + 1].toFixed(1)}`]), []).join(' ');
  return (
    <button type="button" className={c.svgBtn} onClick={() => setI((x) => (x + 1) % TW.length)} aria-label={`Tweened outline: ${TW[i][0]}. Click for the next one`}>
      <svg viewBox="0 0 100 100" className={c.sq100}><polygon points={pts} className={c.fill} /></svg><small>{TW[i][0]}</small>
    </button>
  );
}
