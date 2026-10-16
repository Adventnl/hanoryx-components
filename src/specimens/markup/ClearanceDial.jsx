import { useDrag } from '../../stage/hooks';
import c from './markup.module.css';

const CLEAR = [['The', 0], ['east', 2], ['gate', 2], ['opens', 1], ['at', 0], ['seven', 3], ['for', 0], ['the', 0], ['night', 4], ['shift', 4]];

export function ClearanceDial() {
  const [v, bind] = useDrag({ mode: 'x', init: 0.5, steps: 4 });
  const level = Math.round(v * 4);
  return (
    <div className={c.fig}>
      <p className={c.para}>{CLEAR.map(([w, lv], i) => <span key={i} className={c.cw} data-hide={lv > 0 && level >= lv}>{w} </span>)}</p>
      <div {...bind} className={c.dialTrack} aria-label="Clearance level" aria-valuetext={`Level ${level} of 4`} style={{ ...bind.style, '--v': v }}>
        <i />
      </div>
      <p className={c.note}>Clearance {level} / 4</p>
    </div>
  );
}
