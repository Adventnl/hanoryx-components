import c from "../skeletons.module.css";
import { Shell, sk } from "../shared";

/* 12 */ export function FormFields() {
  return <Shell className={c.form} label="Loading form">{[0, 1].map((k) => <div key={k}>{sk('3rem', '0.5rem')}{sk('100%', '2rem', '6px')}</div>)}{sk('40%', '2rem', '6px')}</Shell>;
}
