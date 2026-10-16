/* Documentation for HoverCard. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "HoverCard",
  "area": "kit",
  "family": "overlays",
  "summary": "A preview card for a link: hover or focus the link and a little more about where it goes appears, and stays while the pointer is on it. It must only ever add.",
  "props": [
    {
      "name": "title",
      "description": "The card’s heading and text."
    },
    {
      "name": "body",
      "description": "The card’s heading and text."
    },
    {
      "name": "delay",
      "type": "number",
      "default": "280",
      "description": "Milliseconds of hover before it opens."
    }
  ],
  "keyboard": [
    {
      "key": "Tab",
      "does": "Focusing the link opens the card."
    },
    {
      "key": "Esc",
      "does": "Closes it."
    }
  ],
  "notes": [
    "Touch has no hover, so the link has to make sense without the card.",
    "Linked by aria-describedby; the card is not focusable."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<HoverCard title=\"Glossary\" body=\"Every term the site uses…\"><Link to=\"/resources/glossary\">glossary</Link></HoverCard>"
    }
  ]
};
