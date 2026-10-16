import { useState } from 'react';

/* a button that remembers it is held (pointer or keyboard) */
export function useHold(onChange) {
  const [on, setOn] = useState(false);
  const set = (v) => () => { setOn(v); if (onChange) onChange(v); };
  return [on, { onPointerDown: set(true), onPointerUp: set(false), onPointerLeave: set(false), onBlur: set(false), onKeyDown: (e) => { if (e.key === ' ' || e.key === 'Enter') set(true)(); }, onKeyUp: set(false) }];
}
