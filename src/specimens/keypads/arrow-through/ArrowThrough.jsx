import c from "../keypads.module.css";

/* 29 */ export function ArrowThrough() {
  return <button type="button" className={c.through}><span>Continue</span><i><svg viewBox="0 0 24 12" aria-hidden="true"><path d="M1 6h20M16 1l5 5-5 5" /></svg><svg viewBox="0 0 24 12" aria-hidden="true"><path d="M1 6h20M16 1l5 5-5 5" /></svg></i></button>;
}
