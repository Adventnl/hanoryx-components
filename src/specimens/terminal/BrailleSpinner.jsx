import { useState } from 'react';
import { useCycle } from '../../stage/hooks';
import c from './terminal.module.css';
import { BRAILLE, cx } from './shared';

/* 10 */ export function BrailleSpinner() {
  const i = useCycle(10, 90);
  const [done, setDone] = useState(false);
  return (
    <button type="button" className={cx(c.win, c.btn)} onClick={() => setDone((d) => !d)} aria-pressed={done}>
      <span className={c.ln}>{done ? <b className={c.ok}>✔</b> : <b className={c.cyan}>{BRAILLE[i]}</b>} {done ? 'installed 142 packages' : 'installing packages…'}</span>
    </button>
  );
}
