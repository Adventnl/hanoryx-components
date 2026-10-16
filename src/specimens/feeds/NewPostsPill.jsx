import { useState } from 'react';
import { useTick } from '../../stage/hooks';
import c from './feeds.module.css';
import { Fd, cx } from './shared';

/* 42 */ export function NewPostsPill() {
  const [n, setN] = useState(0);
  const tick = useTick(2000);
  const waiting = Math.min(4, tick % 5);
  const posts = ['Hello', 'Standup notes', 'Release 1.4', 'Lunch poll', 'New hire!', 'Offsite', 'Friday demo'];
  const shown = posts.slice(posts.length - 3 - n, posts.length - n);
  return (
    <Fd label="New posts pill" className={c.list}>
      {waiting > 0 && <button type="button" className={c.pill} onClick={() => setN((v) => Math.min(4, v + 1))}>↑ {waiting} new</button>}
      {shown.map((p) => <span key={p} className={cx(c.plain, c.fresh)}>{p}</span>)}
    </Fd>
  );
}
