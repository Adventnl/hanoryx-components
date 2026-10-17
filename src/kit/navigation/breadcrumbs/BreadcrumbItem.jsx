import { Link } from '../../action/link/Link';
export function BreadcrumbItem({ children, to, current = false }) { return <li>{current ? <span aria-current="page">{children}</span> : <Link to={to}>{children}</Link>}</li>; }
