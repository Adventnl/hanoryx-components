import { useState } from 'react';
import c from './patterns.module.css';
import { cx } from './shared';

/* 41 */ export function CheckerFlip() {
  const [on, setOn] = useState(false);
  return <button type="button" className={cx(c.sw, c.flipChk)} data-on={on} aria-pressed={on} onClick={() => setOn((v) => !v)} aria-label="Checker board. Click to swap the squares" />;
}
