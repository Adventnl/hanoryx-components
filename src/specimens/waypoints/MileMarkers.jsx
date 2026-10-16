import { useDrag } from '../../stage/hooks';
import c from './waypoints.module.css';

/* 13 */ export function MileMarkers() {
  const [v, bind] = useDrag({ init: 0.4, steps: 20 });
  return (
    <div className={c.miles} {...bind} aria-label="Distance along the trail" aria-valuetext={`${(v * 10).toFixed(1)} kilometres`} style={{ ...bind.style, '--v': v }}>
      {Array.from({ length: 21 }, (_, k) => <u key={k} data-big={k % 5 === 0} aria-hidden="true" />)}
      <b aria-hidden="true"><output>{(v * 10).toFixed(1)} km</output></b>
    </div>
  );
}
