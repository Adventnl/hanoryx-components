import { useTick } from "../../../stage/hooks";
import c from "../figures.module.css";

/* 37 */ const WORDS_BIG = ['2026', '8192', '3.14', '1729', '0042'];

export function OutlineDigits() {
  const n = useTick(3400);
  const word = WORDS_BIG[n % WORDS_BIG.length];
  return (
    <div className={c.fig}>
      <svg className={c.outlineSvg} viewBox="0 0 200 70" role="img" aria-label={`The number ${word}, drawn as an outline`}>
        <text key={word} className={c.outlineText} x="100" y="54" textAnchor="middle">{word}</text>
      </svg>
    </div>
  );
}
