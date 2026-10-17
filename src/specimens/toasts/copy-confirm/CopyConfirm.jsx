import { useEffect, useState } from 'react';
import { Ico } from "../../../stage/components/icons/icons";
import c from "../toasts.module.css";

/* 32 */ export function CopyConfirm() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    if (!on) return undefined;
    const id = setTimeout(() => setOn(false), 1500);
    return () => clearTimeout(id);
  }, [on]);
  return (
    <div className={c.copy}>
      <code>npm i hanoryx</code>
      <button type="button" onClick={() => setOn(true)} aria-label="Copy command">{on ? <Ico n="check" /> : <Ico n="copy" />}</button>
      <span role="status" data-on={on}>Copied</span>
    </div>
  );
}
