import { useState } from 'react';
import { Ico } from "../../../stage/components/icons/icons";
import c from "../docks.module.css";

/* 2 */ export function IconRail() {
  const [k, setK] = useState(0);
  const icons = ['home', 'search', 'bell', 'user'];
  return (
    <div className={c.rail} role="toolbar" aria-label="Icon rail" aria-orientation="vertical" style={{ '--k': k }}>
      {icons.map((n, i) => <button key={n} type="button" aria-label={n} aria-pressed={i === k} onClick={() => setK(i)}><Ico n={n} /></button>)}
      <i aria-hidden="true" />
    </div>
  );
}
