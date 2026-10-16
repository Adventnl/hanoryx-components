import { useHot } from '../../stage/chartKit';
import c from './tilt.module.css';

export function PeekCard() {
  const [hot, bind] = useHot();
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} data-hot={hot} aria-pressed={hot} aria-label="A card hiding another" {...bind}>
      <span className={c.peek}>
        <i className={c.back}><b>Under</b></i>
        <i className={c.front}><b>Over</b></i>
      </span>
    </button>
  );
}
