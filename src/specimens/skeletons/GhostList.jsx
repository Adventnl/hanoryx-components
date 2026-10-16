import c from './skeletons.module.css';

/* 31 */ export function GhostList() {
  return <ul className={c.ghost} aria-label="Fading list">{['Atlas', 'Beacon', 'Compass', 'Dock', 'Ember'].map((t, k) => <li key={t} style={{ '--k': k }}>{t}</li>)}</ul>;
}
