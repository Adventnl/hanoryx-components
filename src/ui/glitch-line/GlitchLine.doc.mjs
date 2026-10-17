/* Documentation for GlitchLine. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "GlitchLine",
  "area": "ui",
  "summary": "A thin animated divider — a hairline with a slow travelling highlight and a rare red glitch tick. Decorative; frozen under reduced motion.",
  "props": [
    {
      "name": "tone",
      "description": "`default` or `red`."
    }
  ],
  "sizing": {
    "rules": [
      "Fills the width of its parent; 1px tall."
    ]
  },
  "related": [
    "Divider"
  ],
  "examples": [
    {
      "title": "Basic",
      "code": "<GlitchLine />"
    }
  ]
};
