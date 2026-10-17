import { useState } from 'react';
import c from "../terminal.module.css";

/* 35 */ export function HeredocPrompt() {
  const [lines, setLines] = useState(['hello']);
  const [v, setV] = useState('');
  const [done, setDone] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    if (v.trim() === 'EOF') { setDone(true); } else { setLines((a) => [...a.slice(-2), v]); }
    setV('');
  };
  const reset = () => { setLines([]); setDone(false); };
  return (
    <form className={c.win} onSubmit={submit}>
      <p className={c.ln}><b className={c.prompt}>$</b> cat &lt;&lt; EOF</p>
      {lines.map((l, i) => <p key={i} className={c.ln}><span className={c.dim}>&gt;</span> {l}</p>)}
      {done ? <p className={c.ln}><b className={c.ok}>wrote {lines.length} lines</b> <button type="button" className={c.key} onClick={reset}>again</button></p>
        : <label className={c.ln}><span className={c.dim}>&gt;</span> <input className={c.plain} value={v} onChange={(e) => setV(e.target.value)} aria-label="Line (type EOF to finish)" spellCheck={false} autoComplete="off" /></label>}
    </form>
  );
}
