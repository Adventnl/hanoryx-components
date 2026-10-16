import { usePoint } from '../../stage/chartKit';
import c from './passes.module.css';

/* 15 */
export function HologramSeal() {
  const [p, bind] = usePoint();
  const x = p ? p.x : 50;
  const y = p ? p.y : 50;
  return (
    <div className={c.fig}>
      <div className={c.hs} {...bind} aria-label="Hologram seal: move the pointer over it to move the light" style={{ ...bind.style, '--lx': x.toFixed(1), '--ly': y.toFixed(1) }}>
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <defs><path id="hs-ring" d="M50 50m-37 0a37 37 0 1 1 74 0a37 37 0 1 1 -74 0" /></defs>
          <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="22" fill="none" stroke="currentColor" strokeWidth="1" />
          <text fontSize="6.6" fill="currentColor"><textPath href="#hs-ring" textLength="228" lengthAdjust="spacing">GENUINE · HANORYX · GENUINE · HANORYX ·</textPath></text>
          <path d="M41 39v22M59 39v22M41 50h18" fill="none" stroke="currentColor" strokeWidth="4" />
        </svg>
      </div>
      <p className={c.k}>{p ? 'Light is moving' : 'Move over the seal'}</p>
    </div>
  );
}
