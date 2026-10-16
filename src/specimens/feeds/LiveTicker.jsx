import { useTick } from '../../stage/hooks';
import c from './feeds.module.css';
import { Fd, cx } from './shared';

/* 35 */ export function LiveTicker() {
  const n = useTick(1100);
  const E = ['Ana opened #482', 'Deploy passed', 'Kofi commented', 'Backup finished', 'Ravi merged #479', 'Mara joined', 'Alert cleared'];
  const rows = Array.from({ length: 4 }, (_, k) => ({ id: n + 3 - k, t: E[(n + 3 - k) % E.length] }));
  return <Fd label="Live ticker" className={c.list} role="log">{rows.map((r) => <div key={r.id} className={cx(c.row, c.in2)}><span>{r.t}</span><small>{r.id % 60}s</small></div>)}</Fd>;
}
