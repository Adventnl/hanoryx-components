import { useHot } from '../../stage/chartKit';
import c from './markup.module.css';

export function DogEar() {
  const [hot, bind] = useHot();
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} data-hot={hot} aria-pressed={hot} aria-label="Page seven with a folded corner" {...bind}>
      <span className={c.leafCard}><span>Page seven. The belt moves on.</span><i className={c.ear} /></span>
    </button>
  );
}
