import { useToggle } from "../../../stage/hooks";
import c from "../docks.module.css";

/* 35 */ export function StickyBuyBar() {
  const [added, flip] = useToggle();
  return (
    <div className={c.buy}>
      <div><b>€48</b><span>Free returns</span></div>
      <button type="button" aria-pressed={added} onClick={flip}>{added ? 'In bag ✓' : 'Add to bag'}</button>
    </div>
  );
}
