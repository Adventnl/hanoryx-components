import { useState } from 'react';
import c from './popovers.module.css';
import { Trigger, useTip } from './shared';

/* 2 */ export function SidePicker() {
  const [side, setSide] = useState('top');
  const [open, bind] = useTip();
  return (
    <div className={c.col}>
      <span className={c.wrap}><Trigger aria-describedby="tp-2" {...bind}>Anchor</Trigger><span id="tp-2" role="tooltip" className={`${c.tip} ${c[side]}`} data-open={open}>On the {side}</span></span>
      <div role="radiogroup" aria-label="Side" className={c.seg}>{['top', 'right', 'bottom', 'left'].map((s) => <button key={s} type="button" role="radio" aria-checked={s === side} onClick={() => setSide(s)}>{s}</button>)}</div>
    </div>
  );
}
