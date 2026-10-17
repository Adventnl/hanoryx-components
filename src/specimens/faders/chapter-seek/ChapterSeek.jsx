import { useDrag } from "../../../stage/hooks";
import c from "../faders.module.css";

/* 38 */ export function ChapterSeek() {
  const [v, bind] = useDrag({ init: 0.3 });
  const marks = [0.12, 0.34, 0.58, 0.81];
  const names = ['Intro', 'Setup', 'Build', 'Ship', 'Outro'];
  const at = marks.filter((m) => m <= v).length;
  return (
    <div className={c.chapters}>
      <div {...bind} aria-label="Chapter seek" style={{ ...bind.style, '--v': v }}>{marks.map((m) => <u key={m} style={{ left: `${m * 100}%` }} />)}<i /></div>
      <output>{String(at + 1).padStart(2, '0')} · {names[at]}</output>
    </div>
  );
}
