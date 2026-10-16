import { useState } from 'react';
import c from './feeds.module.css';
import { Fd } from './shared';

/* 31 */ export function DigestCard() {
  const [o, setO] = useState(false);
  return (
    <Fd label="Digest card" className={c.list}>
      <button type="button" className={c.digest} aria-expanded={o} onClick={() => setO((v) => !v)}><b>12 updates</b><small>since 9:00</small></button>
      {o && ['4 comments', '5 likes', '3 new files'].map((x) => <span key={x} className={c.plain}>{x}</span>)}
    </Fd>
  );
}
