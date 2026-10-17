import { useState } from 'react';
import { Ico } from "../../../stage/components/icons/icons";
import c from "../docks.module.css";

/* 29 */ export function HideOnScroll() {
  const [hidden, setHidden] = useState(false);
  return (
    <div className={c.hide}>
      <div className={c.hideBar} data-hidden={hidden} role="toolbar" aria-label="Bar that hides"><Ico n="home" /><Ico n="search" /><Ico n="user" /></div>
      <button type="button" aria-pressed={hidden} onClick={() => setHidden(!hidden)}>{hidden ? 'Scroll up' : 'Scroll down'}</button>
    </div>
  );
}
