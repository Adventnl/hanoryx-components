import { useDrag } from '../../stage/hooks';
import c from './faders.module.css';

/* 29 */ export function PlateLoader() {
  const [v, bind] = useDrag({ init: 0.45, steps: 8 });
  const n = Math.round(v * 8);
  return (
    <div className={c.plates} {...bind} aria-label="Plate loader" style={{ ...bind.style }}>
      <div>{Array.from({ length: 8 }, (_, i) => <i key={i} data-on={i < n} style={{ height: `${100 - i * 7}%` }} />)}<b /></div>
      <output>{20 + n * 10} KG</output>
    </div>
  );
}
