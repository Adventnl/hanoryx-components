import { useDrag } from '../../stage/hooks';
import c from './faders.module.css';

/* 11 */ export function TapeMeasure() {
  const [v, bind] = useDrag({ init: 0.5 });
  return (
    <div className={c.tape} {...bind} aria-label="Tape measure" style={{ ...bind.style, '--v': v }}>
      <ol>{Array.from({ length: 41 }, (_, i) => <li key={i} data-big={i % 5 === 0}>{i % 5 === 0 ? i * 2 : ''}</li>)}</ol>
      <i /><output>{(v * 80).toFixed(1)} cm</output>
    </div>
  );
}
