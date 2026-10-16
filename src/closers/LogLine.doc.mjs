/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Write one audit entry. Fill in who, what, to what and why; the server's part (time, request, source) is added for you, and the entry comes out as a structured line you can copy. Nothing is stored.",
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"logLine\",\n  \"anchor\": \"write\",\n  \"scene\": \"timeline-pulse\",\n  \"tag\": \"End of audit trails\",\n  \"minHeight\": 640,\n  \"title\": \"Write one entry.\",\n  \"lede\": \"Fill in the five things a person will want to know. The server’s part — time, request and source — is added for you, and the entry comes out as a line you can copy. Nothing is stored.\",\n  \"onward\": [\n    {\n      \"label\": \"Roles, permissions and scopes\",\n      \"to\": \"/insights/permissions\"\n    },\n    {\n      \"label\": \"Data retention\",\n      \"to\": \"/legal/retention\"\n    },\n    {\n      \"label\": \"All insights\",\n      \"to\": \"/insights\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"logLine\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
