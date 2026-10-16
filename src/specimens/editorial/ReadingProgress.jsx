import c from './editorial.module.css';

const LONG = 'The belt keeps moving. Nobody asked it to, and nobody has found the switch. At seven the gates open and the hall fills with tea and timetables. Someone has crossed out the wrong platform; someone else has underlined the right one, twice. The names below were removed before printing, and the last line was never finished. The belt keeps moving. ';

export function ReadingProgress() {
  return (
    <div className={c.fig}>
      <div className={c.reader} tabIndex={0} role="region" aria-label="Scrolling text with a progress bar">
        <i className={c.prog} />
        <p>{LONG.repeat(3)}</p>
      </div>
    </div>
  );
}
