import c from './gauges.module.css';
import { useHot } from './shared';

/* 11 */ const BULLETS = [['Reach', 0.62, 0.9, 0.78], ['Speed', 0.41, 0.66, 0.7], ['Uptime', 0.84, 0.97, 0.9]];

export function BulletGauge() {
  const [hot, h] = useHot();
  return (
    <button type="button" className={c.bullets} data-hot={hot} aria-label="Bullet gauges, hover to compare with the target" {...h}>
      {BULLETS.map(([label, rest, up, target]) => (
        <span key={label} style={{ '--v': hot ? up : rest, '--t': target }}>
          <em>{label}</em>
          <i><b /><u /></i>
        </span>
      ))}
    </button>
  );
}
