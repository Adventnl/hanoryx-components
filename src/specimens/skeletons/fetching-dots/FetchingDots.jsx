import c from "../skeletons.module.css";
import { Shell } from "../shared";

/* 16 */ export function FetchingDots() {
  return <Shell className={c.ellip}><span>Fetching</span><b>.</b><b>.</b><b>.</b></Shell>;
}
