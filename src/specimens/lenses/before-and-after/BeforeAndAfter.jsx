import { useDrag } from "../../../stage/hooks";
import c from "../lenses.module.css";
import { Scene } from "../shared";

/* 4 */ export function BeforeAndAfter() {
  const [v, bind] = useDrag({ init: 0.5 });
  return (
    <div className={`${c.area} ${c.slider}`} style={{ '--v': v }}>
      <Scene className={c.fill} /><Scene className={`${c.fill} ${c.mono} ${c.cut}`} />
      <i {...bind} aria-label="Before and after" aria-valuetext={`${Math.round(v * 100)} percent after`} style={bind.style} />
    </div>
  );
}
