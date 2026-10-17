import { useToggle } from "../../../stage/hooks";
import c from "../keypads.module.css";

/* 31 */ export function HeartBurst() {
  const [on, flip] = useToggle();
  return (
    <button type="button" className={c.heart} aria-pressed={on} aria-label="Like" onClick={flip}>
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21C5 15 3 11 3 8a4.5 4.5 0 0 1 9-1.5A4.5 4.5 0 0 1 21 8c0 3-2 7-9 13Z" /></svg>
      {on && Array.from({ length: 6 }, (_, i) => <s key={i} style={{ '--a': `${i * 60}deg` }} />)}
    </button>
  );
}
