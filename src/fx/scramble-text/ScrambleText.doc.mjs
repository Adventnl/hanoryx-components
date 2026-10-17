/* Documentation for ScrambleText. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "ScrambleText",
  "area": "fx",
  "summary": "Text that decodes from noise into its final form, left to right. Shows the final text at once under reduced motion.",
  "props": [
    {
      "name": "text",
      "required": true
    },
    {
      "name": "trigger",
      "description": "Change it to decode again."
    },
    {
      "name": "auto",
      "description": "Decode on mount."
    },
    {
      "name": "duration",
      "description": "Milliseconds."
    },
    {
      "name": "as"
    }
  ],
  "sizing": {
    "rules": [
      "Reserve the final width: the scramble uses the same width as the text. Mono labels work best."
    ]
  },
  "related": [
    "ProximityText"
  ],
  "examples": [
    {
      "title": "Basic",
      "code": "<ScrambleText as=\"p\" text=\"SYSTEMS ONLINE\" auto />"
    }
  ]
};
