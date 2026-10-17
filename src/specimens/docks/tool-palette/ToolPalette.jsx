import { useState } from 'react';
import { Ico } from "../../../stage/components/icons/icons";
import c from "../docks.module.css";

/* 18 */ export function ToolPalette() {
  const [k, setK] = useState(2);
  const tools = ['pen', 'image', 'bolt', 'eye', 'link', 'flag', 'pin', 'star'];
  return (
    <div className={c.palette} role="toolbar" aria-label="Tool palette">
      {tools.map((n, i) => <button key={n} type="button" aria-label={n} aria-pressed={i === k} onClick={() => setK(i)}><Ico n={n} /></button>)}
    </div>
  );
}
