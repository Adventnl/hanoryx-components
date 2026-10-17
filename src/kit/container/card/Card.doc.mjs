/* Documentation for Card. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "Card",
  "area": "kit",
  "family": "content",
  "summary": "A surface that groups related content, in four variants. The title is a heading whose level you choose, so the card fits the outline of the page it is on.",
  "props": [
    {
      "name": "eyebrow",
      "description": "The small label, the heading and the foot line."
    },
    {
      "name": "title",
      "description": "The small label, the heading and the foot line."
    },
    {
      "name": "footer",
      "description": "The small label, the heading and the foot line."
    },
    {
      "name": "as",
      "type": "string",
      "default": "\"h3\"",
      "description": "The title’s heading element."
    },
    {
      "name": "variant",
      "type": "\"raised\" | \"flat\" | \"outline\" | \"accent\"",
      "default": "\"raised\"",
      "description": "The surface."
    },
    {
      "name": "interactive",
      "type": "boolean",
      "default": "false",
      "description": "Lift on hover and focus."
    }
  ],
  "keyboard": [
    {
      "key": "Tab",
      "does": "To the one link or button inside it."
    }
  ],
  "notes": [
    "Do not wrap a whole card in a link — put the link on the title or in the footer.",
    "Use the accent variant at most once per screen."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<Card eyebrow=\"Accent\" title=\"Pick one\" variant=\"accent\" footer=\"Once per screen.\">The red wash says start here.</Card>"
    }
  ]
};
