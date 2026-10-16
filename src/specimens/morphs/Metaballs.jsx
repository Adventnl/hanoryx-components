import { useId } from 'react';
import { usePointer } from '../../stage/pointerVars';
import c from './morphs.module.css';
import { Goo, cx } from './shared';

/* 24 */ export function Metaballs() {
  const [ref, bind] = usePointer();
  const id = `g${useId().replace(/\W/g, '')}`;
  return (
    <div ref={ref} {...bind} className={cx(c.stage, c.meta)} tabIndex={0} role="img" aria-label="Two blobs that melt together as one follows the pointer">
      <Goo id={id} />
      <div style={{ filter: `url(#${id})` }}><i className={c.mA} /><i className={c.mB} /><i className={c.mC} /></div>
    </div>
  );
}
