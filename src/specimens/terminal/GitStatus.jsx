import { Fragment, useState } from 'react';
import c from './terminal.module.css';
import { cx } from './shared';

/* 17 */ export function GitStatus() {
  const [files, setFiles] = useState([['app.jsx', false], ['nav.css', false], ['notes.md', true], ['logo.svg', false]]);
  const flip = (i) => setFiles((a) => a.map((f, k) => (k === i ? [f[0], !f[1]] : f)));
  return (
    <div className={c.win}>
      {[true, false].map((st) => (
        <Fragment key={String(st)}>
          <p className={cx(c.ln, c.dim)}>{st ? 'to be committed:' : 'not staged:'}</p>
          {files.map((f, i) => f[1] === st && <button key={f[0]} type="button" className={cx(c.ln, c.file)} data-st={st} onClick={() => flip(i)} aria-label={`${f[0]}, ${st ? 'staged' : 'not staged'}. Click to ${st ? 'unstage' : 'stage'}`}>{st ? 'modified:' : 'M'} {f[0]}</button>)}
        </Fragment>
      ))}
    </div>
  );
}
