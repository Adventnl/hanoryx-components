import c from "../glow.module.css";

export function PulseRadar() {
  return (
    <div className={c.fig} role="img" aria-label="Pulses spreading from a point like a radar">
      <div className={c.radar}><i /><i /><i /><b /></div>
    </div>
  );
}
