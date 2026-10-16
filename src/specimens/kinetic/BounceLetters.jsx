import { useHot } from '../../stage/chartKit';
import c from './kinetic.module.css';
import { chars } from './shared';

/* 24 */ export function BounceLetters() {
  const [hot, h] = useHot();
  return (
    <div className={c.fig}>
      <button type="button" className={c.bounce} data-hot={hot} aria-label="Bounce. Hover to bounce the letters" {...h}>{chars('BOUNCE')}</button>
    </div>
  );
}
