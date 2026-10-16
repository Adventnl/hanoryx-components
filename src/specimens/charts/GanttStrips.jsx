import c from './charts.module.css';
import { useScan } from './shared';

/* 19 */ const GANTT = [['Plan', 0, 24], ['Draft', 12, 44], ['Build', 30, 78], ['Test', 58, 90], ['Ship', 82, 98]];

export function GanttStrips() {
  const [i, bind] = useScan(5, { axis: 'y', label: (k) => `${GANTT[k][0]}, day ${GANTT[k][1]} to ${GANTT[k][2]}` });
  return (
    <div className={c.gantt} {...bind} aria-label="Gantt strips, move down the rows">
      {GANTT.map(([n, a, b], k) => (
        <p key={n} data-hot={k === i}><em>{n}</em><span><i style={{ left: `${a}%`, width: `${b - a}%` }} /></span><b>{b - a}d</b></p>
      ))}
    </div>
  );
}
