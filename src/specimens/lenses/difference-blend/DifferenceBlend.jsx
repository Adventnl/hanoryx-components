import { useToggle } from "../../../stage/hooks";
import c from "../lenses.module.css";
import { Scene } from "../shared";

/* 20 */ export function DifferenceBlend() {
  const [on, flip] = useToggle(true);
  return (
    <div className={c.diffBox}>
      <div className={`${c.area} ${c.diffA}`} data-on={on}><Scene className={c.fill} /><Scene className={`${c.fill} ${c.shift}`} /></div>
      <button type="button" aria-pressed={on} onClick={flip}>{on ? 'Difference on' : 'Difference off'}</button>
    </div>
  );
}
