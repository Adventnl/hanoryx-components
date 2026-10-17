import { useState } from 'react';
import c from "../fields.module.css";

/* 27 */ export function SlugMaker() {
  const [t, setT] = useState('A title with Words!');
  const slug = t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  return (
    <div className={c.slug}>
      <input value={t} aria-label="Title" onChange={(e) => setT(e.target.value)} />
      <output>/{slug || '…'}</output>
    </div>
  );
}
