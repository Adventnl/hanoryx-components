

export const dots = (n) => Array.from({ length: n }, (_, k) => <i key={k} style={{ '--k': k }} />);

export const status = (label) => ({ role: 'img', 'aria-label': label });
