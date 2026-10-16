/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "An itemised receipt of what the site holds for this visitor, read live from the browser and \"printed\" line by line. Copy it as text or print it again.",
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"receipt\",\n  \"scene\": \"privacy-quiet-grid\",\n  \"tag\": \"End of privacy\",\n  \"minHeight\": 560,\n  \"title\": \"Your receipt.\",\n  \"lede\": \"Everything the site is holding for you right now, itemised from your own browser. Nothing on it was sent anywhere.\",\n  \"onward\": [\n    {\n      \"label\": \"Cookies & storage\",\n      \"to\": \"/legal/cookies\"\n    },\n    {\n      \"label\": \"Third-party services\",\n      \"to\": \"/trust/third-parties\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"receipt\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
