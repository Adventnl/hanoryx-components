import { useState } from 'react';
import c from './morphs.module.css';
import { useTween } from './shared';

const CHECK = [4, 12, 9, 17, 9, 17, 20, 6];

const CROSS = [6, 6, 18, 18, 18, 6, 6, 18];

/* 20 */ export function CheckToCross() {
  const [on, setOn] = useState(false);
  const v = useTween(on ? CROSS : CHECK, 500);
  return (
    <div className={c.stage}>
      <button type="button" className={c.cc} aria-pressed={on} aria-label={on ? 'Cross' : 'Check mark'} onClick={() => setOn((x) => !x)}>
        <svg viewBox="0 0 24 24"><line x1={v[0]} y1={v[1]} x2={v[2]} y2={v[3]} /><line x1={v[4]} y1={v[5]} x2={v[6]} y2={v[7]} /></svg>
      </button>
    </div>
  );
}
