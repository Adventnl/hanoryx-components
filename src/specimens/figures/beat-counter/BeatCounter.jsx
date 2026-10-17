import { useTick } from "../../../stage/hooks";
import c from "../figures.module.css";

/* 39 */ export function BeatCounter() {
  const n = useTick(830);
  return (
    <div className={c.fig} role="img" aria-label="A pulse at seventy-two beats a minute">
      <span className={c.beat}><i /><i /><b>72</b></span>
      <p className={c.sub}>beat <b>{n}</b></p>
    </div>
  );
}
