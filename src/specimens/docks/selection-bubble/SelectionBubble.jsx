import { useToggle } from "../../../stage/hooks";
import { Ico } from "../../../stage/components/icons/icons";
import c from "../docks.module.css";

/* 11 */ export function SelectionBubble() {
  const [on, flip] = useToggle(true);
  return (
    <div className={c.bubble}>
      {on && <div role="toolbar" aria-label="Selection bubble"><button type="button" aria-label="Bold"><Ico n="bold" /></button><button type="button" aria-label="Link"><Ico n="link" /></button><button type="button" aria-label="Comment"><Ico n="chat" /></button></div>}
      <p>A dock may <button type="button" aria-pressed={on} onClick={flip}>appear over a selection</button> and leave with it.</p>
    </div>
  );
}
