import c from "../loaders.module.css";
import { status } from "../shared";

/* 15 */ export function HeartbeatLine() {
  return <svg className={c.beat} viewBox="0 0 120 40" {...status('Loading')}><path d="M0 22h34l6-14 8 28 7-20 5 6h60" /></svg>;
}
