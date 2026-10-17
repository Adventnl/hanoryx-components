import { NavLink, useLocation } from 'react-router-dom';
import { areaHref, hrefOf } from '../data';
import { GUIDES, RECIPES } from '../nav';

function KitTree({ data, pathname }) {
  return [...data.kitGroups].map(([category, groups]) => <li key={category}><details open={[...groups.values()].some(group => group.entries.some(entry => pathname === hrefOf(entry))) || pathname === areaHref('kit', category)}>
    <summary>{data.kitFamilies[category]} <i>{[...groups.values()].reduce((total, group) => total + group.entries.length, 0)}</i></summary>
    <ul><li><NavLink to={areaHref('kit', category)} end>All {data.kitFamilies[category].toLowerCase()}</NavLink></li>{[...groups.values()].sort((a, b) => a.title.localeCompare(b.title)).map(group => <li key={group.key}><details open={group.entries.some(entry => pathname === hrefOf(entry))}>
      <summary>{group.title}<i>{group.entries.length}</i></summary><ul>{group.entries.map(entry => <li key={entry.id}><NavLink to={hrefOf(entry)}>{entry.name}{entry.kind === 'hook' && <small> hook</small>}</NavLink></li>)}</ul>
    </details></li>)}</ul>
  </details></li>);
}

export default function CatalogTree({ data }) {
  const { pathname } = useLocation();
  return <nav className="sx-tree" aria-label="Components">
    <div className="sx-group"><h2>Guides</h2><ul><li><NavLink to="/" end>Overview</NavLink></li>{GUIDES.map(([slug, label]) => <li key={slug}><NavLink to={`/guides/${slug}`}>{label}</NavLink></li>)}<li><NavLink to="/preview/shell">Shell preview</NavLink></li></ul></div>
    <div className="sx-group"><h2>Recipes</h2><ul>{RECIPES.map(([slug, label]) => <li key={slug}><NavLink to={`/recipes/${slug}`}>{label}</NavLink></li>)}</ul></div>
    <div className="sx-group"><h2>Library</h2>{data.areas.map(area => <details key={area.id} className="sx-area" open={pathname.startsWith(`/a/${area.id}`) || pathname.startsWith(`/c/${area.id}/`)}>
      <summary><span>{area.title}</span><i>{data.counts[area.id]}</i></summary><ul><li><NavLink to={areaHref(area.id)} end>All {area.title.toLowerCase()}</NavLink></li>
        {area.id === 'kit' ? <KitTree data={data} pathname={pathname} /> : area.id === 'specimens' ? data.chapters.map(chapter => <li key={chapter.id} className="sx-chapter"><span>{chapter.code} {chapter.title}</span><ul>{data.families.filter(family => family.chapter === chapter.id).map(family => <li key={family.slug}><NavLink to={areaHref('specimens', family.slug)}>{family.title}<i>{family.count}</i></NavLink></li>)}</ul></li>) : [...new Set(data.byArea.get(area.id).map(entry => entry.family).filter(Boolean))].map(family => <li key={family}><NavLink to={areaHref(area.id, family)}>{family}</NavLink></li>)}
      </ul>
    </details>)}</div>
  </nav>;
}
