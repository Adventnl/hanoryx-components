import { useEffect, useRef } from 'react';

const focusable = 'a[href],button:not(:disabled),input:not(:disabled),select:not(:disabled),textarea:not(:disabled),[tabindex]:not([tabindex="-1"])';
export function useFocusTrap(active = true) {
  const ref = useRef(null);
  useEffect(() => {
    if (!active || !ref.current) return;
    const root = ref.current;
    const before = document.activeElement;
    const nodes = () => [...root.querySelectorAll(focusable)].filter(node => node.getClientRects().length);
    (nodes()[0] ?? root).focus();
    const key = event => {
      if (event.key !== 'Tab') return;
      const items = nodes();
      const first = items[0]; const last = items.at(-1);
      if (!first) { event.preventDefault(); root.focus(); }
      else if (event.shiftKey && (document.activeElement === first || document.activeElement === root)) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    root.addEventListener('keydown', key);
    return () => { root.removeEventListener('keydown', key); if (before?.isConnected) before.focus(); };
  }, [active]);
  return ref;
}
