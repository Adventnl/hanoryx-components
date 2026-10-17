import { useState } from 'react';
import { pad2 } from "../../../stage/hooks";
import { Ico } from "../../../stage/components/icons/icons";
import c from "../archive.module.css";

const DRAWERS = [['2019 – 2021', 412], ['2022 – 2023', 268], ['2024', 190], ['2025 – 2026', 87]];

/* 06 */ export function DrawerStack() {
  const [o, setO] = useState(0);
  return (
    <div className={c.acc}>
      {DRAWERS.map(([t, n], i) => (
        <div key={t} className={c.accRow}>
          <button type="button" aria-expanded={o === i} onClick={() => setO(o === i ? -1 : i)}><span>{t}</span><Ico n="down" /></button>
          {o === i && <p>{n} records · box {pad2(i + 3)}</p>}
        </div>
      ))}
    </div>
  );
}
