import Dialog from '../dialog/Dialog';
export function Overlay({ title = 'Overlay', ...props }) { return <Dialog {...props} title={title} />; }
export function DialogHeader({ children }) { return <header>{children}</header>; }
