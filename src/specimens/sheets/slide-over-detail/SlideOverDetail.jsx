import { useState } from 'react';
import { Ico } from "../../../stage/components/icons/icons";
import c from "../sheets.module.css";
import { Stage } from "../shared";

/* 12 */ export function SlideOverDetail() {
  const [k, setK] = useState(-1);
  return (
    <Stage label="Slide-over detail">
      <ul className={c.list}>{['Alpha', 'Beta', 'Gamma'].map((t, i) => <li key={t}><button type="button" aria-expanded={k === i} onClick={() => setK(k === i ? -1 : i)}>{t}</button></li>)}</ul>
      <div className={c.over} data-on={k >= 0} inert={k < 0 || undefined}><button type="button" aria-label="Close" onClick={() => setK(-1)}><Ico n="left" /></button><b>{['Alpha', 'Beta', 'Gamma'][Math.max(k, 0)]}</b><p>Detail slides over the list.</p></div>
    </Stage>
  );
}
