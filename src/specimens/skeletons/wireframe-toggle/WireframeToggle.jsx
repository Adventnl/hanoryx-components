import { useToggle } from "../../../stage/hooks";
import c from "../skeletons.module.css";

/* 42 */ export function WireframeToggle() {
  const [on, flip] = useToggle();
  return (
    <div className={c.wire}>
      <div className={c.wireBox} data-wire={on}>
        <i /><b /><u /><u /><s />
      </div>
      <button type="button" aria-pressed={on} onClick={flip}>{on ? 'Show skeleton' : 'Show wireframe'}</button>
    </div>
  );
}
