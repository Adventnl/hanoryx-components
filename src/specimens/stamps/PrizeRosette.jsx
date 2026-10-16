import { Ico } from '../../stage/icons';
import c from './stamps.module.css';

/* 28 */ export function PrizeRosette() {
  return (
    <button type="button" className={c.rosette} aria-label="Award rosette">
      <i /><i /><b><Ico n="star" /></b>
    </button>
  );
}
