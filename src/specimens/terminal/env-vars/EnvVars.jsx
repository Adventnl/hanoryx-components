import { useState } from 'react';
import c from "../terminal.module.css";
import { cx } from "../shared";

const ENV = [['NODE_ENV', 'production'], ['API_URL', 'https://api.hanoryx.io'], ['TOKEN', 'sk_live_4f9a21c8'], ['PORT', '8080']];

/* 20 */ export function EnvVars() {
  const [shown, setShown] = useState(['NODE_ENV']);
  const flip = (k) => setShown((a) => (a.includes(k) ? a.filter((x) => x !== k) : [...a, k]));
  return (
    <div className={c.win}>
      {ENV.map(([k, v]) => (
        <button key={k} type="button" className={cx(c.ln, c.bl)} aria-pressed={shown.includes(k)} aria-label={`${k}, ${shown.includes(k) ? 'shown' : 'hidden'}`} onClick={() => flip(k)}>
          <span className={c.cyan}>{k}</span><span className={c.dim}>=</span><span>{shown.includes(k) ? v : '•'.repeat(Math.min(10, v.length))}</span>
        </button>
      ))}
    </div>
  );
}
