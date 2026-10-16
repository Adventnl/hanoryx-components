import { useDrag } from '../../stage/hooks';
import c from './sheets.module.css';
import { Stage } from './shared';

/* 8 */ export function SnappingSheet() {
  const [v, bind, set] = useDrag({ mode: 'y', init: 0.25, steps: 0 });
  const snap = () => set(v < 0.3 ? 0.18 : v < 0.62 ? 0.5 : 0.85);
  return (
    <Stage label="Snapping sheet">
      <div className={c.snapSheet} style={{ '--h': v }}>
        <div className={c.grab} {...bind} aria-label="Sheet handle, drag or use arrow keys" aria-valuetext={`${Math.round(v * 100)} percent open`} onPointerUp={snap} onKeyUp={snap} style={{ ...bind.style }}><u /></div>
        <p>Drag me to a snap point.</p>
      </div>
    </Stage>
  );
}
