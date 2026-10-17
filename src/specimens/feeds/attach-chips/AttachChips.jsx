import { useState } from 'react';
import c from "../feeds.module.css";
import { Fd } from "../shared";

/* 23 */ export function AttachChips() {
  const [f, setF] = useState(['plan.pdf', 'hero.png']);
  return (
    <Fd label="Attachments" className={c.chat}>
      <div className={c.files}>{f.map((x) => <span key={x}>{x}<button type="button" aria-label={`Remove ${x}`} onClick={() => setF((a) => a.filter((y) => y !== x))}>×</button></span>)}</div>
      <button type="button" className={c.more} onClick={() => setF(['plan.pdf', 'hero.png', 'notes.md'].slice(0, f.length + 1 > 3 ? 1 : f.length + 1))}>Attach</button>
    </Fd>
  );
}
