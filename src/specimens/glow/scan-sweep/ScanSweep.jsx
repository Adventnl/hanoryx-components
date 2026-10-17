import c from "../glow.module.css";

export function ScanSweep() {
  return (
    <div className={c.fig} role="img" aria-label="A scan line passing down a card and revealing its text">
      <div className={`${c.card} ${c.scanCard}`}><p>Read as the line passes.</p><i /></div>
    </div>
  );
}
