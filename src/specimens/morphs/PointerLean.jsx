import { usePointer } from '../../stage/pointerVars';
import c from './morphs.module.css';
import { cx } from './shared';

/* 38 */ export function PointerLean() {
  const [ref, bind] = usePointer();
  return <div ref={ref} {...bind} className={cx(c.stage, c.pblob)} tabIndex={0} role="img" aria-label="A shape that leans toward the pointer"><i /></div>;
}
