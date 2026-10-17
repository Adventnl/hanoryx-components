/* Documentation for ProgressRing. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "ProgressRing",
  "area": "fx",
  "summary": "A ring gauge. `value` is 0..1; the stroke eases to it with a CSS transition, so ticking a checkbox sweeps the ring instead of jumping.",
  "props": [
    {
      "name": "value",
      "type": "number 0–1",
      "required": true
    },
    {
      "name": "size",
      "description": "Pixels (square). 96 by default."
    },
    {
      "name": "stroke",
      "description": "Stroke width in viewBox units."
    },
    {
      "name": "label",
      "description": "Accessible name; the value is announced."
    },
    {
      "name": "children",
      "description": "Centre content."
    }
  ],
  "sizing": {
    "rules": [
      "Square, `size` px (default 96). The centre holds one short figure."
    ]
  },
  "related": [
    "Meter",
    "ProgressBar"
  ],
  "examples": [
    {
      "title": "Basic",
      "code": "<ProgressRing value={0.62} size={120} label=\"Completion\"><b>62%</b></ProgressRing>"
    }
  ]
};
