import { useState } from 'react';
import { Ico } from "../../../stage/components/icons/icons";
import c from "../skeletons.module.css";

/* 30 */ export function DropTarget() {
  const [over, setOver] = useState(false);
  const [n, setN] = useState(0);
  return (
    <div className={c.drop} data-over={over} onDragOver={(e) => { e.preventDefault(); setOver(true); }} onDragLeave={() => setOver(false)} onDrop={(e) => { e.preventDefault(); setOver(false); setN((v) => v + (e.dataTransfer.files.length || 1)); }}>
      <Ico n="upload" /><b>{n ? `${n} dropped` : 'Drop files here'}</b>
      <button type="button" onClick={() => setN((v) => v + 1)}>or browse</button>
    </div>
  );
}
