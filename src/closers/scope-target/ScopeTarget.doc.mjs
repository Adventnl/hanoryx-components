/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "A target for a vulnerability-reporting scope: the bullseye is what is in scope, the rings outside it are what is not. Hover or focus a ring (or pick it from the list) to read what sits in it.",
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
      "name": "rings",
      "type": "Array<{ id: string; label: string; scope: string; short: string; note: string; items: Array<string> }>",
      "description": "Host-supplied rings; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"scopeTarget\",\n  \"scene\": \"secure-boundary\",\n  \"tag\": \"End of the disclosure policy\",\n  \"minHeight\": 560,\n  \"title\": \"In scope, and out.\",\n  \"lede\": \"The centre is what this policy covers. Every ring beyond it belongs to someone else.\",\n  \"rings\": [\n    {\n      \"id\": \"site\",\n      \"label\": \"The website\",\n      \"scope\": \"in\",\n      \"short\": \"The site\",\n      \"note\": \"The site at its public address.\",\n      \"items\": [\n        \"Pages, scripts and styles\",\n        \"Links, redirects and addresses\",\n        \"What the site’s code sends, and to whom\"\n      ]\n    },\n    {\n      \"id\": \"delivery\",\n      \"label\": \"How it is delivered\",\n      \"scope\": \"in\",\n      \"short\": \"Delivery\",\n      \"note\": \"How the site reaches your browser, as far as the company controls it.\",\n      \"items\": [\n        \"Headers and settings the company chooses\",\n        \"The way files are served from the site’s host\"\n      ]\n    },\n    {\n      \"id\": \"services\",\n      \"label\": \"Services it depends on\",\n      \"scope\": \"out\",\n      \"short\": \"Dependencies\",\n      \"note\": \"Other people’s systems. Report problems to their owners.\",\n      \"items\": [\n        \"The hosting platform\",\n        \"The font service\",\n        \"GitHub\"\n      ]\n    },\n    {\n      \"id\": \"people\",\n      \"label\": \"People and places\",\n      \"scope\": \"out\",\n      \"short\": \"Beyond\",\n      \"note\": \"Not covered by this policy at all.\",\n      \"items\": [\n        \"Social engineering of the company’s people\",\n        \"Physical attacks\",\n        \"Denial of service\"\n      ]\n    }\n  ],\n  \"onward\": [\n    {\n      \"label\": \"Acceptable use\",\n      \"to\": \"/legal/acceptable-use\"\n    },\n    {\n      \"label\": \"Trust centre\",\n      \"to\": \"/trust\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"scopeTarget\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
