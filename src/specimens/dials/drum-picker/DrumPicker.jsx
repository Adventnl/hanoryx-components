import { useDrag } from "../../../stage/hooks";
import c from "../dials.module.css";

/* 31 */ export function DrumPicker() {
  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  const [v, bind] = useDrag({ mode: 'y', steps: 6, init: 0.5 });
  return (
    <div className={c.drum} {...bind} aria-label="Day picker" style={{ ...bind.style, '--n': Math.round((1 - v) * 6) }}>
      <ol>{days.map((d) => <li key={d}>{d}</li>)}</ol><i />
    </div>
  );
}
