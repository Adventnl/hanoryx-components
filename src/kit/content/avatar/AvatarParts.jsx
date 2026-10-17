import StatusDot from '../../feedback/status-dot/StatusDot';
import styles from '../../internal/styles/data.module.css';

export function AvatarGroupOverflow({ count = 0 }) { return <span className={styles.avatar} aria-label={`${count} more people`}>+{count}</span>; }
export function AvatarStatusDot({ label = 'Available', state = 'ok' }) { return <StatusDot label={label} state={state} />; }
