import { useToggle } from "../../../stage/hooks";
import { Ico } from "../../../stage/components/icons/icons";
import c from "../sheets.module.css";
import { Stage } from "../shared";

/* 25 */ export function CornerChat() {
  const [on, set] = useToggle();
  return <Stage label="Corner sheet"><div className={c.corner} data-on={on}><button type="button" aria-expanded={on} aria-label="Chat" onClick={set}><Ico n={on ? 'close' : 'chat'} /></button><div inert={!on || undefined} role="dialog" aria-label="Chat"><b>Chat</b><p>Hi there.</p></div></div></Stage>;
}
