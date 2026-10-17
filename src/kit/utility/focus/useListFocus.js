import { useRef } from 'react';

/** Roving DOM focus within a named list; disabled and hidden items are skipped. */
export function useListFocus({ selector = '[data-focus-item]', orientation = 'vertical', loop = true } = {}) {
  const ref = useRef(null);
  function onKeyDown(event) {
    const items = [...(ref.current?.querySelectorAll(selector) ?? [])].filter(item => !item.disabled && item.getClientRects().length);
    const at = items.indexOf(document.activeElement);
    let index;
    if (event.key === 'Home') index = 0;
    else if (event.key === 'End') index = items.length - 1;
    else if (event.key === (orientation === 'horizontal' ? 'ArrowRight' : 'ArrowDown')) index = at + 1;
    else if (event.key === (orientation === 'horizontal' ? 'ArrowLeft' : 'ArrowUp')) index = at - 1;
    else return;
    event.preventDefault();
    if (items.length) items[loop ? (index + items.length) % items.length : Math.max(0, Math.min(index, items.length - 1))]?.focus();
  }
  return { ref, onKeyDown };
}
export function useGridFocus({ columns = 1, selector = '[data-focus-item]' } = {}) {
  const list = useListFocus({ selector, orientation: 'horizontal' });
  return { ...list, onKeyDown: event => {
    if (!['ArrowUp', 'ArrowDown'].includes(event.key)) { list.onKeyDown(event); return; }
    const items = [...(list.ref.current?.querySelectorAll(selector) ?? [])].filter(item => !item.disabled && item.getClientRects().length);
    const at = items.indexOf(document.activeElement);
    const step = Math.max(1, Math.floor(columns));
    const next = items[at + (event.key === 'ArrowDown' ? step : -step)];
    event.preventDefault(); next?.focus();
  } };
}
export function useTreeFocus({ onExpand, onCollapse, ...options } = {}) {
  const list = useListFocus({ ...options, selector: '[role="treeitem"]' });
  return { ...list, onKeyDown: event => {
    const item = document.activeElement.closest?.('[role="treeitem"]');
    if (!item || !['ArrowLeft', 'ArrowRight'].includes(event.key)) { list.onKeyDown(event); return; }
    event.preventDefault();
    const key = item.dataset.key ?? item.id;
    if (event.key === 'ArrowRight') { if (item.getAttribute('aria-expanded') === 'false') onExpand?.(key); else item.querySelector('[role="treeitem"]')?.focus(); }
    else if (item.getAttribute('aria-expanded') === 'true') onCollapse?.(key);
    else item.parentElement.closest('[role="treeitem"]')?.focus();
  } };
}
