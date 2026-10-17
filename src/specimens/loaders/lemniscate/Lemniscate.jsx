import c from "../loaders.module.css";
import { status } from "../shared";

/* 29 */ export function Lemniscate() {
  return <svg className={c.inf} viewBox="0 0 80 40" {...status('Loading')}><path d="M40 20C52 4 72 4 72 20S52 36 40 20 28 4 8 4 8 36 40 20Z" pathLength="1" /></svg>;
}
