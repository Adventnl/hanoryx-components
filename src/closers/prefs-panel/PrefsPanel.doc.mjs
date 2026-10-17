/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Display preferences for this view — text size, line spacing, contrast, a calm mode and the single-key shortcuts — that take effect at once and last only until the page is reloaded.",
  "props": [
    {
      "name": "tag",
      "type": "string",
      "description": "Host-supplied tag; see the complete working data example below."
    },
    {
      "name": "title",
      "type": "string",
      "description": "Host-supplied title; see the complete working data example below."
    },
    {
      "name": "lede",
      "type": "string",
      "description": "Host-supplied lede; see the complete working data example below."
    },
    {
      "name": "onward",
      "type": "Array<{ label: string; to: string }>",
      "description": "Host-supplied onward; see the complete working data example below."
    }
  ],
  "examples": [
    {
      "title": "Compose through closer block",
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"prefsPanel\",\n  \"anchor\": \"display\",\n  \"scene\": \"architectural-grid\",\n  \"tag\": \"End of accessibility\",\n  \"minHeight\": 520,\n  \"title\": \"Tune the site to you.\",\n  \"lede\": \"Five settings you can change right now. They apply until you reload and are not stored.\",\n  \"onward\": [\n    {\n      \"label\": \"Feedback & complaints\",\n      \"to\": \"/legal/complaints\"\n    },\n    {\n      \"label\": \"Keyboard shortcuts\",\n      \"to\": \"/legal/accessibility#keys\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"prefsPanel\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
