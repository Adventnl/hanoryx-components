import { useState } from 'react';
import c from './morphs.module.css';

/* 28 */ export function CardToAvatar() {
  const [on, setOn] = useState(false);
  return (
    <div className={c.stage}>
      <button type="button" className={c.avatar} data-on={on} aria-pressed={on} aria-label="Profile card. Click to shrink it to an avatar" onClick={() => setOn((v) => !v)}>
        <b>A</b><span><em>Ada Okafor</em><small>Systems</small></span>
      </button>
    </div>
  );
}
