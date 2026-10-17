import { useState } from 'react';
import { useDrag } from "../../../stage/hooks";
import { Ico } from "../../../stage/components/icons/icons";
import c from "../toasts.module.css";

/* 9 */ export function SwipeAway() {
  const [v, bind, set] = useDrag({ init: 0.5 });
  const [gone, setGone] = useState(false);
  const off = (v - 0.5) * 2;
  return gone ? <button type="button" className={c.fire} onClick={() => { setGone(false); set(0.5); }}>Bring it back</button> : (
    <div className={c.swipe} {...bind} aria-label="Swipe this notice away, or press an arrow key" aria-valuetext={Math.abs(off) > 0.7 ? 'dismissing' : 'in place'} style={{ ...bind.style, '--x': off }} onPointerUp={() => { if (Math.abs(off) > 0.7) setGone(true); else set(0.5); }} onKeyUp={() => { if (Math.abs(off) > 0.7) setGone(true); }}>
      <Ico n="mail" /><span>Swipe me away</span>
    </div>
  );
}
