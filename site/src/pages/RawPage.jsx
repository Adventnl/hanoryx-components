/* One entry on a bare page — no chrome. For screenshots and the sizing
   measurements: #/raw/<id>?w=360 renders it in a box exactly that wide. */
import { useEffect, useRef } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Preview } from '../preview/Preview';

export default function RawPage({ data }) {
  const { pathname } = useLocation();
  const [params] = useSearchParams();
  const id = decodeURIComponent(pathname.replace(/^\/raw\//, ''));
  const entry = data.byId.get(id);
  const w = params.get('w');
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    // "ready" = something is in the box and nothing has changed size for a moment
    let timer = 0;
    delete el.dataset.ready;
    // "ready" = quiet for a moment — or, for things that never stop changing, 2.5 s at most
    const done = () => { el.dataset.ready = '1'; };
    const limit = setTimeout(done, 2500);
    const settle = () => { clearTimeout(timer); timer = setTimeout(done, 350); };
    const ro = new ResizeObserver(settle);
    ro.observe(el);
    const mo = new MutationObserver(settle);
    mo.observe(el, { childList: true, subtree: true });
    settle();
    return () => { ro.disconnect(); mo.disconnect(); clearTimeout(timer); clearTimeout(limit); };
  }, [id, w]);

  if (!entry) return <p data-ready="1" data-missing="1">No entry {id}</p>;
  return (
    <div id="raw-root" ref={ref} style={{ width: w ? `${w}px` : undefined, padding: params.get('pad') ?? 0, position: 'relative' }} data-entry={entry.id}>
      <Preview entry={entry} data={data} bare />
    </div>
  );
}
