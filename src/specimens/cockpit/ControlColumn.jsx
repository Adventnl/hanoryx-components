import { usePointer } from '../../stage/pointerVars';
import c from './cockpit.module.css';

/* 40 */ export function ControlColumn() {
  const [ref, bind] = usePointer();
  return (
    <div ref={ref} className={c.yoke} role="application" aria-label="Control column position. Move the pointer here, or use the arrow keys." tabIndex={0} {...bind}><i /><b /></div>
  );
}
