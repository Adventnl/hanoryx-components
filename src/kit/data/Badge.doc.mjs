/* Documentation for Badge. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "Badge",
  "area": "kit",
  "family": "data",
  "summary": "A short label for the state or kind of a thing: New, Beta, Deprecated. The word carries the meaning; the tone only reinforces it.",
  "props": [
    {
      "name": "tone",
      "type": "\"neutral\" | \"red\" | \"solid\" | \"outline\" | \"success\" | \"warning\"",
      "default": "\"neutral\"",
      "description": "The colour treatment."
    },
    {
      "name": "dot",
      "type": "boolean",
      "default": "false",
      "description": "A small mark before the word."
    }
  ],
  "keyboard": [
    {
      "key": "—",
      "does": "Not interactive."
    }
  ],
  "notes": [
    "Never use a badge’s colour alone to say something.",
    "Keep it to one or two words."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<Badge tone=\"success\" dot>Healthy</Badge>"
    }
  ]
};
