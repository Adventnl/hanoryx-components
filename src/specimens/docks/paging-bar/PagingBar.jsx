import { useState } from 'react';
import { Ico } from "../../../stage/components/icons/icons";
import c from "../docks.module.css";

/* 34 */ export function PagingBar() {
  const [p, setP] = useState(2);
  return (
    <div className={c.paging} role="group" aria-label="Paging bar">
      <button type="button" aria-label="Previous page" disabled={p === 0} onClick={() => setP(p - 1)}><Ico n="left" /></button>
      {[0, 1, 2, 3, 4].map((k) => <i key={k} aria-hidden="true" data-on={k === p} />)}
      <button type="button" aria-label="Next page" disabled={p === 4} onClick={() => setP(p + 1)}><Ico n="right" /></button>
    </div>
  );
}
