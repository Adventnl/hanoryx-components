import { useState } from 'react';
import c from './feeds.module.css';
import { Av, Fd, NAMES } from './shared';

/* 26 */ export function MentionSuggest() {
  const [v, setV] = useState('Thanks @');
  const at = /@(\w*)$/.exec(v);
  const sug = at ? NAMES.filter((n) => n.toLowerCase().startsWith(at[1].toLowerCase())).slice(0, 3) : [];
  return (
    <Fd label="Mention suggestions" className={c.list}>
      <input className={c.in} value={v} onChange={(e) => setV(e.target.value)} aria-label="Message with mentions" />
      {sug.length ? <div className={c.pop}>{sug.map((n) => <button key={n} type="button" onClick={() => setV(v.replace(/@\w*$/, `@${n.split(' ')[0]} `))}><Av h={n.length * 20} s={n[0]} />{n}</button>)}</div> : <small className={c.m}>Type @ to mention</small>}
    </Fd>
  );
}
