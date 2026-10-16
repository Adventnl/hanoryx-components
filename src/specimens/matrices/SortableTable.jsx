import { useState } from 'react';
import c from './matrices.module.css';

/* 5 */ const SALES = [['Alder', 42, 12.5], ['Birch', 17, 33.1], ['Cedar', 66, 8.4], ['Dune', 29, 21.7], ['Elm', 51, 15.2], ['Fir', 8, 40.9]];

const SALES_HEAD = ['Name', 'Units', 'Share'];

export function SortableTable() {
  const [sort, setSort] = useState({ col: 1, dir: -1 });
  const rows = [...SALES].sort((a, b) => (a[sort.col] > b[sort.col] ? 1 : a[sort.col] < b[sort.col] ? -1 : 0) * sort.dir);
  return (
    <table className={c.tbl}>
      <thead>
        <tr>
          {SALES_HEAD.map((h, i) => (
            <th key={h} aria-sort={sort.col === i ? (sort.dir > 0 ? 'ascending' : 'descending') : 'none'}>
              <button type="button" onClick={() => setSort((s) => ({ col: i, dir: s.col === i ? -s.dir : 1 }))}>{h}<u>{sort.col === i ? (sort.dir > 0 ? '▲' : '▼') : ''}</u></button>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{rows.map(([n, a, b]) => <tr key={n}><td>{n}</td><td>{a}</td><td>{b.toFixed(1)}%</td></tr>)}</tbody>
    </table>
  );
}
