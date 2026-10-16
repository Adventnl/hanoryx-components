import c from './stamps.module.css';

/* 32 */ export function PinnedLabel() {
  return (
    <button type="button" className={c.pinned} aria-label="A label held by a pin">
      <span className={c.pin} /><span className={c.note}><b>call back</b><small>before noon</small></span>
    </button>
  );
}
