/* Documentation for RangeField. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "RangeField",
  "area": "kit",
  "family": "inputs",
  "summary": "A slider: the native range input, with its value written beside the label and a text version (“240 ms”) for assistive technology.",
  "props": [
    {
      "name": "min",
      "description": "The range."
    },
    {
      "name": "max",
      "description": "The range."
    },
    {
      "name": "step",
      "description": "The range."
    },
    {
      "name": "value",
      "description": "onChange receives a number."
    },
    {
      "name": "defaultValue",
      "description": "onChange receives a number."
    },
    {
      "name": "onChange",
      "description": "onChange receives a number."
    },
    {
      "name": "format",
      "type": "function",
      "default": "String",
      "description": "Turns the number into text for display and aria-valuetext."
    },
    {
      "name": "marks",
      "type": "array",
      "description": "A few words under the track."
    }
  ],
  "keyboard": [
    {
      "key": "← → ↑ ↓",
      "does": "One step."
    },
    {
      "key": "PageUp / PageDown",
      "does": "A larger step."
    },
    {
      "key": "Home / End",
      "does": "The minimum and the maximum."
    }
  ],
  "notes": [
    "Native, so touch dragging and keyboard control need no code of ours.",
    "A slider is a poor way to enter an exact number — pair it with a NumberField where exactness matters."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<RangeField label=\"Duration\" min={0} max={1000} step={20} value={ms} onChange={setMs} format={(n) => `${n} ms`} />"
    }
  ]
};
