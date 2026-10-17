import { useEffect, useState } from 'react';
import { useOnScreen } from '../../../core/hooks/use-on-screen/useOnScreen';
import { usePrefersReducedMotion } from '../../../core/hooks/use-prefers-reduced-motion/usePrefersReducedMotion';
export function useStreamingText(text = '', { interval = 30, enabled = true } = {}) {
  const [shown, setShown] = useState('');
  const [ref, visible] = useOnScreen();
  const reduced = usePrefersReducedMotion();
  useEffect(() => {
    if (!enabled || reduced || !visible || shown === text) return;
    const timer = setInterval(() => setShown(previous => text.slice(0, text.startsWith(previous) ? previous.length + 1 : 1)), Math.max(1, interval));
    return () => clearInterval(timer);
  }, [text, enabled, reduced, interval, visible, shown]);
  const displayed = !enabled || reduced ? text : text.startsWith(shown) ? shown : '';
  return { text: displayed, complete: displayed === text, ref };
}
