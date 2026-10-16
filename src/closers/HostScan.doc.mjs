/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "\"Where has this tab been?\" — read from the browser's own list of requests, grouped by host, each one matched against the hosts this site says it uses.",
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
      "name": "expected",
      "type": "{ fonts.googleapis.com: string; fonts.gstatic.com: string }",
      "description": "Host-supplied expected; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"hostScan\",\n  \"scene\": \"network-constellation\",\n  \"tag\": \"End of the service list\",\n  \"minHeight\": 480,\n  \"title\": \"Where has this tab been?\",\n  \"lede\": \"Read from the browser’s own record of the requests this tab made, grouped by host and matched against the list above.\",\n  \"expected\": {\n    \"fonts.googleapis.com\": \"The typeface styles — Google Fonts, listed above.\",\n    \"fonts.gstatic.com\": \"The typeface files — Google Fonts, listed above.\"\n  },\n  \"onward\": [\n    {\n      \"label\": \"Privacy notice\",\n      \"to\": \"/legal/privacy\"\n    },\n    {\n      \"label\": \"Trust centre\",\n      \"to\": \"/trust\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"hostScan\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
