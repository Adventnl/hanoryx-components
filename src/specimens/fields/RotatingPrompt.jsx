import { useState } from 'react';
import { useCycle } from '../../stage/hooks';
import c from './fields.module.css';

/* 37 */ export function RotatingPrompt() {
  const hints = ['Search for a page', 'Ask a question', 'Find a component', 'Jump to a section'];
  const k = useCycle(hints.length, 2200);
  const [v, setV] = useState('');
  return (
    <label className={c.rotate}>
      <input value={v} aria-label="Prompt with rotating hints" onChange={(e) => setV(e.target.value)} />
      {!v && <span key={k}>{hints[k]}</span>}
    </label>
  );
}
