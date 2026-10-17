import { useToggle } from "../../../stage/hooks";
import c from "../switchboard.module.css";

/* 19 */ export function LampCheck() {
  const [on, flip] = useToggle();
  return (
    <label className={c.checkLamp}>
      <input type="checkbox" checked={on} onChange={flip} aria-label="Lamp checkbox" />
      <svg viewBox="0 0 40 56" aria-hidden="true"><path d="M20 4a15 15 0 0 0-8 27c2 2 3 4 3 7h10c0-3 1-5 3-7A15 15 0 0 0 20 4Z" /><path d="M15 44h10M16 49h8M16 28l4-8 4 8" /></svg>
    </label>
  );
}
