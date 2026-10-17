import c from "../feeds.module.css";
import { Fd } from "../shared";

/* 22 */ export function DayDividers() {
  return <Fd label="Day dividers" className={c.chat}><div><span className={c.day}>Yesterday</span><p>Notes sent</p><p data-me="true">Got them</p><span className={c.day}>Today</span><p>Morning!</p></div></Fd>;
}
