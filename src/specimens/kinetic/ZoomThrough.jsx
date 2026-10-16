import { useHot } from '../../stage/chartKit';
import c from './kinetic.module.css';

/* 40 */ export function ZoomThrough() {
  const [hot, h] = useHot();
  return (
    <div className={c.fig}>
      <button type="button" className={c.zoom} data-hot={hot} aria-label="Zoom through. Hover to fly through the word" {...h}><span>THROUGH</span></button>
    </div>
  );
}
