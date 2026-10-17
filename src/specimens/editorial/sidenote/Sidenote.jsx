import { useState } from 'react';
import c from "../editorial.module.css";

export function Sidenote() {
  const [on, setOn] = useState(true);
  return (
    <div className={c.fig}>
      <div className={c.sidewrap} data-on={on}>
        <p className={c.para}>The belt keeps moving<button type="button" className={c.sup} aria-pressed={on} aria-label="Sidenote 1" onClick={() => setOn((o) => !o)}>1</button> all night, though nobody asked it to.</p>
        <aside className={c.side}><sup>1</sup> Nor did anyone find the switch.</aside>
      </div>
    </div>
  );
}
