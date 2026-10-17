export function CollapsibleGroup({ children, label = 'Expandable sections' }) { return <div role="group" aria-label={label}>{children}</div>; }
