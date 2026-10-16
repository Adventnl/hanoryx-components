import { useDrag } from '../../stage/hooks';
import c from './faders.module.css';

/* 18 */ export function Zipper() {
  const [v, bind] = useDrag({ init: 0.45 });
  return (
    <div className={c.zip} {...bind} aria-label="Zipper" style={{ ...bind.style, '--v': v }}>
      <i /><b />
    </div>
  );
}
