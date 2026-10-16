import { useHot } from '../../stage/chartKit';
import c from './passes.module.css';

/* 28 */
export function Rosette() {
  const [hot, bind] = useHot();
  return (
    <button type="button" className={c.ro} data-hot={hot} aria-label="Rosette: hover, tap or press Enter to fan the ribbons" {...bind}>
      <span className={c.roTail} />
      <span className={`${c.roTail} ${c.roTail2}`} />
      <span className={c.roDisc}><span className={c.roCore}><b>1</b></span></span>
    </button>
  );
}
