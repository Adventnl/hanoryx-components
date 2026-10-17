import { useState } from 'react';
import { useToggle } from "../../../stage/hooks";
import { Ico } from "../../../stage/components/icons/icons";
import c from "../menus.module.css";

/* 4 */ export function RadialMenu() {
  const [open, flip] = useToggle(true);
  const [pick, setPick] = useState('');
  return (
    <div className={c.radial} data-open={open}>
      {['pen', 'image', 'link', 'flag', 'star'].map((n, k) => <button key={n} type="button" aria-label={n} tabIndex={open ? 0 : -1} style={{ '--a': -72 + k * 36 }} onClick={() => setPick(n)}><Ico n={n} /></button>)}
      <button type="button" aria-expanded={open} aria-label="Radial menu" onClick={flip}><Ico n={open ? 'close' : 'plus'} /></button>
      <output>{pick || 'pick one'}</output>
    </div>
  );
}
