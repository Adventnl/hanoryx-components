import { useDrag } from '../../stage/hooks';
import c from './gauges.module.css';

/* 21 */ export function SpiritLevel() {
  const [v, bind] = useDrag({ init: 0.2 });
  const flat = Math.abs(v - 0.5) < 0.03;
  return (
    <div className={c.spirit} {...bind} aria-label="Spirit level, drag to move the bubble" style={{ ...bind.style, '--v': v }} data-flat={flat}>
      <div><i /><u /><b /></div>
      <span>{flat ? 'LEVEL' : `${((v - 0.5) * 8).toFixed(1)}°`}</span>
    </div>
  );
}
