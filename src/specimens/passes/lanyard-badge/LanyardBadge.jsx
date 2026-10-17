import { useState } from 'react';
import { useDrag } from "../../../stage/hooks";
import c from "../passes.module.css";
import { BC, Barcode } from "../shared";

/* 5 */
export function LanyardBadge() {
  const [v, bind, set] = useDrag({ mode: 'x', init: 0.5 });
  const [held, setHeld] = useState(false);
  const release = () => { setHeld(false); set(0.5); };
  return (
    <div
      className={c.lb}
      {...bind}
      data-held={held}
      aria-label="Lanyard badge: drag sideways to swing it, let go to watch it settle"
      style={{ ...bind.style, '--v': v.toFixed(3) }}
      onPointerDown={(e) => { setHeld(true); bind.onPointerDown(e); }}
      onPointerUp={release}
      onPointerCancel={release}
    >
      <span className={c.lbSwing}>
        <span className={c.lbStrap} />
        <span className={c.lbClip} />
        <span className={c.lbCard}>
          <i className={c.lbSlot} />
          <span className={c.lbFace}>AQ</span>
          <b>A. Quill</b>
          <span className={c.lbRole}>Staff</span>
          <Barcode code={BC.b} className={c.lbCode} />
        </span>
      </span>
    </div>
  );
}
