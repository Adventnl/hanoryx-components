import c from "../tilt.module.css";

export function IdleSway() {
  return (
    <div className={c.fig} role="img" aria-label="A card swaying gently in space">
      <div className={c.stage}>
        <div className={`${c.card} ${c.sway}`}><b>Sway</b><span>idle motion</span></div>
      </div>
    </div>
  );
}
