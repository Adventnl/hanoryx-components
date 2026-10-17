import c from "../skeletons.module.css";
import { Shell, sk } from "../shared";

/* 2 */ export function CardPlaceholder() {
  return (
    <Shell className={c.card}>{sk('100%', '5rem', '8px')}<div>{sk('70%', '0.8rem')}{sk('100%')}{sk('84%')}</div></Shell>
  );
}
