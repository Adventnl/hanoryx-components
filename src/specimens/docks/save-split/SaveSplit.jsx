import { useState } from 'react';
import { useToggle } from "../../../stage/hooks";
import { Ico } from "../../../stage/components/icons/icons";
import c from "../docks.module.css";

/* 24 */ export function SaveSplit() {
  const [open, flip, set] = useToggle();
  const [label, setLabel] = useState('Save');
  return (
    <div className={c.split}>
      <div><button type="button">{label}</button><button type="button" aria-haspopup="menu" aria-expanded={open} aria-label="More save options" onClick={flip}><Ico n="down" /></button></div>
      {open && <ul role="menu">{['Save', 'Save as…', 'Save all'].map((t) => <li key={t} role="none"><button type="button" role="menuitem" onClick={() => { setLabel(t.replace('…', '')); set(false); }}>{t}</button></li>)}</ul>}
    </div>
  );
}
