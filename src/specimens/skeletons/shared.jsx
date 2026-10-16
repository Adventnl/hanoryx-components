import c from './skeletons.module.css';

export const sk = (w, h = '0.6rem', r) => <i className={c.sk} style={{ width: w, height: h, borderRadius: r }} />;

export const Shell = ({ label = 'Loading', className, children }) => <div className={className} role="status" aria-busy="true" aria-label={label}>{children}</div>;
