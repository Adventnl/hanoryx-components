import { useEffect, useRef, useState } from 'react';

/** Host adapter: render(element, spec) returns a Vega view or a cleanup function. */
export function VegaChart({ spec, render, label = 'Vega chart' }) {
  const ref = useRef(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (!render) return;
    let live = true;
    let view;
    const dispose = result => { if (typeof result === 'function') result(); else if (result?.view) result.view.finalize?.(); else result?.finalize?.(); };
    Promise.resolve().then(() => render(ref.current, spec)).then(result => { if (live) { view = result; setError(null); } else dispose(result); }).catch(cause => { if (live) setError(cause); });
    return () => { live = false; dispose(view); };
  }, [render, spec]);
  return <figure aria-label={label}><div ref={ref} />{!render && <figcaption>Provide a Vega renderer to display {label}.</figcaption>}{error && <figcaption role="alert">{error instanceof Error ? error.message : String(error)}</figcaption>}</figure>;
}
