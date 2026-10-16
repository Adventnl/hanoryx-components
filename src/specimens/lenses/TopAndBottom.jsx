import { useDrag } from '../../stage/hooks';
import c from './lenses.module.css';
import { Scene } from './shared';

/* 5 */ export function TopAndBottom() {
  const [v, bind] = useDrag({ mode: 'y', init: 0.5 });
  return (
    <div className={`${c.area} ${c.sliderV}`} style={{ '--v': 1 - v }}>
      <Scene className={c.fill} /><Scene className={`${c.fill} ${c.mono} ${c.cutV}`} />
      <i {...bind} aria-label="Top and bottom compare" aria-valuetext={`${Math.round((1 - v) * 100)} percent`} style={bind.style} />
    </div>
  );
}
