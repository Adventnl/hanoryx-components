import c from './signals.module.css';

/* 6 */ export function ServiceList() {
  const rows = [['API', 'ok'], ['Search', 'warn'], ['Storage', 'ok'], ['Mail', 'bad']];
  return <ul className={c.services} aria-label="Service status">{rows.map(([n, t]) => <li key={n}><i className={c.led} data-t={t} /><span>{n}</span><b>{{ ok: 'Operational', warn: 'Degraded', bad: 'Down' }[t]}</b></li>)}</ul>;
}
