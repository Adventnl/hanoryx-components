import { useToggle } from "../../../stage/hooks";
import c from "../keypads.module.css";

/* 38 */ export function ShiftLegends() {
  const [shift, flip] = useToggle();
  const pairs = [['1', '!'], ['2', '@'], ['3', '#'], ['4', '$'], ['5', '%']];
  return (
    <div className={c.shift} data-shift={shift}>
      <div>{pairs.map(([a, b]) => <button type="button" key={a} aria-label={shift ? b : a}><small>{b}</small><span>{a}</span></button>)}</div>
      <button type="button" className={c.shiftKey} aria-pressed={shift} onClick={flip}>SHIFT</button>
    </div>
  );
}
