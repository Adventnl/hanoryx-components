import { useState } from 'react';
import c from "../matrices.module.css";

/* 23 */ const QUAD = [['Do first', ['Fix leak', 'Call back']], ['Plan', ['Redesign', 'Learn']], ['Hand off', ['Invoices']], ['Drop', ['Inbox zero', 'Old tabs']]];

export function PriorityMatrix() {
  const [k, setK] = useState(0);
  return (
    <div className={c.prio}>
      <em>urgent →</em>
      {QUAD.map(([name, chips], i) => (
        <button key={name} type="button" aria-pressed={k === i} onClick={() => setK(i)}>
          <b>{name}</b>
          {chips.map((t) => <span key={t}>{t}</span>)}
        </button>
      ))}
    </div>
  );
}
