import { useState } from 'react';
import c from "../graphs.module.css";

/* 2 */ const ORG = { id: 'a', label: 'Lead', kids: [{ id: 'b', label: 'Team A', kids: [{ id: 'd', label: 'Ana' }, { id: 'e', label: 'Bo' }] }, { id: 'c', label: 'Team B', kids: [{ id: 'f', label: 'Cy' }, { id: 'g', label: 'Di' }, { id: 'h', label: 'Ed' }] }] };

function OrgNode({ node, closed, toggle }) {
  const kids = node.kids || [];
  const shut = closed.includes(node.id);
  return (
    <li>
      {kids.length ? <button type="button" aria-expanded={!shut} onClick={() => toggle(node.id)}>{node.label}<u>{shut ? '+' : '−'}</u></button> : <span>{node.label}</span>}
      {kids.length > 0 && !shut && <ul>{kids.map((k) => <OrgNode key={k.id} node={k} closed={closed} toggle={toggle} />)}</ul>}
    </li>
  );
}

export function OrgChart() {
  const [closed, setClosed] = useState([]);
  return (
    <div className={c.org}><ul><OrgNode node={ORG} closed={closed} toggle={(id) => setClosed((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]))} /></ul></div>
  );
}
