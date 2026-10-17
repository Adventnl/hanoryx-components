import { useState } from 'react';
import c from "../handset.module.css";
import { Av, Phone } from "../shared";

/* 12 */ export function StoryRail() {
  const [seen, setSeen] = useState([2]);
  return (
    <Phone label="Story rail">
      <b className={c.h}>Stories</b>
      <div className={c.rail}>{[0, 1, 2, 3, 4].map((k) => <button key={k} type="button" className={c.story} data-seen={seen.includes(k)} aria-label={`Story ${k + 1}`} onClick={() => setSeen((a) => [...new Set([...a, k])])}><Av h={k * 60} s={'ABCDE'[k]} /></button>)}</div>
      <span className={c.p}>{5 - seen.length} unseen</span>
    </Phone>
  );
}
