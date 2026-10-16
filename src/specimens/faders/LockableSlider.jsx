import { useDrag, useToggle } from '../../stage/hooks';
import c from './faders.module.css';

/* 40 */ export function LockableSlider() {
  const [locked, flip] = useToggle();
  const [v, bind] = useDrag({ init: 0.5 });
  const guard = locked ? { ...bind, onPointerDown: undefined, onPointerMove: undefined, onKeyDown: undefined, tabIndex: -1, 'aria-disabled': true } : bind;
  return (
    <div className={c.lockable} data-locked={locked}>
      <div {...guard} aria-label="Lockable slider" style={{ ...bind.style, '--v': v }}><i /></div>
      <button type="button" aria-pressed={locked} aria-label="Lock the slider" onClick={flip}>{locked ? 'LOCKED' : 'FREE'}</button>
    </div>
  );
}
