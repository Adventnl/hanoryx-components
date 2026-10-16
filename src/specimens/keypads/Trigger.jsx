import c from './keypads.module.css';
import { useHold } from './shared';

/* 6 */ export function Trigger() {
  const [held, hold] = useHold();
  return <button type="button" className={c.trigger} data-held={held} aria-label="Trigger" {...hold}><i /><b /></button>;
}
