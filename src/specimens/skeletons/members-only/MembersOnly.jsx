import { Ico } from "../../../stage/components/icons/icons";
import c from "../skeletons.module.css";

/* 26 */ export function MembersOnly() {
  return <div className={c.empty}><Ico n="lock" /><b>Members only</b><p>Ask an owner for access.</p><button type="button">Request access</button></div>;
}
