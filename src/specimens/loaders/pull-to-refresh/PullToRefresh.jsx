import { useEffect, useState } from 'react';
import { useDrag } from "../../../stage/hooks";
import c from "../loaders.module.css";

/* 42 */ export function PullToRefresh() {
  const [v, bind, set] = useDrag({ mode: 'y', init: 1 });
  const [busy, setBusy] = useState(false);
  const pull = 1 - v;
  useEffect(() => {
    if (!busy) return undefined;
    const id = setTimeout(() => { setBusy(false); set(1); }, 1400);
    return () => clearTimeout(id);
  }, [busy, set]);
  return (
    <div className={c.pull}>
      <div className={c.pullHead} style={{ '--p': busy ? 0.7 : Math.min(pull * 1.6, 1) }} data-busy={busy} aria-live="polite">
        <i aria-hidden="true" /><span>{busy ? 'Refreshing' : pull > 0.62 ? 'Release' : 'Pull down'}</span>
      </div>
      <div
        className={c.pullHandle}
        {...bind}
        aria-label="Pull to refresh, drag down or press the down arrow past the end"
        onPointerUp={() => { if (pull > 0.62) setBusy(true); else set(1); }}
        onKeyUp={(e) => { if (e.key === 'ArrowDown' && pull > 0.62) setBusy(true); }}
        style={{ ...bind.style, '--p': busy ? 0.7 : Math.min(pull * 1.6, 1) }}
      ><u /></div>
    </div>
  );
}
