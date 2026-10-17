import c from "../skeletons.module.css";
import { Shell, sk } from "../shared";

/* 41 */ export function SidebarPlaceholder() {
  return <Shell className={c.side} label="Loading navigation">{[80, 60, 72, 50, 66].map((w, k) => <div key={k}>{sk('1rem', '1rem', '4px')}{sk(`${w}%`)}</div>)}</Shell>;
}
