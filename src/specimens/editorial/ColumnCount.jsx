import { useDrag } from '../../stage/hooks';
import c from './editorial.module.css';

export function ColumnCount() {
  const [v, bind] = useDrag({ mode: 'x', init: 0.5, steps: 2 });
  const n = 1 + Math.round(v * 2);
  return (
    <div className={c.fig}>
      <p className={c.colsText} style={{ columnCount: n }}>The belt keeps moving, though nobody asked it to. At seven the gates open and the hall fills with tea and timetables. Someone has crossed out the wrong platform; someone else has underlined the right one, twice.</p>
      <div {...bind} className={c.track} aria-label="Number of columns" aria-valuetext={`${n} columns`} style={{ ...bind.style, '--v': v }}><i /></div>
      <span className={c.note}>{n} {n === 1 ? 'column' : 'columns'}</span>
    </div>
  );
}
