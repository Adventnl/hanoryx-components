import { useTick } from '../../stage/hooks';
import c from './waypoints.module.css';

/* 24 */ export function DeparturesBoard() {
  const n = useTick(1600);
  const rows = [['LH 482', 'Lisbon', 'B12'], ['KL 1021', 'Oslo', 'A03'], ['AF 614', 'Nice', 'C07'], ['BA 238', 'Dublin', 'A19']];
  return (
    <table className={c.board}>
      <caption className="sr-only">Departures</caption>
      <tbody>{rows.map(([f, d, g], i) => <tr key={f} data-hot={i === n % 4}><th scope="row">{f}</th><td>{d}</td><td>{g}</td><td aria-hidden="true">{i === n % 4 ? '→' : ''}</td></tr>)}</tbody>
    </table>
  );
}
