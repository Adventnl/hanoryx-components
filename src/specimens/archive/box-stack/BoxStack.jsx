import { useState } from 'react';
import { pad2 } from "../../../stage/hooks";
import c from "../archive.module.css";

/* 38 */ export function BoxStack() {
  const [n, setN] = useState(3);
  return (
    <button type="button" className={c.stackBox} onClick={() => setN((v) => (v >= 5 ? 1 : v + 1))} aria-label={`${n} boxes. Click to add one`}>
      {Array.from({ length: n }, (_, k) => <i key={k} style={{ '--k': k, '--s': k % 2 ? 1 : -1 }}><b>{pad2(k + 1)}</b></i>)}
    </button>
  );
}
