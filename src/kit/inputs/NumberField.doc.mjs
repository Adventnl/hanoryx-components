/* Documentation for NumberField. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "NumberField",
  "area": "kit",
  "family": "inputs",
  "summary": "A number with a minus and a plus either side. The value is clamped to its range when you leave the field, never while you are typing.",
  "props": [
    {
      "name": "value",
      "description": "onChange receives a number, or null while the box is empty."
    },
    {
      "name": "defaultValue",
      "description": "onChange receives a number, or null while the box is empty."
    },
    {
      "name": "onChange",
      "description": "onChange receives a number, or null while the box is empty."
    },
    {
      "name": "min",
      "description": "The range; the buttons stop at the ends."
    },
    {
      "name": "max",
      "description": "The range; the buttons stop at the ends."
    },
    {
      "name": "step",
      "type": "number",
      "default": "1",
      "description": "How much a press or an arrow key changes it; decimals are kept tidy."
    },
    {
      "name": "suffix",
      "type": "node",
      "description": "A unit after the number."
    }
  ],
  "keyboard": [
    {
      "key": "↑ / ↓",
      "does": "Step the value up or down."
    },
    {
      "key": "Typing",
      "does": "Free-form; clamped on blur."
    }
  ],
  "notes": [
    "The plus and minus buttons are not tab stops: the arrow keys do their job for keyboard users.",
    "Values are rounded to the precision of the step, so 1.25 + 0.05 is 1.3 and not 1.3000000000000003."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<NumberField label=\"Seats\" min={1} max={12} value={n} onChange={setN} />"
    }
  ]
};
