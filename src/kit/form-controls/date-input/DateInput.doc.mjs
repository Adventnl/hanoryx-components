/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "new",
  "summary": "Labelled native date input, plus local time, local date/time and paired date-range controls.",
  "props": [
    {
      "name": "label",
      "type": "string",
      "description": "Visible or accessible name. Keep it meaningful in the page context."
    },
    {
      "name": "...props"
    }
  ],
  "notes": [
    "Native field props such as required, min, max, step, name and disabled pass through TextField.",
    "DateInput, TimeInput and DateTimeInput use native onChange(event). These are local civil values; timezone conversion is the host responsibility."
  ],
  "sizing": {
    "rules": [
      "Fields fill the parent. DateRangeInput wraps into one column when two 14rem fields cannot fit."
    ]
  },
  "keyboard": [
    {
      "key": "Native input keys",
      "does": "Platform date/time picker behaviour applies. Tab moves between fields."
    }
  ],
  "examples": [
    {
      "title": "Working composition",
      "code": "<DateInput label=\"Start date\" defaultValue=\"2026-10-16\" min=\"2026-01-01\" />"
    }
  ],
  "subcomponents": {
    "TimeInput": {
      "origin": "new",
      "summary": "Local civil time, with no timezone conversion. onChange receives the native event.",
      "props": [
        {
          "name": "label",
          "type": "string",
          "description": "Visible or accessible name. Keep it meaningful in the page context."
        },
        {
          "name": "...props"
        }
      ],
      "notes": [
        "Native field props such as required, min, max, step, name and disabled pass through TextField.",
        "DateInput, TimeInput and DateTimeInput use native onChange(event). These are local civil values; timezone conversion is the host responsibility."
      ],
      "sizing": {
        "rules": [
          "Fields fill the parent. DateRangeInput wraps into one column when two 14rem fields cannot fit."
        ]
      },
      "keyboard": [
        {
          "key": "Native input keys",
          "does": "Platform date/time picker behaviour applies. Tab moves between fields."
        }
      ],
      "examples": [
        {
          "title": "Working composition",
          "code": "<TimeInput label=\"Start time\" defaultValue=\"09:30\" step={60} />"
        }
      ]
    },
    "DateTimeInput": {
      "origin": "new",
      "summary": "Local date and time. The host owns timezone selection and conversion.",
      "props": [
        {
          "name": "label",
          "type": "string",
          "description": "Visible or accessible name. Keep it meaningful in the page context."
        },
        {
          "name": "...props"
        }
      ],
      "notes": [
        "Native field props such as required, min, max, step, name and disabled pass through TextField.",
        "DateInput, TimeInput and DateTimeInput use native onChange(event). These are local civil values; timezone conversion is the host responsibility."
      ],
      "sizing": {
        "rules": [
          "Fields fill the parent. DateRangeInput wraps into one column when two 14rem fields cannot fit."
        ]
      },
      "keyboard": [
        {
          "key": "Native input keys",
          "does": "Platform date/time picker behaviour applies. Tab moves between fields."
        }
      ],
      "examples": [
        {
          "title": "Working composition",
          "code": "<DateTimeInput label=\"Appointment\" defaultValue=\"2026-10-16T09:30\" />"
        }
      ]
    },
    "DateRangeInput": {
      "origin": "new",
      "summary": "A labelled pair. No partial selection is discarded; a reversed range is explained.",
      "props": [
        {
          "name": "label",
          "type": "string",
          "description": "Visible or accessible name. Keep it meaningful in the page context."
        },
        {
          "name": "value",
          "type": "{start: string, end: string}",
          "description": "Controlled ISO civil-date pair. Empty strings represent an incomplete range."
        },
        {
          "name": "onChange",
          "type": "(next: {start: string, end: string}) => void",
          "description": "Receives the complete updated pair, including incomplete or invalid ranges."
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
          "name": "required"
        }
      ],
      "notes": [
        "Native field props such as required, min, max, step, name and disabled pass through TextField.",
        "DateInput, TimeInput and DateTimeInput use native onChange(event). These are local civil values; timezone conversion is the host responsibility.",
        "The range component is controlled. A reversed range remains visible with an error."
      ],
      "sizing": {
        "rules": [
          "Fields fill the parent. DateRangeInput wraps into one column when two 14rem fields cannot fit."
        ]
      },
      "keyboard": [
        {
          "key": "Native input keys",
          "does": "Platform date/time picker behaviour applies. Tab moves between fields."
        }
      ],
      "examples": [
        {
          "title": "Working composition",
          "code": "const [range, setRange] = useState({ start: '2026-10-16', end: '2026-10-20' });\n<DateRangeInput value={range} onChange={setRange} />"
        }
      ]
    }
  }
};
