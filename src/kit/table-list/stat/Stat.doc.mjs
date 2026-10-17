/* Documentation for Stat. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "Stat",
  "area": "kit",
  "family": "data",
  "summary": "One number, large, with its label above and, if you have it, how it moved. The change is written as words for a screen reader; the arrow and colour are decoration.",
  "props": [
    {
      "name": "label",
      "description": "The caption, the figure, and the small word after it."
    },
    {
      "name": "value",
      "description": "The caption, the figure, and the small word after it."
    },
    {
      "name": "unit",
      "description": "The caption, the figure, and the small word after it."
    },
    {
      "name": "change",
      "type": "number",
      "description": "Percent change; positive, negative or zero."
    },
    {
      "name": "changeLabel",
      "type": "string",
      "description": "What it is compared with."
    },
    {
      "name": "note",
      "type": "string",
      "description": "A caveat or a source."
    }
  ],
  "keyboard": [
    {
      "key": "—",
      "does": "Not interactive."
    }
  ],
  "notes": [
    "Figures use lining numerals, so a 1 never looks like a capital I.",
    "Say what a figure is compared with, or leave the change off."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<Stat label=\"Jobs on time\" value=\"96\" unit=\"%\" change={2} changeLabel=\"vs. last week\" />"
    }
  ]
};
