import c from "../steps.module.css";
import { useStep } from "../shared";

/* 29 */ export function ChapterList() {
  const [i, set] = useStep(5, 2);
  return (
    <ol className={c.chap} aria-label="Chapters">
      {['Intro', 'Method', 'Results', 'Notes', 'Index'].map((t, k) => <li key={t}><button type="button" aria-current={k === i ? 'true' : undefined} onClick={() => set(k)}><span>{k + 1}.</span>{t}<i /></button></li>)}
    </ol>
  );
}
