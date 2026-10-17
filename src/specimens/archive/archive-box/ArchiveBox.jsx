import { useState } from 'react';
import { pad2 } from "../../../stage/hooks";
import c from "../archive.module.css";
import { step } from "../shared";

const BOXES = ['Ledgers', 'Letters', 'Plans', 'Photos'];

/* 14 */ export function ArchiveBox() {
  const [i, setI] = useState(0);
  return (
    <button type="button" className={c.abox} onClick={() => setI((v) => step(v, 1, 4))} aria-label={`Archive box: ${BOXES[i]}. Click for the next box`}>
      <span className={c.hole} />
      <span className={c.plate}><b>{BOXES[i]}</b><small>BOX {pad2(i + 11)}</small></span>
    </button>
  );
}
