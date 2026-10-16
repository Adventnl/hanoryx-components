import { useDrag } from '../../stage/hooks';
import c from './lenses.module.css';
import { Scene } from './shared';

/* 18 */ export function DiagonalCompare() {
  const [v, bind] = useDrag({ init: 0.5 });
  return (
    <div className={`${c.area} ${c.diag}`} style={{ '--v': v }}>
      <Scene className={c.fill} /><Scene className={`${c.fill} ${c.mono} ${c.cutD}`} />
      <i {...bind} aria-label="Diagonal compare" aria-valuetext={`${Math.round(v * 100)} percent`} style={bind.style} />
    </div>
  );
}
