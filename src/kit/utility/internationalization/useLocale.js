import { useContext, useMemo, useCallback } from 'react';
import { LocaleContext } from './internal/locale-context';

export function useLocale() { return useContext(LocaleContext).locale; }
export function useTranslator() {
  const { messages } = useContext(LocaleContext);
  return useCallback((key, values = {}) => String(messages[key] ?? key).replace(/\{(\w+)\}/g, (match, name) => values[name] ?? match), [messages]);
}
export function useCollator(options) { const locale = useLocale(); return useMemo(() => new Intl.Collator(locale, options), [locale, options]); }
