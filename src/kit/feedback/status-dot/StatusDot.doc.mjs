/* Documentation for StatusDot. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "StatusDot",
  "area": "kit",
  "family": "feedback",
  "summary": "A coloured dot with its state spelled out beside it, so the colour is never the only signal. A live one can breathe.",
  "props": [
    {
      "name": "state",
      "type": "\"ok\" | \"warn\" | \"down\" | \"idle\"",
      "default": "\"idle\"",
      "description": "Sets the colour and the default word."
    },
    {
      "name": "label",
      "type": "string",
      "default": "state word",
      "description": "The text beside the dot."
    },
    {
      "name": "pulse",
      "type": "boolean",
      "default": "false",
      "description": "A slow ring for a live thing; stops under reduced motion."
    }
  ],
  "keyboard": [
    {
      "key": "—",
      "does": "Not interactive."
    }
  ],
  "notes": [
    "The words are Operational, Degraded, Down and Idle unless you give your own."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<StatusDot state=\"ok\" pulse />\n<StatusDot state=\"warn\" label=\"Slow responses\" />"
    }
  ]
};
