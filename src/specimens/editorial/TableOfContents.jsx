import { useState } from 'react';
import c from './editorial.module.css';

const TOC = [['The long way round', 3], ['Notes on a quiet machine', 11], ['Platforms', 24], ['Colophon', 39]];

export function TableOfContents() {
  const [k, setK] = useState(1);
  return (
    <div className={c.fig}>
      <ol className={c.toc}>
        {TOC.map(([t, p], i) => (
          <li key={t}><button type="button" aria-current={i === k} onClick={() => setK(i)}><span>{t}</span><i /><b>{p}</b></button></li>
        ))}
      </ol>
    </div>
  );
}
