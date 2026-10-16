import { useRef, useState } from 'react';
import { clamp } from '../../stage/hooks';
import c from './graphs.module.css';

/* 32 */ export function LinkCurve() {
  const [a, setA] = useState([20, 22]);
  const [b, setB] = useState([78, 58]);
  const [style, setStyle] = useState('curve');
  const box = useRef(null);
  const drag = (set) => ({
    onPointerDown: (e) => e.currentTarget.setPointerCapture?.(e.pointerId),
    onPointerMove: (e) => {
      if (!e.currentTarget.hasPointerCapture?.(e.pointerId)) return;
      const r = box.current.getBoundingClientRect();
      set([clamp(((e.clientX - r.left) / r.width) * 100, 6, 94), clamp(((e.clientY - r.top) / r.height) * 70, 6, 64)]);
    },
  });
  const nudge = (set, p) => (e) => { const d = { ArrowLeft: [-4, 0], ArrowRight: [4, 0], ArrowUp: [0, -4], ArrowDown: [0, 4] }[e.key]; if (d) { e.preventDefault(); set([clamp(p[0] + d[0], 6, 94), clamp(p[1] + d[1], 6, 64)]); } };
  const mx = (a[0] + b[0]) / 2;
  const d = style === 'curve' ? `M${a[0]} ${a[1]}C${mx} ${a[1]} ${mx} ${b[1]} ${b[0]} ${b[1]}` : style === 'step' ? `M${a[0]} ${a[1]}H${mx}V${b[1]}H${b[0]}` : `M${a[0]} ${a[1]}L${b[0]} ${b[1]}`;
  return (
    <div className={c.fig}>
      <div ref={box} className={c.linkBox}>
        <svg className={c.svg} viewBox="0 0 100 70" aria-hidden="true"><path className={c.edge} data-hot d={d} /></svg>
        <button type="button" className={c.pin} style={{ left: `${a[0]}%`, top: `${(a[1] / 70) * 100}%` }} aria-label="Start node, drag or use arrow keys" {...drag(setA)} onKeyDown={nudge(setA, a)} />
        <button type="button" className={c.pin} style={{ left: `${b[0]}%`, top: `${(b[1] / 70) * 100}%` }} aria-label="End node, drag or use arrow keys" {...drag(setB)} onKeyDown={nudge(setB, b)} />
      </div>
      <div className={c.pair}>{['curve', 'step', 'line'].map((s) => <button key={s} type="button" aria-pressed={style === s} onClick={() => setStyle(s)}>{s}</button>)}</div>
    </div>
  );
}
