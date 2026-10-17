/* Documentation for MagneticButton. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "MagneticButton",
  "area": "shell",
  "family": "effects",
  "summary": "Wraps an interactive element with a subtle magnetic pull toward the pointer. Polymorphic via `as` (a `<button>` by default). Off for coarse pointers and reduced motion.",
  "props": [
    {
      "name": "as",
      "description": "Element or component to render."
    },
    {
      "name": "strength",
      "description": "How far it follows, 0–1."
    }
  ],
  "sizing": {
    "rules": [
      "Takes the size of the element it wraps."
    ]
  },
  "related": [
    "Button"
  ],
  "examples": [
    {
      "title": "Basic",
      "code": "<MagneticButton as=\"a\" href=\"#top\">Back to top</MagneticButton>"
    }
  ]
};
