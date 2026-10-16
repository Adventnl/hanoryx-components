/* Documentation for RadioGroup. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "RadioGroup",
  "area": "kit",
  "family": "inputs",
  "summary": "A group of real radio buttons under a legend: the arrow keys move and choose, Tab leaves the group, and a screen reader says “2 of 4”.",
  "props": [
    {
      "name": "legend",
      "type": "string",
      "description": "Names the group."
    },
    {
      "name": "options",
      "type": "array",
      "default": "[]",
      "description": "{ value, label, hint?, disabled? }."
    },
    {
      "name": "value",
      "description": "onChange receives the chosen value."
    },
    {
      "name": "defaultValue",
      "description": "onChange receives the chosen value."
    },
    {
      "name": "onChange",
      "description": "onChange receives the chosen value."
    },
    {
      "name": "row",
      "type": "boolean",
      "default": "false",
      "description": "Lay the options out in a wrapping row."
    }
  ],
  "keyboard": [
    {
      "key": "← → ↑ ↓",
      "does": "Move to the next or previous option and choose it."
    },
    {
      "key": "Tab",
      "does": "Enter the group (on the chosen option) or leave it."
    }
  ],
  "notes": [
    "Native radios in a fieldset: nothing to re-implement, nothing to get wrong.",
    "Use Segmented when the choices are short and few and the control should look like one piece."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<RadioGroup legend=\"Support level\" value={plan} onChange={setPlan} options={[{ value: 'self', label: 'Self-serve' }, { value: 'team', label: 'Team', hint: 'A named contact.' }]} />"
    }
  ]
};
