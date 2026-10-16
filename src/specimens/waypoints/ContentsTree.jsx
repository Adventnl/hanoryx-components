import { useState } from 'react';
import c from './waypoints.module.css';

/* 21 */ export function ContentsTree() {
  const [k, setK] = useState('1.2');
  const nodes = [['1', 'Part one', [['1.1', 'First'], ['1.2', 'Second']]], ['2', 'Part two', [['2.1', 'Third']]]];
  return (
    <ul className={c.tree} aria-label="Contents tree">
      {nodes.map(([id, t, kids]) => (
        <li key={id}><b>{id}  {t}</b><ul>{kids.map(([kid, kt]) => <li key={kid}><button type="button" aria-current={kid === k ? 'true' : undefined} onClick={() => setK(kid)}>{kid} {kt}</button></li>)}</ul></li>
      ))}
    </ul>
  );
}
