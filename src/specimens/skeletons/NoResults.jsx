import { Ico } from '../../stage/icons';
import c from './skeletons.module.css';

/* 17 */ export function NoResults() {
  return (
    <div className={c.empty}>
      <Ico n="search" /><b>No results</b><p>Nothing matches “zebra”.</p><button type="button">Clear search</button>
    </div>
  );
}
