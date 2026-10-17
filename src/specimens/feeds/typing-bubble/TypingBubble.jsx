import c from "../feeds.module.css";
import { Fd } from "../shared";

/* 17 */ export function TypingBubble() {
  return <Fd label="Typing" className={c.chat} role="img"><div><p>Are you free later?</p><p data-me="true" className={c.typing}><i /><i /><i /></p></div><small className={c.m}>Ana is typing…</small></Fd>;
}
