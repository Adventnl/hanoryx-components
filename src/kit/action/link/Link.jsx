import { Link as RouterLink } from 'react-router-dom';
import { createElement, useContext } from 'react';
import { LinkContext } from '../../utility/link-provider/internal/link-context';

/** Internal destinations use the application router; href is for external URLs. */
export function Link({ to, href, children, ...props }) {
  const InternalLink = useContext(LinkContext) ?? RouterLink;
  return to !== undefined ? createElement(InternalLink, { ...props, to }, children) : <a {...props} href={href}>{children}</a>;
}
