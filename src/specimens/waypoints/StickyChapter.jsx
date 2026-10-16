import { useState } from 'react';
import { clamp } from '../../stage/hooks';
import c from './waypoints.module.css';

/* 18 */ export function StickyChapter() {
  const [k, setK] = useState(0);
  const ch = ['I · Arrival', 'II · Crossing', 'III · Return'];
  return (
    <div className={c.sticky}>
      <header key={k}>{ch[k]}</header>
      <div className={c.stickyBody} onScroll={(e) => { const el = e.currentTarget; setK(clamp(Math.floor((el.scrollTop / (el.scrollHeight - el.clientHeight)) * 2.999), 0, 2)); }} tabIndex={0} aria-label="Scroll the text; the header follows">
        {Array.from({ length: 9 }, (_, i) => <p key={i}>{['Gulls over the pier.', 'A long wait in the rain.', 'The ferry, late.', 'A line of lamps.', 'Salt on the glass.', 'Nobody speaks.', 'The coast comes up.', 'Home by the hill road.', 'Lights, then the door.'][i]}</p>)}
      </div>
    </div>
  );
}
