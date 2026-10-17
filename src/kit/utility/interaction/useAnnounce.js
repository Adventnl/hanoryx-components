import { useEffect, useState } from 'react';
export function useAnnounce() { const [message, announce] = useState(''); return { message, announce, liveProps: { role: 'status', 'aria-live': 'polite', 'aria-atomic': true } }; }
export function useDevWarning(condition, message, { enabled = import.meta.env?.DEV ?? false } = {}) { useEffect(() => { if (condition && enabled) console.warn(message); }, [condition, message, enabled]); }
