import c from "../skeletons.module.css";
import { Shell, sk } from "../shared";

/* 40 */ export function PlanPlaceholder() {
  return <Shell className={c.price} label="Loading plans">{[0, 1].map((k) => <div key={k}>{sk('50%', '0.6rem')}{sk('70%', '1.4rem')}{sk('100%', '0.5rem')}{sk('100%', '0.5rem')}{sk('100%', '1.6rem', '99px')}</div>)}</Shell>;
}
