import { useState } from 'react';
import c from './fields.module.css';

/* 7 */ export function TagInput() {
  const [tags, setTags] = useState(['design', 'motion']);
  const [t, setT] = useState('');
  return (
    <div className={c.tags}>
      {tags.map((x) => <span key={x}>{x}<button type="button" aria-label={`Remove ${x}`} onClick={() => setTags(tags.filter((y) => y !== x))}>×</button></span>)}
      <input value={t} placeholder="add…" aria-label="New tag" onChange={(e) => setT(e.target.value)} onKeyDown={(e) => {
        if (e.key === 'Enter' && t.trim()) { setTags([...tags, t.trim()]); setT(''); }
        if (e.key === 'Backspace' && !t) setTags(tags.slice(0, -1));
      }} />
    </div>
  );
}
