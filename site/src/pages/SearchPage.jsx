import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { hrefOf } from '../data';

export default function SearchPage({ data }) {
  const [params] = useSearchParams();
  const q = params.get('q') ?? '';
  const results = useMemo(() => data.search(q, 200), [data, q]);
  return (
    <div>
      <h1 className="sx-h1">Search</h1>
      <p className="sx-sub">{q ? `${results.length}${results.length === 200 ? '+' : ''} results for “${q}”` : 'Type in the box above.'}</p>
      <ul className="sx-list">
        {results.map((e) => (
          <li key={e.id}>
            <Link to={hrefOf(e)}><b>{e.label ?? e.name}</b><span>{e.area}{e.family ? ` / ${e.family}` : ''}</span><small>{e.summary}</small></Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
