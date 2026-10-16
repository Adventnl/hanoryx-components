import { useState } from 'react';
import { clamp } from '../../stage/hooks';
import c from './gauges.module.css';
import { Ticks } from './shared';

/* a point dragged inside a box: { x, y } in 0..1 */
function useXY(init) {
  const [p, setP] = useState(init);
  const at = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setP({ x: clamp((e.clientX - r.left) / r.width), y: clamp((e.clientY - r.top) / r.height) });
  };
  const bind = {
    role: 'application',
    'aria-roledescription': 'two-axis control',
    tabIndex: 0,
    style: { touchAction: 'none' },
    onPointerDown: (e) => { e.currentTarget.setPointerCapture?.(e.pointerId); at(e); },
    onPointerMove: (e) => { if (e.currentTarget.hasPointerCapture?.(e.pointerId)) at(e); },
    onKeyDown: (e) => {
      const d = { ArrowLeft: [-0.08, 0], ArrowRight: [0.08, 0], ArrowUp: [0, -0.08], ArrowDown: [0, 0.08] }[e.key];
      if (d) { e.preventDefault(); setP((q) => ({ x: clamp(q.x + d[0]), y: clamp(q.y + d[1]) })); }
      if (e.key === 'Home') setP({ x: 0.5, y: 0.5 });
    },
  };
  return [p, bind];
}

/* 22 */ export function Attitude() {
  const [p, bind] = useXY({ x: 0.68, y: 0.4 });
  return (
    <div className={c.att} {...bind} aria-label="Attitude indicator, drag to bank and pitch" style={{ ...bind.style, '--roll': `${((p.x - 0.5) * 70).toFixed(1)}deg`, '--pitch': `${((p.y - 0.5) * 36).toFixed(1)}%` }}>
      <div className={c.world}><i /></div>
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <path d="M18 54h20l6 8 6-8 6 8 6-8h20" />
        <g className={c.rollg}><path className={c.pointer} d="M50 6 L45.5 14 H54.5Z" /></g>
        <Ticks n={12} from={-60} to={60} r={46} len={3} major={2} majorLen={5} />
      </svg>
    </div>
  );
}
