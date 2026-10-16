import { useDrag } from '../../stage/hooks';
import c from './progress.module.css';

/* 16 */ export function RangeFill() {
  const [v, bind] = useDrag({ init: 0.45 });
  return <div className={c.range} {...bind} aria-label="Range progress" style={{ ...bind.style, '--v': v }}><i /><b /></div>;
}
