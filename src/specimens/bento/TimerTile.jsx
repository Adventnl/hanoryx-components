import { useState } from 'react';
import { useTick } from '../../stage/hooks';
import c from './bento.module.css';
import { Tile, pad } from './shared';

export function TimerTile() {
  const t = useTick(100);
  const [run, setRun] = useState({ on: false, start: 0, base: 0 });
  const ms = (run.on ? run.base + (t - run.start) : run.base) * 100;
  const toggle = () => setRun((r) => (r.on ? { on: false, start: 0, base: r.base + (t - r.start) } : { on: true, start: t, base: r.base }));
  return (
    <div className={c.fig}>
      <Tile k="Stopwatch">
        <b className={c.v} aria-live="off">{pad(Math.floor(ms / 60000))}:{pad(Math.floor(ms / 1000) % 60)}<small>.{Math.floor((ms % 1000) / 100)}</small></b>
        <span className={c.row}>
          <button type="button" className={c.btn} onClick={toggle}>{run.on ? 'Stop' : 'Start'}</button>
          <button type="button" className={c.btn} onClick={() => setRun({ on: false, start: 0, base: 0 })}>Reset</button>
        </span>
      </Tile>
    </div>
  );
}
