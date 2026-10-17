import c from "../skeletons.module.css";
import { Shell } from "../shared";

/* 34 */ export function GaugePlaceholder() {
  return <Shell className={c.ringSk} label="Loading gauge"><i className={c.sk} /><b /></Shell>;
}
