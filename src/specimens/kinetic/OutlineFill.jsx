import { useHot } from '../../stage/chartKit';
import c from './kinetic.module.css';

/* 11 */ export function OutlineFill() {
  const [hot, h] = useHot();
  return (
    <div className={c.fig}>
      <button type="button" className={c.outline} data-hot={hot} aria-label="Fill. Hover to fill the outline" {...h}>
        <span>FILL</span><span aria-hidden="true">FILL</span>
      </button>
    </div>
  );
}
