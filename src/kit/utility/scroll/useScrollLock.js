import { useEffect } from 'react';
import { lockScroll } from '../../../core/utils/scrollLock';
import { useLenis } from '../../../core/providers/lenis-context';
export function useScrollLock(active = true) { const lenis = useLenis(); useEffect(() => active ? lockScroll(lenis) : undefined, [active, lenis]); }
