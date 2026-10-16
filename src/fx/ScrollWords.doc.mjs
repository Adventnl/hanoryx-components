/* Documentation for ScrollWords. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "ScrollWords",
  "area": "fx",
  "summary": "A passage that lights up word by word as you scroll through it — reading pace becomes scroll pace. One ScrollTrigger writes a single `--p` onto the element.",
  "props": [
    {
      "name": "text",
      "required": true
    },
    {
      "name": "startAt",
      "description": "Viewport fraction where lighting starts."
    },
    {
      "name": "endAt",
      "description": "Where it finishes."
    },
    {
      "name": "as"
    }
  ],
  "sizing": {
    "rules": [
      "Block-level; fills the column. Cap it with `.measure`."
    ]
  },
  "related": [
    "ManifestoBlock"
  ],
  "examples": [
    {
      "title": "Basic",
      "code": "<ScrollWords className=\"heading-2 measure\" text=\"Depth is engineered, never improvised.\" />"
    }
  ]
};
