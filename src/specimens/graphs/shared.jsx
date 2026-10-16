import c from './graphs.module.css';

/* ---- helpers ---- */
export const layoutTree = (root) => {
  let leaf = 0;
  const nodes = [];
  const walk = (n, depth, parent) => {
    const me = { n, depth, parent, x: 0, kids: [] };
    nodes.push(me);
    if (!n.kids || !n.kids.length) { me.x = leaf; leaf += 1; } else {
      me.kids = n.kids.map((k) => walk(k, depth + 1, me));
      me.x = (me.kids[0].x + me.kids[me.kids.length - 1].x) / 2;
    }
    return me;
  };
  walk(root, 0, null);
  return { nodes, leaves: leaf, depth: Math.max(...nodes.map((d) => d.depth)) };
};

export function Legend({ items, hot, setHot, sticky = false }) {
  return (
    <ul className={c.legend}>
      {items.map((name, i) => (
        <li key={name}>
          <button type="button" data-hot={hot === i} onPointerEnter={sticky ? undefined : () => setHot(i)} onPointerLeave={sticky ? undefined : () => setHot(-1)} onFocus={sticky ? undefined : () => setHot(i)} onBlur={sticky ? undefined : () => setHot(-1)} onClick={() => setHot(i)}>
            <b style={{ '--k': i }} />{name}
          </button>
        </li>
      ))}
    </ul>
  );
}

/* a node label: a rounded box with text */
export function Box({ x, y, w = 12, h = 5.4, label, hot, ...rest }) {
  return (
    <g className={c.box} data-hot={hot} {...rest}>
      <rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx="1.4" />
      <text x={x} y={y} textAnchor="middle" dominantBaseline="central">{label}</text>
    </g>
  );
}
