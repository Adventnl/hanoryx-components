import c from "../feeds.module.css";
import { MSGS } from "../shared";

export function Visual() {
  return (
    <div className={c.vis} aria-hidden="true">
      <div className={c.visFeed}>
        <div className={c.visTrack}>
          {MSGS.map(([w, t], k) => <p key={k} data-me={w === 'You'} style={{ '--k': k }}><small>{w}</small>{t}</p>)}
        </div>
      </div>
      <small>8 MESSAGES · 1 STREAM</small>
    </div>
  );
}
