import { useDrag } from '../../stage/hooks';
import c from './kinetic.module.css';

/* 25 */ export function StretchWord() {
  const [v, bind] = useDrag({ init: 0.3 });
  return (
    <div className={c.fig}>
      <p className={c.stretch} style={{ '--v': v }}><span>ELASTIC</span></p>
      <div className={c.slide} {...bind} aria-label="Stretch, drag to pull the word" style={{ ...bind.style, '--v': v }}><i /></div>
    </div>
  );
}
