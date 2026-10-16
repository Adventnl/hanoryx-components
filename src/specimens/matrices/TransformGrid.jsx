import { useDrag } from '../../stage/hooks';
import c from './matrices.module.css';

/* 39 */ const COEF = (v) => +(v * 3 - 1.5).toFixed(2);

export function TransformGrid() {
  const [a, ba] = useDrag({ init: 0.8 });
  const [b, bb] = useDrag({ init: 0.58 });
  const [cc, bc] = useDrag({ init: 0.4 });
  const [d, bd] = useDrag({ init: 0.78 });
  const m = [COEF(a), COEF(b), COEF(cc), COEF(d)];
  const sliders = [['a', ba, a], ['b', bb, b], ['c', bc, cc], ['d', bd, d]];
  return (
    <div className={c.xform}>
      <div className={c.plane} aria-hidden="true">
        <svg viewBox="-5 -5 10 10" style={{ transform: `matrix(${m[0]}, ${-m[2]}, ${-m[1]}, ${m[3]}, 0, 0)` }}>
          {Array.from({ length: 11 }, (_, i) => <path key={`h${i}`} d={`M-5 ${i - 5}H5M${i - 5} -5V5`} />)}
          <path className={c.glyph} d="M-1.5 2.5V-2.5H1.5M-1.5 0H0.8" />
        </svg>
      </div>
      <div className={c.coefs}>
        {sliders.map(([n, bind, v]) => (
          <p key={n}><em>{n}</em><span {...bind} aria-label={`Matrix value ${n}`} style={{ ...bind.style, '--v': v }}><i /></span><b>{COEF(v).toFixed(2)}</b></p>
        ))}
        <output>det {(m[0] * m[3] - m[1] * m[2]).toFixed(2)}</output>
      </div>
    </div>
  );
}
