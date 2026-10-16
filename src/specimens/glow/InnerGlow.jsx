import { useHot } from '../../stage/chartKit';
import c from './glow.module.css';

export function InnerGlow() {
  const [hot, bind] = useHot();
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} data-hot={hot} aria-pressed={hot} {...bind}>
      <span className={`${c.card} ${c.inner}`}><b>Inner</b><span>glows from within</span></span>
    </button>
  );
}
