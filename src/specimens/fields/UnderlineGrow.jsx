import c from './fields.module.css';

/* 2 */ export function UnderlineGrow() {
  return <label className={c.under}><input placeholder="Search the archive" aria-label="Underline field" /><i /></label>;
}
