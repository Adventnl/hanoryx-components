import c from './waypoints.module.css';

/* 19 */ export function ScrollCue() {
  return (
    <div className={c.cue} role="img" aria-label="Scroll cue">
      <span><i /></span>
      <small>Scroll</small>
    </div>
  );
}
