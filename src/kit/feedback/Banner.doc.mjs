/* Documentation for Banner. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "Banner",
  "area": "kit",
  "family": "feedback",
  "summary": "A notice that runs the width of its container, for something about the whole page or site rather than one field. It may carry one action and may be dismissed.",
  "props": [
    {
      "name": "title",
      "type": "string",
      "description": "A bold lead-in."
    },
    {
      "name": "action",
      "type": "object",
      "description": "{ label, to } for a link or { label, onClick } for a button."
    },
    {
      "name": "dismissible",
      "type": "boolean",
      "default": "true",
      "description": "Show a dismiss button."
    }
  ],
  "keyboard": [
    {
      "key": "Tab",
      "does": "To the action, then to the dismiss button."
    }
  ],
  "notes": [
    "A group named by its title, so two banners on a page never collide as landmarks.",
    "Dismissal lasts until the page is reloaded; nothing is stored."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<Banner title=\"New:\" action={{ label: 'Read the notes', to: '/resources/changelog' }}>A chapter was added to the release notes.</Banner>"
    }
  ]
};
