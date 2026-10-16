/* Documentation for Field. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "Field",
  "area": "kit",
  "family": "inputs",
  "summary": "The label, hint and error that every field shares, wired up so a screen reader hears them. The control you put inside it receives its id, aria-describedby and aria-invalid.",
  "props": [
    {
      "name": "label",
      "type": "string",
      "description": "The visible label, tied to the control."
    },
    {
      "name": "hint",
      "type": "string",
      "description": "Help text, read after the label. Replaced by the error while one is showing."
    },
    {
      "name": "error",
      "type": "string",
      "description": "What is wrong. Announced as an alert when it appears."
    },
    {
      "name": "required",
      "type": "boolean",
      "default": "false",
      "description": "Adds “required” to the label."
    },
    {
      "name": "children",
      "type": "function",
      "description": "Receives { id, aria-describedby, aria-invalid } and returns the control."
    }
  ],
  "keyboard": [
    {
      "key": "Tab",
      "does": "Moves focus to the control it wraps; the label itself is not a stop."
    }
  ],
  "notes": [
    "An error replaces the hint, so the described-by pointer never points at something that is not there.",
    "Put all three props on the one element that takes focus.",
    "Every other input in the kit is built on this."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<Field label=\"Email\" hint=\"We reply from this address.\" error={error} required>\n  {(props) => <input {...props} type=\"email\" />}\n</Field>"
    }
  ]
};
