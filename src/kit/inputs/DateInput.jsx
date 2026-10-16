import TextField from './TextField';
import styles from './DateInput.module.css';

/** Native date picker. Value, min and max use YYYY-MM-DD; onChange receives the native event. */
export function DateInput({ label = 'Date', ...props }) {
  return <TextField {...props} label={label} type="date" />;
}

/** Local civil time, with no timezone conversion. onChange receives the native event. */
export function TimeInput({ label = 'Time', ...props }) {
  return <TextField {...props} label={label} type="time" />;
}

/** Local date and time. The host owns timezone selection and conversion. */
export function DateTimeInput({ label = 'Date and time', ...props }) {
  return <TextField {...props} label={label} type="datetime-local" />;
}

/** A labelled pair. No partial selection is discarded; a reversed range is explained. */
export function DateRangeInput({
  label = 'Date range',
  value = { start: '', end: '' },
  onChange,
  min,
  max,
  disabled = false,
  required = false,
}) {
  const invalid = Boolean(value.start && value.end && value.start > value.end);
  return (
    <fieldset className={styles.range} disabled={disabled}>
      <legend>{label}</legend>
      <DateInput
        label="Start date"
        value={value.start}
        onChange={(e) => onChange?.({ ...value, start: e.target.value })}
        min={min}
        max={max}
        required={required}
      />
      <DateInput
        label="End date"
        value={value.end}
        onChange={(e) => onChange?.({ ...value, end: e.target.value })}
        min={value.start || min}
        max={max}
        required={required}
        error={invalid ? 'End date must be on or after start date.' : undefined}
      />
    </fieldset>
  );
}
