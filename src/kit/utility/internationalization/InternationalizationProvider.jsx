import { LocaleContext } from './internal/locale-context';
export function InternationalizationProvider({ locale = 'en', messages = {}, children }) { return <LocaleContext.Provider value={{ locale, messages }}><div lang={locale}>{children}</div></LocaleContext.Provider>; }
