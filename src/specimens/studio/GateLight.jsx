import { useDrag } from '../../stage/hooks';
import c from './studio.module.css';
import { useLevels } from './shared';

/* 20 */ export function GateLight() {
  const [v, bind] = useDrag({ mode: 'y', init: 0.4 });
  const [l] = useLevels(1, 150);
  const open = l > v;
  return (
    <div className={c.gate}>
      <div {...bind} aria-label="Gate threshold" aria-valuetext={`${Math.round(v * 100)} percent`} style={{ ...bind.style, '--v': v, '--l': l }}><i /><b /></div>
      <span data-open={open}>{open ? 'OPEN' : 'SHUT'}</span>
    </div>
  );
}
