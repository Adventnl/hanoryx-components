import { useState } from 'react';
import c from "../beams.module.css";

/* 30 */ export function LensStreak() {
  const [n, setN] = useState(0);
  return <button type="button" className={c.sw} onClick={() => setN((v) => v + 1)} aria-label="Lens streak. Click to flash it"><i key={n} className={c.streak} data-go={n > 0} /><b className={c.flare} /></button>;
}
