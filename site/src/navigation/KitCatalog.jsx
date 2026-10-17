import { Link } from 'react-router-dom';
import { areaHref, hrefOf } from '../data';
import { Inline } from '../Inline';

export default function KitCatalog({ data, category }) {
  return [...data.kitGroups].filter(([key]) => !category || key === category).map(([key, groups]) => <section key={key}>
    <h2 className="sx-h2"><Link to={areaHref('kit', key)}>{data.kitFamilies[key]}</Link><small>{groups.size} families</small></h2>
    {[...groups.values()].sort((a, b) => a.title.localeCompare(b.title)).map(group => <details key={group.key} className="sx-kit-family">
      <summary><strong>{group.title}</strong> <span>{group.entries.length} entries</span></summary><ul className="sx-list">{group.entries.map(entry => <li key={entry.id}><Link to={hrefOf(entry)}><b>{entry.name}{entry.kind === 'hook' ? ' (hook)' : ''}</b><small><Inline text={entry.summary} /></small></Link></li>)}</ul>
    </details>)}
  </section>);
}
