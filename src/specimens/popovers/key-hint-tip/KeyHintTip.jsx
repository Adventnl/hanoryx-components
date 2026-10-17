import c from "../popovers.module.css";
import { Trigger, useTip } from "../shared";

/* 21 */ export function KeyHintTip() {
  const [open, bind] = useTip();
  return <span className={c.wrap}><Trigger aria-describedby="tp-21" aria-keyshortcuts="Meta+S" {...bind}>Save</Trigger><span id="tp-21" role="tooltip" className={`${c.tip} ${c.top}`} data-open={open}>Save <kbd>⌘</kbd><kbd>S</kbd></span></span>;
}
