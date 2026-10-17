/* Documentation for ProgressBar. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "ProgressBar",
  "area": "kit",
  "family": "feedback",
  "summary": "How far along something is. With a value it announces its percentage; without one it is indeterminate and says it is working.",
  "props": [
    {
      "name": "label",
      "type": "string",
      "description": "What is progressing; names the bar."
    },
    {
      "name": "value",
      "description": "Omit value for indeterminate."
    },
    {
      "name": "max",
      "description": "Omit value for indeterminate."
    },
    {
      "name": "hideValue",
      "type": "boolean",
      "default": "false",
      "description": "Do not write the percentage beside the label."
    }
  ],
  "keyboard": [
    {
      "key": "—",
      "does": "Not interactive."
    }
  ],
  "notes": [
    "role=\"progressbar\" with aria-valuenow, aria-valuetext and a name.",
    "Indeterminate stops moving under reduced motion.",
    "For a quantity in a range (storage used), use Meter."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<ProgressBar label=\"Importing rows\" value={42} />\n<ProgressBar label=\"Waiting for the server\" />"
    }
  ]
};
