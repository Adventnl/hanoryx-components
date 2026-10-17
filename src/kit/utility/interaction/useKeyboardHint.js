import { useState } from 'react';
import { useMediaQuery } from '../../../core/hooks/use-media-query/useMediaQuery';
export function useKeyboardHint() { return useMediaQuery('(hover: hover) and (pointer: fine)'); }
export function useIndicatorFocusRing() { const [focused, setFocused] = useState(false); return { focused, focusProps: { onFocus: () => setFocused(true), onBlur: () => setFocused(false) } }; }
export function useInputContainer({ invalid = false, disabled = false } = {}) { return { 'data-invalid': invalid || undefined, 'data-disabled': disabled || undefined }; }
export function useInputStatusIcon({ error, success } = {}) { return error ? { status: 'error', label: String(error) } : success ? { status: 'success', label: 'Valid' } : { status: 'idle', label: '' }; }
export function useImageMode({ src, fallback = 'placeholder' } = {}) { return src ? 'image' : fallback; }
