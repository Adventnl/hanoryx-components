import { useState } from 'react';
import c from "../feeds.module.css";
import { Fd } from "../shared";

/* 25 */ export function ChannelList() {
  const [s, setS] = useState(1);
  const C = [['general', 0], ['design', 4], ['eng', 0], ['ops', 1]];
  return <Fd label="Channels" className={c.list}>{C.map(([n, u], k) => <button key={n} type="button" className={c.row} aria-current={s === k ? 'true' : undefined} data-unread={u > 0} onClick={() => setS(k)}><span># {n}</span>{u > 0 && s !== k ? <em className={c.badge}>{u}</em> : null}</button>)}</Fd>;
}
