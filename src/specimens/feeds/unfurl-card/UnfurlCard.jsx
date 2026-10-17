import { useState } from 'react';
import c from "../feeds.module.css";
import { Fd } from "../shared";

/* 41 */ export function UnfurlCard() {
  const [x, setX] = useState(true);
  return (
    <Fd label="Link preview" className={c.chat}>
      <div><p data-me="true">Look at this https://hanoryx.io/work</p></div>
      {x ? <div className={c.link}><span /><span><em>Work — Hanoryx</em><small>Selected systems and results</small></span><button type="button" aria-label="Remove preview" onClick={() => setX(false)}>×</button></div> : <button type="button" className={c.more} onClick={() => setX(true)}>Show preview</button>}
    </Fd>
  );
}
