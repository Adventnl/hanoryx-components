import c from "../tilt.module.css";

export function Turntable() {
  return (
    <div className={c.fig} role="img" aria-label="A card standing on a turntable">
      <div className={`${c.stage} ${c.orbitStage}`}>
        <div className={c.turn}><i className={c.tFront}><b>Front</b></i><i className={c.tBack}><b>Back</b></i></div>
        <u className={c.plate} />
      </div>
    </div>
  );
}
