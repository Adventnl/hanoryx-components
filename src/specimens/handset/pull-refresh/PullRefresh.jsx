import { useState } from 'react';
import { useTick } from "../../../stage/hooks";
import c from "../handset.module.css";
import { Phone } from "../shared";

/* 16 */ export function PullRefresh() {
  const [n, setN] = useState(0);
  const t = useTick(900);
  const busy = n > 0 && t - n < 2;
  return (
    <Phone label="Pull to refresh">
      <span className={c.pullSpin} data-busy={busy}><i /></span>
      <div className={c.list} data-busy={busy}>{[0, 1, 2].map((k) => <u key={k} className={c.line} />)}</div>
      <button type="button" className={c.ghost} onClick={() => setN(t + 1)}>Pull</button>
    </Phone>
  );
}
