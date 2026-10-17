/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "A purge button for the site's own items in your browser. One press runs a short \"wipe\", removes only the keys that belong to this site, and shows what is left (which should be nothing of ours).",
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"purge\",\n  \"scene\": \"topology-pulse\",\n  \"tag\": \"End of storage\",\n  \"minHeight\": 520,\n  \"title\": \"Leave nothing behind.\",\n  \"lede\": \"One press removes every item this site keeps in your browser. It touches nothing that belongs to another site.\",\n  \"onward\": [\n    {\n      \"label\": \"Privacy\",\n      \"to\": \"/legal/privacy\"\n    },\n    {\n      \"label\": \"Data retention\",\n      \"to\": \"/legal/retention\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"purge\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
