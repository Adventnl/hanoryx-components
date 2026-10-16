import { useEffect, useRef, useState } from 'react';
import c from './menus.module.css';

/* 3 */ export function ContextMenu() {
  const [at, setAt] = useState(null);
  const ref = useRef(null);
  useEffect(() => {
    if (!at) return undefined;
    const close = () => setAt(null);
    document.addEventListener('pointerdown', close);
    document.addEventListener('keydown', close);
    return () => { document.removeEventListener('pointerdown', close); document.removeEventListener('keydown', close); };
  }, [at]);
  const place = (e) => { e.preventDefault(); const r = ref.current.getBoundingClientRect(); setAt({ x: e.clientX - r.left, y: e.clientY - r.top }); };
  return (
    <div ref={ref} className={c.ctx} onContextMenu={place} tabIndex={0} role="group" aria-label="Right-click area. Press the context-menu key or Shift F10 on a keyboard." onKeyDown={(e) => { if (e.key === 'ContextMenu' || (e.shiftKey && e.key === 'F10')) { e.preventDefault(); setAt({ x: 60, y: 30 }); } }}>
      <span>Right-click here</span>
      {at && <ul role="menu" style={{ left: at.x, top: at.y }} onPointerDown={(e) => e.stopPropagation()}>{['Cut', 'Copy', 'Paste'].map((t) => <li key={t} role="none"><button type="button" role="menuitem" onClick={() => setAt(null)}>{t}</button></li>)}</ul>}
    </div>
  );
}
