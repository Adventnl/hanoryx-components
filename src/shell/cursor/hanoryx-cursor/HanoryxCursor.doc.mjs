/* Documentation for HanoryxCursor. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "HanoryxCursor",
  "area": "shell",
  "family": "cursor",
  "summary": "The designed precision cursor: a tight core dot tracks the pointer while a reticle follows with a little lag, and grows over elements marked `data-cursor`. Fine pointers only; off under reduced motion.",
  "sizing": {
    "rules": [
      "Fixed, pointer-events none, above everything (`--z-cursor`). No layout."
    ]
  },
  "notes": [
    "Mark things the cursor should react to with `data-cursor=\"link\"` / `\"drag\"` / `\"text\"`."
  ],
  "examples": [
    {
      "title": "Basic",
      "code": "<HanoryxCursor />"
    }
  ]
};
