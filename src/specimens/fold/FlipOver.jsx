import { useHot } from '../../stage/chartKit';
import c from './fold.module.css';

/* ---------- 01 flips ---------- */

export function FlipOver() {
  const [hot, bind] = useHot();
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} data-hot={hot} aria-pressed={hot} aria-label="Card that flips over" {...bind}>
      <span className={c.stage}>
        <span className={`${c.flip} ${c.y}`}><i><b>Front</b></i><i className={c.bk}><b>Back</b></i></span>
      </span>
    </button>
  );
}
