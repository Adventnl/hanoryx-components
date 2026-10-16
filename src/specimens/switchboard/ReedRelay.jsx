import { useDrag } from '../../stage/hooks';
import c from './switchboard.module.css';

/* 23 */ export function ReedRelay() {
  const [v, bind] = useDrag({ init: 0.1 });
  const near = Math.abs(v - 0.5) < 0.16;
  return (
    <div className={c.reed} {...bind} aria-label="Magnet position" style={{ ...bind.style, '--v': v }} data-closed={near}>
      <u /><u /><i /><span>{near ? 'CLOSED' : 'OPEN'}</span>
    </div>
  );
}
