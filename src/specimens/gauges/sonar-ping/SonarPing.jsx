import { useState } from 'react';
import c from "../gauges.module.css";

/* 39 */ export function SonarPing() {
  const [n, setN] = useState(1);
  return (
    <button type="button" className={c.sonar} aria-label="Sonar, click to send a ping" onClick={() => setN(n + 1)}>
      {[0, 1, 2].map((d) => <i key={`${n}-${d}`} style={{ animationDelay: `${d * 0.28}s` }} />)}
      {[[0.34, 0.5, -30], [0.7, 0.88, 40]].map(([t, r, a]) => <u key={`${n}-${a}`} style={{ '--r': r, '--a': a, animationDelay: `${t * 1.1}s` }} />)}
      <em>{30 + ((n * 13) % 40)} ms</em>
    </button>
  );
}
