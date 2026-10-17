import c from "../keypads.module.css";
import { useHold } from "../shared";

/* 9 */ export function TypewriterKey() {
  const [held, hold] = useHold();
  return <button type="button" className={c.type} data-held={held} aria-label="Typewriter key" {...hold}><i>R</i></button>;
}
