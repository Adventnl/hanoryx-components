import { useToggle } from "../../../stage/hooks";
import { Ico } from "../../../stage/components/icons/icons";
import c from "../docks.module.css";

/* 33 */ export function ChatDock() {
  const [open, flip] = useToggle();
  return (
    <div className={c.chat} data-open={open}>
      {open && <div role="dialog" aria-label="Chat dock"><b>Support</b><p>Hello. Ask anything.</p><input aria-label="Message" placeholder="Type…" /></div>}
      <button type="button" aria-expanded={open} aria-label="Chat" onClick={flip}><Ico n={open ? 'close' : 'chat'} /></button>
    </div>
  );
}
