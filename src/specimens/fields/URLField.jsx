import { useState } from 'react';
import c from './fields.module.css';

/* 28 */ export function URLField() {
  const [p, setP] = useState('https');
  const [h, setH] = useState('example.test/page');
  return (
    <div className={c.url}>
      <select value={p} aria-label="Protocol" onChange={(e) => setP(e.target.value)}><option>https</option><option>http</option></select>
      <input value={h} aria-label="Address" onChange={(e) => setH(e.target.value)} />
      <output>{p}://{h}</output>
    </div>
  );
}
