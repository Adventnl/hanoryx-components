import { useState, useCallback, useEffect, useRef } from 'react';

/** Clipboard failures are returned to the host and exposed as an error. */
export function useClipboard() {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const version = useRef(0);
  useEffect(() => () => { version.current += 1; }, []);
  const copy = useCallback(async text => {
    const current = ++version.current;
    try { await navigator.clipboard.writeText(String(text)); if (current === version.current) { setError(null); setStatus('copied'); } return true; }
    catch (cause) { if (current === version.current) { setError(cause); setStatus('error'); } return false; }
  }, []);
  return { copy, status, error };
}
