import { useId } from 'react';
import styles from './Chart.module.css';

/** Accessible SVG plotting surface. Hosts supply data marks and an equivalent text summary. */
export function Chart({ title, description, children, legend, width = 600, height = 300 }) {
  const id = useId();
  return <figure className={styles.chart}><svg viewBox={`0 0 ${width} ${height}`} role="img" aria-labelledby={`${id}-title ${id}-description`}><title id={`${id}-title`}>{title}</title><desc id={`${id}-description`}>{description}</desc>{children}</svg>{legend}<figcaption>{title}{description && <span> — {description}</span>}</figcaption></figure>;
}
export function ChartAxis({ orientation = 'horizontal', x = 0, y = 0, length = 100, ticks = [] }) {
  const horizontal = orientation === 'horizontal';
  return <g className={styles.axis} transform={`translate(${x} ${y})`}><line x2={horizontal ? length : 0} y2={horizontal ? 0 : length} />{ticks.map(tick => <g key={tick.value} transform={`translate(${horizontal ? tick.position : 0} ${horizontal ? 0 : tick.position})`}><line x2={horizontal ? 0 : -5} y2={horizontal ? 5 : 0} /><text x={horizontal ? 0 : -10} y={horizontal ? 20 : 0} textAnchor={horizontal ? 'middle' : 'end'}>{tick.label ?? tick.value}</text></g>)}</g>;
}
export function ChartGrid({ x = 0, y = 0, width = 100, height = 100, horizontal = [], vertical = [] }) {
  return <g className={styles.grid} transform={`translate(${x} ${y})`} aria-hidden="true">{horizontal.map(position => <line key={`h${position}`} y1={position} y2={position} x2={width} />)}{vertical.map(position => <line key={`v${position}`} x1={position} x2={position} y2={height} />)}</g>;
}
export function ChartLegend({ items = [] }) { return <ul className={styles.legend} aria-label="Chart legend">{items.map(item => <li key={item.label}><ChartSwatch tone={item.tone} />{item.label}</li>)}</ul>; }
export function ChartSwatch({ tone = 'accent', label }) { return <span className={styles.swatch} data-tone={tone} role={label ? 'img' : undefined} aria-label={label} aria-hidden={!label || undefined} />; }
export function ChartTooltip({ children, label = 'Chart value' }) { return <output className={styles.tooltip} aria-label={label}>{children}</output>; }
