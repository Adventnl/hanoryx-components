import { useState } from 'react';
import c from './feeds.module.css';
import { Fd, cx } from './shared';

/* 07 */ export function PageMore() {
  const [n, setN] = useState(3);
  return <Fd label="Load more" className={c.list}>{Array.from({ length: n }, (_, k) => <span key={k} className={cx(c.plain, c.fresh)}>Result {k + 1}</span>)}<button type="button" className={c.more} onClick={() => setN((v) => (v >= 7 ? 3 : v + 2))}>{n >= 7 ? 'Reset' : 'Load more'}</button></Fd>;
}
