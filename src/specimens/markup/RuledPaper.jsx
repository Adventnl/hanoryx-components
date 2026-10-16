import c from './markup.module.css';

const RULED = ['Dear belt,', 'you keep moving.', 'Nobody asked you to.', 'Please keep going.'];

export function RuledPaper() {
  return (
    <div className={c.fig} role="img" aria-label="Ruled paper being written on: Dear belt, you keep moving. Nobody asked you to. Please keep going.">
      <div className={c.ruled}>
        {RULED.map((l, i) => <p key={l} style={{ '--i': i }}><span>{l}</span></p>)}
      </div>
    </div>
  );
}
