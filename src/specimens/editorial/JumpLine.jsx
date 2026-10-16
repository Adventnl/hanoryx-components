import { useHot } from '../../stage/chartKit';
import c from './editorial.module.css';

export function JumpLine() {
  const [hot, bind] = useHot();
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} data-hot={hot} aria-pressed={hot} aria-label="Continued on page 7" {...bind}>
      <span className={c.jump}>Continued on page 7<i /></span>
    </button>
  );
}
