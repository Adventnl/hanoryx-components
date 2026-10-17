import c from "../progress.module.css";

/* 19 */ export function StackedBar() {
  return <div className={c.stacked} role="img" aria-label="Stacked bar: 45 percent used, 30 percent shared, 15 percent trash, 10 percent free"><i style={{ '--w': 45, '--col': '#ff3333' }} /><i style={{ '--w': 30, '--col': '#ffb347' }} /><i style={{ '--w': 15, '--col': '#7aa2ff' }} /><i style={{ '--w': 10, '--col': '#2a2b31' }} /></div>;
}
