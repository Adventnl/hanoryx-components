import { useState } from 'react';
import c from "../feeds.module.css";
import { Fd } from "../shared";

/* 20 */ export function ReadTicks() {
  const [s, setS] = useState(0);
  const L = ['Sending', 'Sent', 'Delivered', 'Read'];
  return (
    <Fd label="Read receipts" className={c.chat}>
      <div><p data-me="true">See you at six <button type="button" className={c.tickBtn} data-s={s} aria-label={`${L[s]}. Click to advance`} onClick={() => setS((v) => (v + 1) % 4)}>{['◔', '✓', '✓✓', '✓✓'][s]}</button></p></div>
      <small className={c.m}>{L[s]}</small>
    </Fd>
  );
}
