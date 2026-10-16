import { useHot } from '../../stage/chartKit';
import c from './kinetic.module.css';

/* 41 */ export function SliceSlide() {
  const [hot, h] = useHot();
  return (
    <div className={c.fig}>
      <button type="button" className={c.slice} data-hot={hot} aria-label="Slice. Hover to slide the slices" {...h}>
        {[0, 1, 2, 3].map((k) => <span key={k} style={{ '--k': k }} aria-hidden={k !== 0}>SLICE</span>)}
      </button>
    </div>
  );
}
