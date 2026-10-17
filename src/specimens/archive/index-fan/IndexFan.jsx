import c from "../archive.module.css";
import { CARDS } from "../shared";

/* 10 */ export function IndexFan() {
  return (
    <button type="button" className={c.fan} aria-label="Cards that fan out on hover or focus">
      {Array.from({ length: 5 }, (_, k) => <i key={k} style={{ '--k': k - 2 }}><b>{CARDS[k][0]}</b></i>)}
    </button>
  );
}
