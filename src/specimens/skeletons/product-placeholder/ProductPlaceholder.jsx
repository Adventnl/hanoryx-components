import c from "../skeletons.module.css";
import { Shell, sk } from "../shared";

/* 37 */ export function ProductPlaceholder() {
  return <Shell className={c.product}>{sk('100%', '5rem', '6px')}{sk('70%', '0.7rem')}{sk('36%', '0.9rem')}</Shell>;
}
