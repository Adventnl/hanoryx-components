import DropdownMenu from '../dropdown-menu/DropdownMenu';

/** A named overflow-action menu using the shared menu keyboard behavior. */
export function MoreMenu({ label = 'More actions', ...props }) {
  return <DropdownMenu {...props} label={label} align="end" />;
}
