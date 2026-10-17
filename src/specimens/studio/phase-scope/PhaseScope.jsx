import c from "../studio.module.css";

/* 17 */ export function PhaseScope() {
  return <div className={c.phase} role="img" aria-label="Phase scope"><svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="44" className={c.grid} /><path d="M6 50h88M50 6v88" className={c.grid} /><path className={c.lis} d="M50 8C80 8 92 30 92 50S80 92 50 92 8 70 8 50 20 8 50 8Z" /></svg></div>;
}
