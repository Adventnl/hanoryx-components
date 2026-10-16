import c from './progress.module.css';

/* 27 */ export function SkillBars() {
  return <ul className={c.skills}>{[['Type', 0.92], ['Motion', 0.74], ['Sound', 0.48]].map(([t, w]) => <li key={t}><span>{t}</span><div role="img" aria-label={`${t} ${Math.round(w * 100)} percent`}><i style={{ '--w': w }} /></div></li>)}</ul>;
}
