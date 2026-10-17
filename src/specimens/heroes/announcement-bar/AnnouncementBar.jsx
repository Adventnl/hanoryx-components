import { useState } from 'react';
import c from "../heroes.module.css";
import { Sc } from "../shared";

/* 23 */ export function AnnouncementBar() {
  const [on, setOn] = useState(true);
  return <Sc label="Announcement bar" className={c.cen}>{on && <span className={c.ann}>Version 2 is out<button type="button" aria-label="Dismiss" onClick={() => setOn(false)}>×</button></span>}<h3>Meet version two</h3>{!on && <button type="button" className={c.ghost} onClick={() => setOn(true)}>Show bar</button>}</Sc>;
}
