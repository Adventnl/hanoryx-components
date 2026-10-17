import c from "../glow.module.css";

export function GlowBar() {
  return (
    <div className={c.fig} role="img" aria-label="A progress bar with a glowing leading edge">
      <div className={c.gbar}><i /></div>
    </div>
  );
}
