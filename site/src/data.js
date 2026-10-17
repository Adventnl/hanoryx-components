/* The catalogue the site shows: docs/generated/manifest.json, fetched once and indexed. */
import { useEffect, useState } from 'react';
import manifestUrl from '../../docs/generated/manifest.json?url';
import { groupKit } from './navigation/catalog-groups';

let request = null;

export function loadManifest() {
  if (!request) {
    request = fetch(manifestUrl)
      .then((r) => { if (!r.ok) throw new Error(`manifest: HTTP ${r.status}`); return r.json(); })
      .then(buildIndex)
      .catch((e) => { request = null; throw e; });
  }
  return request;
}

export function useManifest() {
  const [state, setState] = useState({ data: null, error: null });
  useEffect(() => {
    let live = true;
    loadManifest().then((data) => live && setState({ data, error: null })).catch((error) => live && setState({ data: null, error }));
    return () => { live = false; };
  }, []);
  return state;
}

const tokens = (s) => String(s || '').toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);

function buildIndex(m) {
  const byId = new Map();
  const byArea = new Map();
  const byFamily = new Map();
  const byName = new Map();
  for (const a of m.areas) byArea.set(a.id, []);
  for (const e of m.entries) {
    byId.set(e.id, e);
    byArea.get(e.area)?.push(e);
    const fk = `${e.area}/${e.family ?? ''}`;
    if (!byFamily.has(fk)) byFamily.set(fk, []);
    byFamily.get(fk).push(e);
    const arr = byName.get(e.name.toLowerCase()) ?? [];
    arr.push(e);
    byName.set(e.name.toLowerCase(), arr);
  }
  const haystack = m.entries.map((e) => ({ e, name: e.name.toLowerCase(), label: (e.label || '').toLowerCase(), text: [e.summary, e.family, e.area, e.kind, e.mode, ...(e.keywords || [])].join(' ').toLowerCase() }));
  return {
    ...m,
    byId, byArea, byFamily, byName, kitGroups: groupKit(byArea.get('kit') ?? []),
    search(q, limit = 40) {
      const ts = tokens(q);
      if (!ts.length) return [];
      const scored = [];
      for (const h of haystack) {
        let score = 0;
        for (const t of ts) {
          if (h.name === t || h.label === t) score += 100;
          else if (h.name.startsWith(t) || h.label.startsWith(t)) score += 40;
          else if (h.name.includes(t) || h.label.includes(t)) score += 25;
          else if (h.text.includes(t)) score += 6;
          else { score = 0; break; }
        }
        if (score) scored.push([score + (h.e.kind === 'specimen' ? 0 : 3), h.e]);
      }
      scored.sort((a, b) => b[0] - a[0] || a[1].name.localeCompare(b[1].name));
      return scored.slice(0, limit).map((x) => x[1]);
    },
  };
}

/** /c/<id> */
export const hrefOf = (e) => `/c/${e.id}`;
export const areaHref = (area, family) => (family ? `/a/${area}/${family}` : `/a/${area}`);
