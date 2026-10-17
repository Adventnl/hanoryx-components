import { useToggle } from "../../../stage/hooks";
import c from "../studio.module.css";

/* 40 */ export function RecordArm() {
  const [on, flip] = useToggle(true);
  return <button type="button" className={c.rec} aria-pressed={on} onClick={flip} data-on={on}><i /><span>{on ? 'REC' : 'ARM'}</span></button>;
}
