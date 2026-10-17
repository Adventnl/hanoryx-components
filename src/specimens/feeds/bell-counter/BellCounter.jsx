import { useState } from 'react';
import { Ico } from "../../../stage/components/icons/icons";
import c from "../feeds.module.css";
import { Fd } from "../shared";

/* 30 */ export function BellCounter() {
  const [n, setN] = useState(2);
  return (
    <Fd label="Bell counter" className={c.center}>
      <button type="button" className={c.bell} aria-label={`${n} notifications. Add one`} onClick={() => setN((v) => v + 1)}><Ico n="bell" />{n > 0 && <em key={n} className={c.badge}>{n > 9 ? '9+' : n}</em>}</button>
      <button type="button" className={c.more} onClick={() => setN(0)}>Mark all read</button>
    </Fd>
  );
}
