import { useDrag } from '../../stage/hooks';
import c from './faders.module.css';

/* 20 */ export function MagnetSnap() {
  const [v, bind] = useDrag({ init: 0.25, steps: 4 });
  return (
    <div className={c.magnet} {...bind} aria-label="Magnetic snap slider" style={{ ...bind.style, '--v': v }}>
      {['XS', 'S', 'M', 'L', 'XL'].map((t) => <em key={t}>{t}</em>)}<i />
    </div>
  );
}
