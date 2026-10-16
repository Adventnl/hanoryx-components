import { useState } from 'react';
import c from './bento.module.css';
import { Tile } from './shared';

const ITEMS = ['Belt', 'Gate', 'Tea', 'Timetable', 'Platform', 'Mill'];

export function SearchTile() {
  const [q, setQ] = useState('t');
  const hits = ITEMS.filter((i) => i.toLowerCase().includes(q.toLowerCase()));
  return (
    <div className={c.fig}>
      <Tile k={`Search · ${hits.length}`}>
        <input className={c.input} value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search" aria-label="Search the list" spellCheck="false" autoComplete="off" />
        <span className={c.hits}>{hits.length ? hits.map((h) => <i key={h}>{h}</i>) : <em>nothing</em>}</span>
      </Tile>
    </div>
  );
}
