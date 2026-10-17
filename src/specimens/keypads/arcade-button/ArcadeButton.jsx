import c from "../keypads.module.css";
import { useHold } from "../shared";

/* 4 */ export function ArcadeButton() {
  const [held, hold] = useHold();
  return <button type="button" className={c.arcade} data-held={held} aria-label="Arcade button" {...hold}><i /></button>;
}
