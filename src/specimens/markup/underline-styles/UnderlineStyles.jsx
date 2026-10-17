import { useState } from 'react';
import c from "../markup.module.css";

/* ---------- the last three, which need a little state of their own ---------- */

const ULS = ['solid', 'dotted', 'dashed', 'wavy', 'double'];

export function UnderlineStyles() {
  const [k, setK] = useState(3);
  return (
    <div className={c.fig}>
      <p className={c.para}>An <span className={c.uline} style={{ textDecorationStyle: ULS[k] }}>underlined phrase</span> can be dressed five ways.</p>
      <div role="radiogroup" aria-label="Underline style" className={c.chipsRow}>
        {ULS.map((u, i) => <button key={u} type="button" role="radio" aria-checked={i === k} className={c.mini} onClick={() => setK(i)}>{u}</button>)}
      </div>
    </div>
  );
}
