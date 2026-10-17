import { Ico } from "../../../stage/components/icons/icons";
import c from "../feeds.module.css";
import { Fd } from "../shared";

/* 13 */ export function ActivityLog() {
  const A = [['plus', 'Ana created Board 4'], ['pen', 'Kofi edited Pricing'], ['check', 'Mara closed #482'], ['trash', 'Ravi removed Draft']];
  return <Fd label="Activity log" className={c.list}>{A.map(([i, t]) => <div key={t} className={c.row}><span className={c.ic}><Ico n={i} /></span><span>{t}</span></div>)}</Fd>;
}
