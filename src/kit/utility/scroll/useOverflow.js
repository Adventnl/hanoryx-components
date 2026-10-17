import { useEffect, useRef, useState } from 'react';

export function useOverflow() {
  const ref = useRef(null);
  const [overflow, setOverflow] = useState({ horizontal: false, vertical: false, start: false, end: false });
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const update = () => {
      const next = { horizontal: element.scrollWidth > element.clientWidth, vertical: element.scrollHeight > element.clientHeight, start: element.scrollTop > 0, end: element.scrollTop + element.clientHeight < element.scrollHeight - 1 };
      setOverflow(previous => Object.keys(next).every(key => next[key] === previous[key]) ? previous : next);
    };
    const resize = new ResizeObserver(update);
    const mutation = new MutationObserver(update);
    resize.observe(element);
    mutation.observe(element, { childList: true, subtree: true, characterData: true });
    element.addEventListener('scroll', update, { passive: true });
    element.addEventListener('load', update, true);
    update();
    return () => { resize.disconnect(); mutation.disconnect(); element.removeEventListener('scroll', update); element.removeEventListener('load', update, true); };
  }, []);
  return { ref, ...overflow };
}
export function useScrollOverflow() { return useOverflow(); }
export function useScrollableArea() { const area = useOverflow(); return { ...area, scrollToStart: () => area.ref.current?.scrollTo({ top: 0 }), scrollToEnd: () => { const node = area.ref.current; node?.scrollTo({ top: node.scrollHeight }); } }; }
