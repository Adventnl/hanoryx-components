import { useMediaQuery } from '../../../core/hooks/use-media-query/useMediaQuery';
export function useAppShellMobile() { return useMediaQuery('(max-width: 48rem)'); }
