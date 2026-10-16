import c from './toasts.module.css';

/* 14 */ export function AnnouncementMarquee() {
  return (
    <div className={c.marquee} role="note" aria-label="Announcement">
      <div aria-hidden="true">{Array.from({ length: 2 }, (_, k) => <span key={k}>New studio hours · Spring release · Open call for work · </span>)}</div>
      <p className="sr-only">New studio hours, spring release, open call for work.</p>
    </div>
  );
}
