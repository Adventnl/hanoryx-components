import { useState } from 'react';
import c from "../heroes.module.css";
import { Sc, cx } from "../shared";

/* 41 */ export function ThemeOpening() {
  const [d, setD] = useState(true);
  return <Sc label="Light and dark hero" className={cx(c.cen, c.themed, !d && c.lightH)}><h3>Your theme</h3><button type="button" className={c.ghost} aria-pressed={d} onClick={() => setD((v) => !v)}>{d ? 'Dark' : 'Light'}</button></Sc>;
}
