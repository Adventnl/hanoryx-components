import c from "../keypads.module.css";
import { useHold } from "../shared";

/* 10 */ export function SpaceBar() {
  const [held, hold] = useHold();
  return <button type="button" className={c.space} data-held={held} aria-label="Space bar" {...hold}>SPACE</button>;
}
