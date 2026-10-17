import { useCallback, useEffect, useRef, useState } from 'react';

export function useMergedRefs(...refs) {
  return useCallback(node => {
    const cleanups = refs.map(ref => { if (typeof ref === 'function') return ref(node); if (ref) ref.current = node; return null; });
    return () => refs.forEach((ref, index) => { if (typeof cleanups[index] === 'function') cleanups[index](); else if (typeof ref === 'function') ref(null); else if (ref) ref.current = null; });
    // The variadic refs are the complete dependency list; callers keep their count stable.
    // eslint-disable-next-line react-hooks/exhaustive-deps, react-hooks/use-memo
  }, refs);
}
export function useHotkeys(bindings, { enabled = true, allowInInput = false } = {}) {
  useEffect(() => {
    if (!enabled) return;
    const onKey = event => {
      if (!allowInInput && event.target.closest?.('input,textarea,select,[contenteditable="true"]')) return;
      for (const [shortcut, handler] of Object.entries(bindings)) {
        const keys = shortcut.toLowerCase().split('+');
        const mod = keys.includes('mod');
        if (event.key.toLowerCase() === keys.at(-1) && (mod ? event.ctrlKey || event.metaKey : event.ctrlKey === keys.includes('ctrl') && event.metaKey === keys.includes('meta')) && event.shiftKey === keys.includes('shift') && event.altKey === keys.includes('alt')) { event.preventDefault(); handler(event); }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [bindings, enabled, allowInInput]);
}
export function useLongPress(onLongPress, { delay = 500 } = {}) {
  const timer = useRef(null);
  const cancel = useCallback(() => clearTimeout(timer.current), []);
  useEffect(() => cancel, [cancel]);
  const start = event => { cancel(); if (!event.key || event.key === ' ' || event.key === 'Enter') timer.current = setTimeout(() => onLongPress?.(), delay); };
  return { onPointerDown: start, onPointerUp: cancel, onPointerCancel: cancel, onPointerLeave: cancel, onKeyDown: event => { if (!event.repeat) start(event); }, onKeyUp: cancel, onBlur: cancel };
}
export function usePressFeedback() {
  const [pressed, setPressed] = useState(false);
  return { pressed, pressProps: { 'data-pressed': pressed || undefined, onPointerDown: () => setPressed(true), onPointerUp: () => setPressed(false), onPointerCancel: () => setPressed(false), onPointerLeave: () => setPressed(false), onKeyDown: event => { if ([' ', 'Enter'].includes(event.key)) setPressed(true); }, onKeyUp: () => setPressed(false), onBlur: () => setPressed(false) } };
}
export function useClickableContainer(onPress, { disabled = false } = {}) {
  return { role: 'button', tabIndex: disabled ? -1 : 0, 'aria-disabled': disabled || undefined, onClick: event => { if (!disabled && !event.target.closest('a,button,input,select,textarea')) onPress?.(event); }, onKeyDown: event => { if (!disabled && event.target === event.currentTarget && ['Enter', ' '].includes(event.key)) { event.preventDefault(); onPress?.(event); } } };
}
export function useInteractiveRole({ disabled = false, role = 'button' } = {}) { return { role, tabIndex: disabled ? -1 : 0, 'aria-disabled': disabled || undefined }; }
export function useMenuPress(onOpen) { return { onClick: onOpen, onKeyDown: event => { if (event.key === 'ArrowDown') { event.preventDefault(); onOpen?.(event); } } }; }
