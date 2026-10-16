import { useRef, useState } from 'react';

/* One tablist: the indicator is an <i> that the page's CSS places from --i and --n. */
export function Tabs({ labels, init = 0, label = 'Tabs', vertical = false, className, tabClass, onPick, children, render }) {
  const [i, setI] = useState(init);
  const box = useRef(null);
  const go = (k) => {
    const j = (k + labels.length) % labels.length;
    setI(j);
    onPick?.(j);
    box.current?.querySelectorAll('[role="tab"]')[j]?.focus();
  };
  const key = (e) => {
    const next = vertical ? 'ArrowDown' : 'ArrowRight';
    const prev = vertical ? 'ArrowUp' : 'ArrowLeft';
    if (e.key === next) { e.preventDefault(); go(i + 1); }
    else if (e.key === prev) { e.preventDefault(); go(i - 1); }
    else if (e.key === 'Home') { e.preventDefault(); go(0); }
    else if (e.key === 'End') { e.preventDefault(); go(labels.length - 1); }
  };
  return (
    <div ref={box} role="tablist" aria-label={label} aria-orientation={vertical ? 'vertical' : 'horizontal'} className={className} style={{ '--i': i, '--n': labels.length }} onKeyDown={key}>
      {labels.map((t, k) => (
        <button key={k} type="button" role="tab" aria-selected={k === i} tabIndex={k === i ? 0 : -1} className={tabClass} data-on={k === i} onClick={() => { setI(k); onPick?.(k); }}>
          {render ? render(t, k, k === i) : t}
        </button>
      ))}
      {children}
    </div>
  );
}
