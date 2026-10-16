/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Two colours in, the WCAG contrast ratio out, with a verdict for each kind of thing that has to be read, and the nearest passing colour when it falls short. Runs entirely in the page; nothing is sent anywhere.",
  "props": [
    {
      "name": "eyebrow",
      "type": "string",
      "description": "Host-supplied eyebrow; see the complete working data example below."
    },
    {
      "name": "title",
      "type": "string",
      "description": "Host-supplied title; see the complete working data example below."
    },
    {
      "name": "intro",
      "type": "string",
      "description": "Host-supplied intro; see the complete working data example below."
    },
    {
      "name": "note",
      "type": "string",
      "description": "Host-supplied note; see the complete working data example below."
    },
    {
      "name": "start",
      "description": "Optional start. Refer to the source defaults and working composition."
    }
  ],
  "examples": [
    {
      "title": "Compose through signature block",
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"contrastChecker\",\n  \"anchor\": \"tool\",\n  \"railLabel\": \"The checker\",\n  \"scene\": \"privacy-quiet-grid\",\n  \"minHeight\": 760,\n  \"eyebrow\": \"The checker\",\n  \"title\": \"Text colour on a background.\",\n  \"intro\": \"Type a hex colour or use the picker. The preview shows both colours at real sizes, because a ratio only tells you so much.\",\n  \"note\": \"This measures flat colours against the WCAG 2 formula. It cannot judge text over images, gradients or moving backgrounds, and a pass is not a guarantee that something is pleasant to read.\"\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"contrastChecker\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
