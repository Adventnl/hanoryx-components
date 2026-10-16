import { useState } from 'react';
import c from './docks.module.css';

/* 38 */ export function ShortcutBar() {
  const [hit, setHit] = useState('');
  const keys = [['⌘', 'S', 'Save'], ['⌘', 'Z', 'Undo'], ['⇧', 'P', 'Panel']];
  return (
    <div className={c.keys}>
      <ul>{keys.map(([a, b, t]) => <li key={t}><button type="button" onClick={() => setHit(t)}><kbd>{a}</kbd><kbd>{b}</kbd><span>{t}</span></button></li>)}</ul>
      <output>{hit ? `${hit} ✓` : 'Press a shortcut'}</output>
    </div>
  );
}
