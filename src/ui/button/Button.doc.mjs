/* Documentation for Button. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "Button",
  "area": "ui",
  "summary": "The primary interactive control. It becomes a router `Link` with `to`, an `<a>` with `href` (external links open safely in a new tab) and a `<button>` otherwise. Magnetic pull toward the pointer by default.",
  "keywords": [
    "cta",
    "action",
    "link"
  ],
  "props": [
    {
      "name": "variant",
      "type": "'primary' | 'ghost' | 'line' | 'outline'",
      "description": "One `primary` per view; the rest `line` or `ghost`."
    },
    {
      "name": "size",
      "type": "'sm' | 'md' | 'lg'"
    },
    {
      "name": "icon",
      "description": "A lucide icon component."
    },
    {
      "name": "magnetic",
      "description": "The pointer pull. Turn it off in dense UI and inside forms."
    },
    {
      "name": "to",
      "description": "Internal route."
    },
    {
      "name": "href",
      "description": "External URL."
    }
  ],
  "keyboard": [
    {
      "key": "Enter / Space",
      "does": "Activate."
    }
  ],
  "usage": {
    "bestPractices": [
      {
        "do": true,
        "text": "One `primary` button per region; the second action is `line`."
      },
      {
        "do": false,
        "text": "Set a width. A full-width button is a `Stack` child."
      },
      {
        "do": false,
        "text": "Use a button for navigation: use `to`/`href`."
      }
    ]
  },
  "sizing": {
    "rules": [
      "Intrinsic. Label is mono, `--fs-2xs`, uppercase; padding grows sm → md → lg. Hit area is ≥ 44px tall."
    ]
  },
  "related": [
    "ArrowLink",
    "Toolbar"
  ],
  "examples": [
    {
      "title": "Basic",
      "code": "<Button to=\"/contact\">Start a conversation</Button>"
    }
  ]
};
