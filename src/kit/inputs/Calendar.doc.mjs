/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "new",
  "summary": "A single-date calendar with roving focus, min/max bounds, month navigation and locale-aware labels.",
  "props": [
    {
      "name": "label",
      "type": "string",
      "description": "Visible or accessible name. Keep it meaningful in the page context."
    },
    {
      "name": "value",
      "type": "string",
      "description": "Selected ISO YYYY-MM-DD civil date."
    },
    {
      "name": "defaultValue",
      "type": "see notes",
      "description": "Initial value for uncontrolled usage. Subsequent changes to defaultValue do not reset state."
    },
    {
      "name": "onChange",
      "type": "(date: string) => void",
      "description": "Called when a day is selected, not when focus alone moves."
    },
    {
      "name": "min",
      "type": "number | string",
      "description": "Lower bound: ISO date for date fields, percentage for split panels."
    },
    {
      "name": "max",
      "type": "number | string",
      "description": "Upper bound in the same units as min."
    },
    {
      "name": "disabled",
      "type": "boolean",
      "description": "Disables editing and activation."
    },
    {
      "name": "locale",
      "type": "string",
      "description": "Intl locale for day names, month title and accessible dates."
    },
    {
      "name": "weekStartsOn",
      "type": "0 | 1 | 2 | 3 | 4 | 5 | 6",
      "description": "First weekday, 0 = Sunday; default 0."
    },
    {
      "name": "today",
      "type": "string",
      "description": "ISO current date. Override for deterministic previews and tests."
    }
  ],
  "notes": [
    "Use YYYY-MM-DD for value, defaultValue, min, max and today. No UTC conversion is performed.",
    "Moving focus does not change selection. Calendar is a single-date picker; use DateRangeInput for a date range."
  ],
  "sizing": {
    "rules": [
      "Capped at 24rem, fills narrower parents. Internal day cells share available width."
    ]
  },
  "keyboard": [
    {
      "key": "Arrow keys",
      "does": "Move one day horizontally, one week vertically."
    },
    {
      "key": "Home / End",
      "does": "Move to the first / last day in the current week."
    },
    {
      "key": "Page Up / Page Down",
      "does": "Previous / next month; hold Shift for previous / next year."
    },
    {
      "key": "Enter / Space",
      "does": "Select the focused day."
    }
  ],
  "examples": [
    {
      "title": "Working composition",
      "code": "const [date, setDate] = useState('2026-10-16');\n<Calendar value={date} onChange={setDate} min=\"2026-01-01\" />"
    }
  ],
  "subcomponents": {}
};
