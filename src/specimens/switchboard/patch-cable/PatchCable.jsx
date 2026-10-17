import { useToggle } from "../../../stage/hooks";
import c from "../switchboard.module.css";

/* 38 */ export function PatchCable() {
  const [on, flip] = useToggle(true);
  return (
    <button type="button" className={c.patch} aria-pressed={on} aria-label="Patch cable" onClick={flip}>
      <svg viewBox="0 0 120 56" aria-hidden="true"><circle cx="14" cy="16" r="9" /><circle cx="106" cy="16" r="9" /><path d={on ? 'M14 16C30 56 90 56 106 16' : 'M14 16C20 40 30 44 38 40'} /><circle cx={on ? 106 : 40} cy={on ? 16 : 40} r="4" /></svg>
    </button>
  );
}
