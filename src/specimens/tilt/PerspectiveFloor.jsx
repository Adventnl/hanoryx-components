import c from './tilt.module.css';

export function PerspectiveFloor() {
  return (
    <div className={c.fig} role="img" aria-label="A grid floor rushing toward the viewer">
      <div className={c.floorBox}>
        <i className={c.grid3d} />
        <b className={c.horizon}>Floor</b>
      </div>
    </div>
  );
}
