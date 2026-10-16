import { useDrag } from '../../stage/hooks';
import c from './morphs.module.css';

/* 11 */ export function CornerSlider() {
  const [v, bind] = useDrag({ mode: 'x', init: 0.35 });
  return (
    <div className={c.stage}>
      <i className={c.sq} style={{ borderRadius: `${v * 50}%` }} />
      <div className={c.rail} {...bind} aria-label="Corner radius"><u style={{ left: `${v * 100}%` }} /></div>
    </div>
  );
}
