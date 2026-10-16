import { useHot } from '../../stage/chartKit';
import c from './fold.module.css';

export function PeelCorner() {
  const [hot, bind] = useHot();
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} data-hot={hot} aria-pressed={hot} aria-label="A page whose corner peels back" {...bind}>
      <span className={c.peelWrap}><i className={c.peelUnder} /><span className={c.peelCard}><b>Peel</b><i /></span></span>
    </button>
  );
}
