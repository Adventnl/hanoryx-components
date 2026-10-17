import { useState } from 'react';
import { Ico } from "../../../stage/components/icons/icons";
import c from "../docks.module.css";

/* 16 */ export function RearrangingDock() {
  const [order, setOrder] = useState(['home', 'search', 'bell', 'user']);
  const [sel, setSel] = useState(1);
  const move = (d) => setOrder((o) => { const j = sel + d; if (j < 0 || j >= o.length) return o; const n = [...o]; [n[sel], n[j]] = [n[j], n[sel]]; setSel(j); return n; });
  return (
    <div className={c.reorder}>
      <div role="toolbar" aria-label="Rearranging dock">{order.map((n, k) => <button key={n} type="button" aria-label={n} aria-pressed={k === sel} onClick={() => setSel(k)}><Ico n={n} /></button>)}</div>
      <span><button type="button" aria-label="Move left" onClick={() => move(-1)}><Ico n="left" /></button><button type="button" aria-label="Move right" onClick={() => move(1)}><Ico n="right" /></button></span>
    </div>
  );
}
