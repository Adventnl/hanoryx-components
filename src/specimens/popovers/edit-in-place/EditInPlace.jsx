import { useState } from 'react';
import { Ico } from "../../../stage/components/icons/icons";
import c from "../popovers.module.css";
import { useOpen } from "../shared";

/* 17 */ export function EditInPlace() {
  const [editing, setEditing, ref] = useOpen();
  const [v, setV] = useState('Q3 plan');
  return (
    <div ref={ref} className={c.wrap}>
      {editing ? <form className={c.inlineForm} onSubmit={(e) => { e.preventDefault(); setEditing(false); }}><input aria-label="Title" value={v} onChange={(e) => setV(e.target.value)} autoFocus /><button type="submit" aria-label="Save"><Ico n="check" /></button></form> : <button type="button" className={c.editable} onClick={() => setEditing(true)}>{v}<Ico n="pen" /></button>}
    </div>
  );
}
