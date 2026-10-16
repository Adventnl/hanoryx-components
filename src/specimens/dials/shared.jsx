import { useRef, useState } from 'react';
import { clamp } from '../../stage/hooks';

/* ---- two local helpers ---- */
/* an angle that keeps counting past a full turn */
export function useSpin() {
  const [rot, setRot] = useState(0);
  const last = useRef(null);
  const at = (e, el) => {
    const r = el.getBoundingClientRect();
    return (Math.atan2(e.clientX - (r.left + r.width / 2), -(e.clientY - (r.top + r.height / 2))) * 180) / Math.PI;
  };
  const bind = {
    role: 'slider', tabIndex: 0, 'aria-valuemin': 0, 'aria-valuemax': 360, 'aria-valuenow': Math.round(((rot % 360) + 360) % 360), style: { touchAction: 'none' },
    onPointerDown: (e) => { e.currentTarget.setPointerCapture?.(e.pointerId); last.current = at(e, e.currentTarget); },
    onPointerMove: (e) => {
      if (last.current === null) return;
      const a = at(e, e.currentTarget);
      let d = a - last.current;
      if (d > 180) d -= 360;
      if (d < -180) d += 360;
      last.current = a;
      setRot((r) => r + d);
    },
    onPointerUp: () => { last.current = null; },
    onPointerCancel: () => { last.current = null; },
    onKeyDown: (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowUp') { e.preventDefault(); setRot((r) => r + 15); }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') { e.preventDefault(); setRot((r) => r - 15); }
    },
  };
  return [rot, bind];
}

/* a point dragged inside a round field: { x, y } in -1..1 */
export function useStick() {
  const [p, setP] = useState({ x: 0, y: 0 });
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    let x = ((e.clientX - r.left) / r.width) * 2 - 1;
    let y = ((e.clientY - r.top) / r.height) * 2 - 1;
    const m = Math.hypot(x, y);
    if (m > 1) { x /= m; y /= m; }
    setP({ x, y });
  };
  const bind = {
    role: 'application', 'aria-roledescription': 'two-axis control', tabIndex: 0, style: { touchAction: 'none' },
    onPointerDown: (e) => { e.currentTarget.setPointerCapture?.(e.pointerId); move(e); },
    onPointerMove: (e) => { if (e.currentTarget.hasPointerCapture?.(e.pointerId)) move(e); },
    onPointerUp: () => setP({ x: 0, y: 0 }),
    onKeyDown: (e) => {
      const d = { ArrowLeft: [-0.3, 0], ArrowRight: [0.3, 0], ArrowUp: [0, -0.3], ArrowDown: [0, 0.3] }[e.key];
      if (d) { e.preventDefault(); setP((q) => ({ x: clamp(q.x + d[0], -1, 1), y: clamp(q.y + d[1], -1, 1) })); }
      if (e.key === 'Home') setP({ x: 0, y: 0 });
    },
  };
  return [p, bind];
}

/* a gear outline: n teeth between two radii */
export const gear = (n, r1, r2) => {
  let d = '';
  for (let i = 0; i < n * 4; i += 1) {
    const a = ((i / (n * 4)) * 2 * Math.PI) - Math.PI / 2;
    const r = i % 4 === 1 || i % 4 === 2 ? r2 : r1;
    d += `${i ? 'L' : 'M'}${(50 + Math.cos(a) * r).toFixed(1)} ${(50 + Math.sin(a) * r).toFixed(1)}`;
  }
  return `${d}Z`;
};
