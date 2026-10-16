import { useState } from 'react';
import { Ico } from '../../stage/icons';
import c from './popovers.module.css';

/* 35 */ export function RowActions() {
  const [k, setK] = useState(-1);
  return (
    <ul className={c.rows} onPointerLeave={() => setK(-1)}>
      {['Brief.docx', 'Moodboard.fig', 'Notes.md'].map((t, i) => <li key={t} onPointerEnter={() => setK(i)} onFocus={() => setK(i)}><span>{t}</span>{k === i && <div role="toolbar" aria-label={`${t} actions`}><button type="button" aria-label="Open"><Ico n="eye" /></button><button type="button" aria-label="Copy"><Ico n="copy" /></button><button type="button" aria-label="Delete"><Ico n="trash" /></button></div>}</li>)}
    </ul>
  );
}
