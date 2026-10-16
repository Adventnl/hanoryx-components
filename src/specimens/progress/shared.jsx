

export const run = (label) => ({ role: 'progressbar', 'aria-label': label, 'aria-valuetext': 'Loading' });

export const cells = (n) => Array.from({ length: n }, (_, k) => <i key={k} style={{ '--k': k }} />);
