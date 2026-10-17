import { useState } from 'react';
import c from "../keypads.module.css";

/* 16 */ export function OffsetBlock() {
  const [n, setN] = useState(0);
  return <button type="button" className={c.offset} onClick={() => setN(n + 1)}>PRESS {n}</button>;
}
