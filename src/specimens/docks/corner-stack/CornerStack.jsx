import { useToggle } from "../../../stage/hooks";
import { Ico } from "../../../stage/components/icons/icons";
import c from "../docks.module.css";

/* 40 */ export function CornerStack() {
  const [help, flip] = useToggle();
  return (
    <div className={c.corner}>
      {help && <p role="note">Press ? for shortcuts</p>}
      <button type="button" aria-label="Back to top"><Ico n="up" /></button>
      <button type="button" aria-pressed={help} aria-label="Help" onClick={flip}>?</button>
    </div>
  );
}
