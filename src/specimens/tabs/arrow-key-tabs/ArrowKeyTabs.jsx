import { useState } from 'react';
import c from "../tabs.module.css";
import { Tabs } from "../shared";

/* 38 */ export function ArrowKeyTabs() {
  const [k, setK] = useState(0);
  const [note, setNote] = useState('Focus a tab, then press an arrow key');
  return (
    <div className={c.roving}>
      <Tabs labels={['Left', 'Mid', 'Right']} label="Arrow-key tabs" className={c.under} tabClass={c.tab} onPick={(j) => { setK(j); setNote(`Moved to ${['Left', 'Mid', 'Right'][j]}`); }}><i aria-hidden="true" /></Tabs>
      <output aria-live="polite" data-k={k}>{note}</output>
    </div>
  );
}
