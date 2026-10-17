import { useContext } from 'react';
import { ThemeContext, LayerContext } from './internal/theme-context';
import { useMediaQuery } from '../../../core/hooks/use-media-query/useMediaQuery';

/** Scopes a theme attribute. Host token overrides define the visual theme. */
export function Theme({ value = 'dark', children }) { return <ThemeContext.Provider value={value}><div data-theme={value} style={{ colorScheme: value === 'light' ? 'light' : 'dark' }}>{children}</div></ThemeContext.Provider>; }
export function MediaTheme({ children }) { const light = useMediaQuery('(prefers-color-scheme: light)'); return <Theme value={light ? 'light' : 'dark'}>{children}</Theme>; }
export function SyntaxTheme({ value = 'default', children }) { return <div data-syntax-theme={value}>{children}</div>; }
export function Layer({ children, offset = 1 }) { const parent = useContext(LayerContext); const layer = parent + offset; return <LayerContext.Provider value={layer}><div style={{ position: 'relative', zIndex: layer }}>{children}</div></LayerContext.Provider>; }
