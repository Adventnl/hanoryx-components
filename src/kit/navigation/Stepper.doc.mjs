/* Documentation for Stepper. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "Stepper",
  "area": "kit",
  "family": "navigation",
  "summary": "The steps of something with an order, and which one you are on. Done steps show a tick, the current one is aria-current, and each state is written out for a screen reader.",
  "props": [
    {
      "name": "steps",
      "type": "array",
      "default": "[]",
      "description": "{ title, hint? }."
    },
    {
      "name": "current",
      "type": "number",
      "default": "0",
      "description": "The zero-based index of the current step."
    }
  ],
  "keyboard": [
    {
      "key": "—",
      "does": "A stepper shows progress; it is not a control. Put Back and Next buttons beside it."
    }
  ],
  "notes": [
    "On a phone the steps stack and the connecting line is dropped.",
    "It does not decide whether a step may be skipped — that rule belongs to your flow."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<Stepper current={1} steps={[{ title: 'Details' }, { title: 'Review' }, { title: 'Confirm' }]} />"
    }
  ]
};
