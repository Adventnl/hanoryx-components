import { useState } from 'react';
import { Ico } from "../../../stage/components/icons/icons";
import c from "../signals.module.css";

/* 24 */ export function SyncState() {
  const [s, setS] = useState(0);
  const st = ['Synced', 'Syncing', 'Offline'];
  return <button type="button" className={c.sync} data-s={s} aria-label={`${st[s]}. Press to change`} onClick={() => setS((s + 1) % 3)}><Ico n="download" /><span>{st[s]}</span></button>;
}
