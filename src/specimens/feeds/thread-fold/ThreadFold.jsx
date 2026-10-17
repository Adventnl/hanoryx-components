import { useState } from 'react';
import c from "../feeds.module.css";
import { Fd } from "../shared";

/* 24 */ export function ThreadFold() {
  const [o, setO] = useState(false);
  return (
    <Fd label="Thread" className={c.chat}>
      <div><p>Ship on Friday?</p>{o ? <><p data-me="true" className={c.sub}>Yes</p><p className={c.sub}>After QA</p><p data-me="true" className={c.sub}>Ok</p></> : null}</div>
      <button type="button" className={c.more} aria-expanded={o} onClick={() => setO((v) => !v)}>{o ? 'Hide replies' : '3 replies'}</button>
    </Fd>
  );
}
