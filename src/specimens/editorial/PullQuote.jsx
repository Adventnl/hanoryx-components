import { useHot } from '../../stage/chartKit';
import c from './editorial.module.css';

/* ---------- 01 quotes ---------- */

export function PullQuote() {
  const [hot, bind] = useHot();
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} data-hot={hot} aria-pressed={hot} {...bind}>
      <span className={c.pull1}>
        <span className={c.pq}>The belt keeps moving, though nobody asked it to.</span>
        <span className={c.cite}>Field notes</span>
      </span>
    </button>
  );
}
