import { LinkContext } from './internal/link-context';
export function LinkProvider({ component, children }) { return <LinkContext.Provider value={component}>{children}</LinkContext.Provider>; }
