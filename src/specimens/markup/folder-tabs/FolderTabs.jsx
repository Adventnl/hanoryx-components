import { useState } from 'react';
import c from "../markup.module.css";

const FOLDERS = [['A', 'Arrivals are logged by hand.'], ['B', 'Belts are checked at seven.'], ['C', 'Complaints go in the red tray.'], ['D', 'Departures are never late.']];

export function FolderTabs() {
  const [k, setK] = useState(1);
  const onKey = (e) => {
    const d = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
    if (!d) return;
    e.preventDefault();
    const n = (k + d + FOLDERS.length) % FOLDERS.length;
    setK(n);
    e.currentTarget.parentElement.children[n].focus();
  };
  return (
    <div className={c.fig}>
      <div className={c.folder}>
        <div role="tablist" aria-label="Folder tabs" className={c.tabs}>
          {FOLDERS.map(([l], i) => (
            <button key={l} type="button" role="tab" id={`ft-${l}`} aria-selected={i === k} tabIndex={i === k ? 0 : -1} className={c.tab} onClick={() => setK(i)} onKeyDown={onKey}>{l}</button>
          ))}
        </div>
        <p role="tabpanel" aria-labelledby={`ft-${FOLDERS[k][0]}`} className={c.panelText}>{FOLDERS[k][1]}</p>
      </div>
    </div>
  );
}
