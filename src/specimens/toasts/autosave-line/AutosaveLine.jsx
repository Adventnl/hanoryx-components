import { useTick } from "../../../stage/hooks";
import c from "../toasts.module.css";

/* 35 */ export function AutosaveLine() {
  const t = useTick(2400);
  const phase = t % 3;
  return <div role="status" className={c.autosave} data-p={phase}><i aria-hidden="true" />{['Saved', 'Saving…', 'Saved'][phase]}</div>;
}
