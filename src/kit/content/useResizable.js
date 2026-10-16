import { useControllable } from '../internal/useControllable';

/** A percentage split. Keyboard and pointer bindings share the same clamped state. */
export function useResizable({
  value,
  defaultValue = 50,
  onChange,
  min = 10,
  max = 90,
  orientation = 'horizontal',
} = {}) {
  const [size, commit] = useControllable({ value, defaultValue, onChange });
  const lower = Math.min(min, max);
  const upper = Math.max(min, max);
  const setSize = (next) => commit(Math.min(upper, Math.max(lower, next)));
  const vertical = orientation === 'vertical';
  const read = (event) => {
    const box = event.currentTarget.parentElement.getBoundingClientRect();
    const length = vertical ? box.height : box.width;
    if (length) setSize(((vertical ? event.clientY - box.top : event.clientX - box.left) / length) * 100);
  };
  return {
    size: Math.min(upper, Math.max(lower, size)),
    setSize,
    handleProps: {
      role: 'separator',
      tabIndex: 0,
      'aria-orientation': vertical ? 'horizontal' : 'vertical',
      'aria-valuenow': Math.round(Math.min(upper, Math.max(lower, size))),
      'aria-valuemin': lower,
      'aria-valuemax': upper,
      onPointerDown(event) {
        event.preventDefault();
        event.currentTarget.setPointerCapture(event.pointerId);
        read(event);
      },
      onPointerMove(event) {
        if (event.currentTarget.hasPointerCapture(event.pointerId)) read(event);
      },
      onKeyDown(event) {
        const decrease = vertical ? 'ArrowUp' : 'ArrowLeft';
        const increase = vertical ? 'ArrowDown' : 'ArrowRight';
        if (![decrease, increase, 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();
        setSize(
          event.key === 'Home'
            ? lower
            : event.key === 'End'
              ? upper
              : size + (event.key === decrease ? -1 : 1) * (event.shiftKey ? 10 : 1),
        );
      },
    },
  };
}
