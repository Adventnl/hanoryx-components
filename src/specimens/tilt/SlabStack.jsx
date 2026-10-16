import { useHot } from '../../stage/chartKit';
import c from './tilt.module.css';

export function SlabStack() {
  const [hot, bind] = useHot();
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} data-hot={hot} aria-pressed={hot} aria-label="A stack of slabs that spreads" {...bind}>
      <span className={c.slabs}>{Array.from({ length: 6 }, (_, i) => <i key={i} style={{ '--i': i }} />)}</span>
    </button>
  );
}
