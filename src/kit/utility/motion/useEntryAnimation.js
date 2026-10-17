import { useOnScreen } from '../../../core/hooks/use-on-screen/useOnScreen';
import { usePrefersReducedMotion } from '../../../core/hooks/use-prefers-reduced-motion/usePrefersReducedMotion';
export function useEntryAnimation() { const [ref, visible] = useOnScreen(); const reduced = usePrefersReducedMotion(); return { ref, visible, style: { opacity: visible || reduced ? 1 : 0, transform: visible || reduced ? 'none' : 'translateY(var(--space-3))', transition: reduced ? 'none' : 'opacity var(--dur-3) var(--ease-out), transform var(--dur-3) var(--ease-out)' } }; }
