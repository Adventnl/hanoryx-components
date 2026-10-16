import { useDrag } from '../../stage/hooks';
import c from './wipes.module.css';

/* the four that answer to more than a press */

/* 39 */ export function DragToWipe() {
  const [v, bind] = useDrag({ init: 0.5 });
  return (
    <div className={`${c.wipe} ${c.dragw}`} style={{ '--v': v }}>
      <span className={c.a}><b>A</b></span>
      <span className={c.b}><b>B</b></span>
      <i {...bind} aria-label="Drag to wipe" aria-valuetext={`${Math.round(v * 100)} percent`} style={bind.style} />
    </div>
  );
}
