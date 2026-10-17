/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Four checks you run yourself, on this page, in your browser. Each says what it will look at, then what it found — so \"trust us\" becomes \"look\".",
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"selfAudit\",\n  \"anchor\": \"audit\",\n  \"scene\": \"secure-boundary\",\n  \"tag\": \"End of the trust centre\",\n  \"minHeight\": 560,\n  \"title\": \"Don’t take our word for it.\",\n  \"lede\": \"Four checks that run on this page, in your browser, and say what they find.\",\n  \"onward\": [\n    {\n      \"label\": \"Third-party services\",\n      \"to\": \"/trust/third-parties\"\n    },\n    {\n      \"label\": \"Legal centre\",\n      \"to\": \"/legal\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"selfAudit\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
