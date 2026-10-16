import { useState } from 'react';
import c from './bento.module.css';
import { Tile } from './shared';

const DAYS = Array.from({ length: 35 }, (_, i) => i - 2);

export function CalendarTile() {
  const [day, setDay] = useState(14);
  return (
    <div className={c.fig}>
      <Tile k="October">
        <div className={c.cal}>
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => <i key={i} className={c.wd}>{d}</i>)}
          {DAYS.map((d) => (d >= 1 && d <= 31
            ? <button key={d} type="button" aria-pressed={d === day} aria-label={`October ${d}`} onClick={() => setDay(d)}>{d}</button>
            : <u key={d} />))}
        </div>
      </Tile>
    </div>
  );
}
