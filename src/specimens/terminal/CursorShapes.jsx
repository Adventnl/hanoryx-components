import { useState } from 'react';
import c from './terminal.module.css';
import { cx } from './shared';

const SHAPES = ['block', 'underline', 'bar'];

/* 15 */ export function CursorShapes() {
  const [s, setS] = useState(0);
  return (
    <button type="button" className={cx(c.win, c.btn)} onClick={() => setS((v) => (v + 1) % 3)} aria-label={`Cursor shape: ${SHAPES[s]}. Click to change`}>
      <span className={c.ln}><b className={c.prompt}>$</b> echo hi<i className={cx(c.caret, c.shape)} data-shape={SHAPES[s]} /></span>
      <small className={c.dim}>{SHAPES[s]}</small>
    </button>
  );
}
