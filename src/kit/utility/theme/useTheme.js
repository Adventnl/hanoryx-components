import { useContext } from 'react';
import { ThemeContext, LayerContext } from './internal/theme-context';
export function useTheme() { return useContext(ThemeContext); }
export function useLayer() { return useContext(LayerContext); }
