import { useCycle } from "../../../stage/hooks";
import c from "../morphs.module.css";

const WORDS = ['stone', 'water', 'cloud', 'flame'];

/* 37 */ export function NounBlur() {
  const i = useCycle(4, 1500);
  return <div className={c.stage} role="img" aria-label="A word that turns into other words"><b key={i} className={c.word}>{WORDS[i]}</b></div>;
}
