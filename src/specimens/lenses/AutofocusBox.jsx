import { useCycle } from '../../stage/hooks';
import c from './lenses.module.css';
import { Scene } from './shared';

/* 23 */ export function AutofocusBox() {
  const k = useCycle(3, 1800);
  const spots = [[24, 40], [60, 62], [78, 30]];
  return (
    <div className={`${c.area} ${c.af}`}><Scene className={c.fill} /><i style={{ left: `${spots[k][0]}%`, top: `${spots[k][1]}%` }} /><span>AF · {k + 1}</span></div>
  );
}
