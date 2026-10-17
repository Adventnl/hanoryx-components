import { useState } from 'react';
import c from "../fields.module.css";

/* 38 */ export function FindReplace() {
  const [a, setA] = useState('quick');
  const [b, setB] = useState('slow');
  const sample = 'A quick pass, then a quick fix.';
  return (
    <div className={c.find}>
      <div><input value={a} aria-label="Find" onChange={(e) => setA(e.target.value)} /><input value={b} aria-label="Replace with" onChange={(e) => setB(e.target.value)} /></div>
      <p>{a ? sample.split(a).join(`«${b}»`) : sample}</p>
    </div>
  );
}
