import { useState } from 'react';
import c from "../stamps.module.css";

const WASHI = ['dots', 'stripe', 'check', 'wave'];

/* 12 */ export function WashiStrip() {
  const [i, setI] = useState(0);
  return <button type="button" className={c.washi} data-p={WASHI[i]} onClick={() => setI((v) => (v + 1) % 4)} aria-label={`Washi tape pattern ${WASHI[i]}. Click to change`} />;
}
