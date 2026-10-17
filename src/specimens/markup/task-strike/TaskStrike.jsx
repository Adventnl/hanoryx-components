import { useState } from 'react';
import c from "../markup.module.css";

const TASKS = ['Wind the belt', 'Open the gates', 'Serve the tea', 'Print the list'];

export function TaskStrike() {
  const [done, setDone] = useState(() => new Set([0]));
  const toggle = (i) => setDone((s) => {
    const n = new Set(s);
    if (n.has(i)) n.delete(i); else n.add(i);
    return n;
  });
  return (
    <div className={c.fig}>
      <ul className={c.tasks}>
        {TASKS.map((t, i) => (
          <li key={t}><button type="button" role="checkbox" aria-checked={done.has(i)} className={c.task} onClick={() => toggle(i)}><i /><span>{t}</span></button></li>
        ))}
      </ul>
    </div>
  );
}
