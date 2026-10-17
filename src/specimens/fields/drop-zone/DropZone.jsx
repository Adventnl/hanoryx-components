import { useState } from 'react';
import c from "../fields.module.css";

/* 13 */ export function DropZone() {
  const [n, setN] = useState(0);
  return <button type="button" className={c.drop} onClick={() => setN(n + 1)}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 16V4m0 0-4 4m4-4 4 4M4 16v4h16v-4" /></svg><span>{n ? `${n} file${n > 1 ? 's' : ''} added` : 'Drop files, or press'}</span></button>;
}
