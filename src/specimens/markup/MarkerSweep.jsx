import { useHot } from '../../stage/chartKit';
import c from './markup.module.css';

/* ---------- 01 marks you draw ---------- */

export function MarkerSweep() {
  const [hot, bind] = useHot();
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} data-hot={hot} aria-pressed={hot} {...bind}>
      <span className={c.para}>The belt <mark className={c.marker}>keeps moving, though nobody asked it to</mark>, and the hall fills with tea.</span>
    </button>
  );
}
