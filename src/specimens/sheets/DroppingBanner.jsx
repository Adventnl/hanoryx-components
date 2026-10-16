import { useState } from 'react';
import c from './sheets.module.css';
import { Open, Stage } from './shared';

/* 10 */ export function DroppingBanner() {
  const [on, set] = useState(false);
  return <Stage label="Dropping banner" onEscape={() => set(false)}><Open on={on} set={set} /><div className={c.drop} data-on={on} role="note"><b>Spring call</b><span>Send work by Friday.</span></div></Stage>;
}
