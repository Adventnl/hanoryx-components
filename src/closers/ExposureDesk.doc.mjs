/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Design what a customer portal shows. Each field of an order says what the usual rule is; switch fields on and off and the preview changes, with a warning for anything that should never leave the building. An invented order.",
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
      "name": "fields",
      "type": "Array<{ id: string; label: string; value: string; rule: string; why: string }>",
      "description": "Host-supplied fields; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"exposureDesk\",\n  \"anchor\": \"exposure\",\n  \"scene\": \"client-portal-gate\",\n  \"tag\": \"End of client portals\",\n  \"minHeight\": 800,\n  \"title\": \"Design what the customer sees.\",\n  \"lede\": \"Ten fields of an invented order. Each says what the usual rule is. Switch them on and off, and the preview changes, with a warning for anything that should never leave the building.\",\n  \"fields\": [\n    {\n      \"id\": \"status\",\n      \"label\": \"Order status\",\n      \"value\": \"Packed\",\n      \"rule\": \"yes\",\n      \"why\": \"The thing they came to find out.\"\n    },\n    {\n      \"id\": \"items\",\n      \"label\": \"What they ordered\",\n      \"value\": \"3 lines, 5 units\",\n      \"rule\": \"yes\",\n      \"why\": \"They chose it. Show it back.\"\n    },\n    {\n      \"id\": \"total\",\n      \"label\": \"What they paid\",\n      \"value\": \"84.50\",\n      \"rule\": \"yes\",\n      \"why\": \"Their own money, on their own order.\"\n    },\n    {\n      \"id\": \"tracking\",\n      \"label\": \"Tracking number\",\n      \"value\": \"TRK-0000-EXAMPLE\",\n      \"rule\": \"yes\",\n      \"why\": \"Helps them, and costs nothing to share.\"\n    },\n    {\n      \"id\": \"address\",\n      \"label\": \"Delivery address\",\n      \"value\": \"12 Sample Street\",\n      \"rule\": \"own\",\n      \"why\": \"Theirs to see, and never anyone else’s: show it only to the signed-in owner.\"\n    },\n    {\n      \"id\": \"email\",\n      \"label\": \"Email on file\",\n      \"value\": \"a@example.test\",\n      \"rule\": \"own\",\n      \"why\": \"Fine for them to see. A leak if it reaches the wrong visitor.\"\n    },\n    {\n      \"id\": \"margin\",\n      \"label\": \"Margin on the order\",\n      \"value\": \"31%\",\n      \"rule\": \"never\",\n      \"why\": \"Internal. It says what the business earns.\"\n    },\n    {\n      \"id\": \"notes\",\n      \"label\": \"Internal notes\",\n      \"value\": \"Phoned twice; short on patience\",\n      \"rule\": \"never\",\n      \"why\": \"Written for colleagues, in a tone not meant for the customer.\"\n    },\n    {\n      \"id\": \"agent\",\n      \"label\": \"Support agent\",\n      \"value\": \"agent_4417\",\n      \"rule\": \"never\",\n      \"why\": \"A colleague’s identity is theirs to share, not the system’s.\"\n    },\n    {\n      \"id\": \"risk\",\n      \"label\": \"Fraud score\",\n      \"value\": \"0.12\",\n      \"rule\": \"never\",\n      \"why\": \"Showing it teaches people to game it.\"\n    }\n  ],\n  \"onward\": [\n    {\n      \"label\": \"Security approach\",\n      \"to\": \"/company/security\"\n    },\n    {\n      \"label\": \"Roles, permissions and scopes\",\n      \"to\": \"/insights/permissions\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"exposureDesk\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
