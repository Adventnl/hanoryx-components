import { useHot } from '../../stage/chartKit';
import c from './glyphs.module.css';

export function Halftone() {
  const [hot, bind] = useHot();
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} data-hot={hot} aria-pressed={hot} {...bind}>
      <span className={c.half}>Dots</span>
    </button>
  );
}
