import c from "../stamps.module.css";

/* 22 */ export function FragileBand() {
  return <div className={c.fragile} role="img" aria-label="Fragile tape sliding by"><span>{'FRAGILE ⚠ HANDLE WITH CARE ⚠ '.repeat(4)}</span></div>;
}
