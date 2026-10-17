/* Documentation for KeyCap. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "KeyCap",
  "area": "fx",
  "summary": "A visible keyboard key. `pressed` gives it the depressed, lit state.",
  "props": [
    {
      "name": "pressed",
      "description": "The lit, depressed state."
    }
  ],
  "sizing": {
    "rules": [
      "Intrinsic, about 2rem square for one character."
    ]
  },
  "related": [
    "Kbd"
  ],
  "examples": [
    {
      "title": "Basic",
      "code": "<KeyCap>K</KeyCap>"
    }
  ]
};
