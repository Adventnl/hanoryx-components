import { useToggle } from "../../../stage/hooks";
import c from "../popovers.module.css";
import { Trigger, useTip } from "../shared";

/* 39 */ export function ThemedTip() {
  const [dark, flip] = useToggle(true);
  const [open, bind] = useTip();
  return (
    <div className={c.col}>
      <span className={c.wrap}><Trigger aria-describedby="tp-39" {...bind}>Tip</Trigger><span id="tp-39" role="tooltip" className={`${c.tip} ${c.top} ${dark ? c.darkTip : ''}`} data-open={open}>{dark ? 'Dark tip' : 'Light tip'}</span></span>
      <button type="button" className={c.next} aria-pressed={dark} onClick={flip}>{dark ? 'Make light' : 'Make dark'}</button>
    </div>
  );
}
