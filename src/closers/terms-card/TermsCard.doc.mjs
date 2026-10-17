/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "The terms on a single card that turns over: what you can do on one side, what not to lean on on the other. Tilts toward the pointer; the flip is a button, so it works without one.",
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
      "name": "can",
      "type": "Array<string>",
      "description": "Host-supplied can; see the complete working data example below."
    },
    {
      "name": "cant",
      "type": "Array<string>",
      "description": "Host-supplied cant; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"termsCard\",\n  \"scene\": \"architectural-grid\",\n  \"tag\": \"End of terms\",\n  \"minHeight\": 560,\n  \"title\": \"The terms, on one card.\",\n  \"lede\": \"Turn it over. One side is what you can do; the other is what not to lean on.\",\n  \"can\": [\n    \"Read, use the tools, print what you need\",\n    \"Link to any page, and say where it came from\",\n    \"Quote briefly, as the law allows\",\n    \"Ask to reuse more, through the contact page\"\n  ],\n  \"cant\": [\n    \"Treat a description as an offer or a quotation\",\n    \"Treat a demo or sample record as a real system\",\n    \"Expect the site to always be there, or always right\",\n    \"Present the site’s material as your own\"\n  ],\n  \"onward\": [\n    {\n      \"label\": \"Acceptable use\",\n      \"to\": \"/legal/acceptable-use\"\n    },\n    {\n      \"label\": \"Disclaimers\",\n      \"to\": \"/legal/disclaimer\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"termsCard\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
