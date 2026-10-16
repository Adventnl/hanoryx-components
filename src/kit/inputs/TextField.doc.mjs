/* Documentation for TextField. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "TextField",
  "area": "kit",
  "family": "inputs",
  "summary": "A single-line text field with a label, hint and error, and an optional prefix and suffix inside the border for a currency, a unit or an @.",
  "props": [
    {
      "name": "label",
      "type": "string",
      "description": "The visible label."
    },
    {
      "name": "hint",
      "description": "Help text and the problem; see Field."
    },
    {
      "name": "error",
      "description": "Help text and the problem; see Field."
    },
    {
      "name": "prefix",
      "description": "Drawn inside the border, before and after the input."
    },
    {
      "name": "suffix",
      "description": "Drawn inside the border, before and after the input."
    },
    {
      "name": "type",
      "type": "string",
      "default": "\"text\"",
      "description": "Any input type that holds text."
    },
    {
      "name": "...input",
      "type": "attributes",
      "description": "Everything else goes to the input: value, defaultValue, onChange, placeholder, inputMode, readOnly, disabled."
    }
  ],
  "keyboard": [
    {
      "key": "Tab / Shift+Tab",
      "does": "Moves into and out of the field."
    }
  ],
  "notes": [
    "Controlled (value and onChange) or uncontrolled (defaultValue) — it is a plain input.",
    "Autocomplete is off by default; turn it back on for names and addresses with the autoComplete attribute.",
    "Disabled and read-only look different on purpose: read-only text can still be selected and copied."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<TextField label=\"Budget\" prefix=\"$\" suffix=\"per month\" inputMode=\"numeric\" value={v} onChange={(e) => setV(e.target.value)} />"
    }
  ]
};
