import { useState } from 'react';
import SearchField from '../search-field/SearchField';
import SelectField from '../select-field/SelectField';
import styles from './PowerSearch.module.css';

/** Search text plus structured filters; the host executes the resulting query. */
export function PowerSearch({ label = 'Search', filters = [], onSearch, defaultQuery = '' }) {
  const [query, setQuery] = useState(defaultQuery);
  const [values, setValues] = useState({});
  return <form className={styles.search} role="search" aria-label={label} onSubmit={event => { event.preventDefault(); onSearch?.({ query, filters: values }); }}>
    <SearchField label={label} value={query} onChange={setQuery} />
    {filters.map(filter => <SelectField key={filter.key} label={filter.label} options={filter.options} placeholder="Any" value={values[filter.key] ?? ''} onChange={value => setValues(current => ({ ...current, [filter.key]: value }))} />)}
    <button type="submit" disabled={!onSearch}>Search</button>
  </form>;
}
