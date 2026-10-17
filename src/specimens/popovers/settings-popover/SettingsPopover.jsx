import { useState } from 'react';
import { useToggle } from "../../../stage/hooks";
import { Ico } from "../../../stage/components/icons/icons";
import c from "../popovers.module.css";
import { Trigger, useOpen } from "../shared";

/* 37 */ export function SettingsPopover() {
  const [open, setOpen, ref] = useOpen();
  const [on, flip] = useToggle(true);
  const [v, setV] = useState(60);
  return (
    <div ref={ref} className={c.wrap}>
      <Trigger aria-haspopup="dialog" aria-expanded={open} onClick={() => setOpen(!open)}><Ico n="gear" />View</Trigger>
      {open && <div className={`${c.pop} ${c.bottom} ${c.settings}`} role="dialog" aria-label="View settings"><label><span>Grid</span><input type="checkbox" checked={on} onChange={flip} /></label><label><span>Zoom {v}%</span><input type="range" min="20" max="100" value={v} onChange={(e) => setV(Number(e.target.value))} /></label></div>}
    </div>
  );
}
