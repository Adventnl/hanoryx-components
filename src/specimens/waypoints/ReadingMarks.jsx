import { useDrag } from '../../stage/hooks';
import c from './waypoints.module.css';

/* 15 */ export function ReadingMarks() {
  const [v, bind] = useDrag({ init: 0.45 });
  return (
    <div className={c.read}>
      <div className={c.readBar} {...bind} aria-label="Reading position" style={{ ...bind.style, '--v': v }}>{[0.2, 0.45, 0.7, 0.9].map((p) => <u key={p} style={{ left: `${p * 100}%` }} aria-hidden="true" />)}<i aria-hidden="true" /></div>
      <output>{['Intro', 'Method', 'Results', 'Notes', 'Index'][Math.min(4, Math.floor(v * 5))]}</output>
    </div>
  );
}
