import { usePoint } from '../../stage/chartKit';
import c from './kinetic.module.css';

/* 14 */ export function SpotlightReveal() {
  const [p, bind] = usePoint();
  return (
    <div className={c.fig}>
      <div className={c.spot} {...bind} aria-label="Spotlight reveal, move over it to light the words" style={{ ...bind.style, '--x': `${p ? p.x : -40}%`, '--y': `${p ? p.y : 50}%` }}>
        <span>Hidden in plain sight</span>
        <span aria-hidden="true">Hidden in plain sight</span>
      </div>
    </div>
  );
}
