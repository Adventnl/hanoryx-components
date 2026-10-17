import c from "../stamps.module.css";

/* 30 */ export function CornerFlag() {
  return (
    <button type="button" className={c.flagCard} aria-label="Card with a corner ribbon">
      <i /><i /><i />
      <span>NEW</span>
    </button>
  );
}
