import { useState } from 'react';
import c from "../handset.module.css";
import { Phone, cx } from "../shared";

/* 32 */ export function ThemeChoice() {
  const [t, setT] = useState(0);
  return (
    <Phone label="Theme choice" className={cx(c.themed, t === 1 && c.light)}>
      <b className={c.h}>Theme</b>
      <div className={c.radios} role="radiogroup" aria-label="Theme">{['Dark', 'Light', 'Auto'].map((x, k) => <button key={x} type="button" role="radio" aria-checked={t === k} onClick={() => setT(k)}>{x}</button>)}</div>
      <u className={c.line} /><u className={c.line} style={{ width: '60%' }} />
    </Phone>
  );
}
