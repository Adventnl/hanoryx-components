import { useState } from 'react';
import c from "../stamps.module.css";

/* 14 */ export function TapeCross() {
  const [n, setN] = useState(2);
  return (
    <button type="button" className={c.cross} onClick={() => setN((v) => (v + 1) % 5)} aria-label={`${n} strips of tape. Click to add one`}>
      <i className={c.box} />
      {Array.from({ length: n }, (_, k) => <u key={k} style={{ '--a': `${k * 38 - 40}deg` }} />)}
    </button>
  );
}
