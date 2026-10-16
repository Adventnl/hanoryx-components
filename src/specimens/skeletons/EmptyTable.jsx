import c from './skeletons.module.css';

/* 24 */ export function EmptyTable() {
  return (
    <table className={c.tbl}>
      <thead><tr><th scope="col">Name</th><th scope="col">Status</th></tr></thead>
      <tbody><tr><td colSpan={2}>Nothing to show here yet</td></tr></tbody>
    </table>
  );
}
