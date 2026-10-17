import { useState } from 'react';
import c from "../docks.module.css";

/* 10 */ export function ReactionBar() {
  const faces = ['❤', '★', '✦', '◆'];
  const [n, setN] = useState([4, 1, 0, 2]);
  return (
    <div className={c.react} role="toolbar" aria-label="Reaction bar">
      {faces.map((f, k) => <button key={f} type="button" aria-label={`React ${f}, ${n[k]}`} onClick={() => setN((a) => a.map((v, j) => (j === k ? v + 1 : v)))}><span>{f}</span><b>{n[k]}</b></button>)}
    </div>
  );
}
