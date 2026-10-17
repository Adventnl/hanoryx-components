/* Documentation for ArrowLink. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "ArrowLink",
  "area": "fx",
  "summary": "An inline call to action: an underline draws left→right on hover and the arrow glides out of its corner. Becomes a router Link (`to`), an external link (`href`) or a button.",
  "props": [
    {
      "name": "to",
      "description": "Internal route (router `Link`)."
    },
    {
      "name": "href",
      "description": "External or `mailto:` URL; `https:` links open in a new tab."
    },
    {
      "name": "tone",
      "description": "`default` or `red`."
    }
  ],
  "keyboard": [
    {
      "key": "Enter",
      "does": "Follow the link."
    }
  ],
  "sizing": {
    "rules": [
      "Intrinsic and inline: it sits in a sentence or a `Cluster`. Do not give it a width."
    ]
  },
  "usage": {
    "bestPractices": [
      {
        "do": true,
        "text": "One per block, at the end of the thought it belongs to."
      },
      {
        "do": false,
        "text": "Use it as a button for something that is not navigation."
      }
    ]
  },
  "related": [
    "Button",
    "Link"
  ],
  "examples": [
    {
      "title": "Basic",
      "code": "<ArrowLink to=\"/systems\">Read the principles</ArrowLink>"
    }
  ]
};
