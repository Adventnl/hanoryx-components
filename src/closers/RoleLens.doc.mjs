/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "One record, four people. Each role needs a few of the fields and not the rest. Choose a role and the record rearranges itself: what they need is sharp, what they do not is tucked away but never gone. An invented record, for illustration.",
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
      "name": "record",
      "type": "Array<{ id: string; label: string; value: string }>",
      "description": "Host-supplied record; see the complete working data example below."
    },
    {
      "name": "roles",
      "type": "Array<{ id: string; name: string; asks: string; needs: Array<string> }>",
      "description": "Host-supplied roles; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"roleLens\",\n  \"anchor\": \"lens\",\n  \"scene\": \"data-interface-wave\",\n  \"tag\": \"End of data interfaces\",\n  \"minHeight\": 720,\n  \"title\": \"One record, four people.\",\n  \"lede\": \"Each role needs a few of the fields and not the rest. Choose a role and the record rearranges itself: what they need is sharp, what they do not is tucked away but never gone. An invented record.\",\n  \"record\": [\n    {\n      \"id\": \"order\",\n      \"label\": \"Order\",\n      \"value\": \"30211\"\n    },\n    {\n      \"id\": \"placed\",\n      \"label\": \"Placed\",\n      \"value\": \"Tuesday, 09:14\"\n    },\n    {\n      \"id\": \"status\",\n      \"label\": \"Status\",\n      \"value\": \"Paid, not yet packed\"\n    },\n    {\n      \"id\": \"customer\",\n      \"label\": \"Customer\",\n      \"value\": \"A. Example\"\n    },\n    {\n      \"id\": \"email\",\n      \"label\": \"Email\",\n      \"value\": \"a@example.test\"\n    },\n    {\n      \"id\": \"address\",\n      \"label\": \"Delivery address\",\n      \"value\": \"12 Sample Street\"\n    },\n    {\n      \"id\": \"items\",\n      \"label\": \"Items\",\n      \"value\": \"3 lines, 5 units\"\n    },\n    {\n      \"id\": \"total\",\n      \"label\": \"Total\",\n      \"value\": \"84.50\"\n    },\n    {\n      \"id\": \"margin\",\n      \"label\": \"Margin\",\n      \"value\": \"31%\"\n    },\n    {\n      \"id\": \"carrier\",\n      \"label\": \"Carrier\",\n      \"value\": \"Parcel, tracked\"\n    },\n    {\n      \"id\": \"notes\",\n      \"label\": \"Notes\",\n      \"value\": \"Gift. Leave with a neighbour.\"\n    },\n    {\n      \"id\": \"refund\",\n      \"label\": \"Refund\",\n      \"value\": \"None\"\n    }\n  ],\n  \"roles\": [\n    {\n      \"id\": \"support\",\n      \"name\": \"Support\",\n      \"asks\": \"Where is it, and what did they pay?\",\n      \"needs\": [\n        \"order\",\n        \"placed\",\n        \"status\",\n        \"customer\",\n        \"email\",\n        \"items\",\n        \"total\",\n        \"carrier\",\n        \"notes\",\n        \"refund\"\n      ]\n    },\n    {\n      \"id\": \"finance\",\n      \"name\": \"Finance\",\n      \"asks\": \"What came in, and what went back?\",\n      \"needs\": [\n        \"order\",\n        \"placed\",\n        \"status\",\n        \"total\",\n        \"margin\",\n        \"refund\"\n      ]\n    },\n    {\n      \"id\": \"warehouse\",\n      \"name\": \"Warehouse\",\n      \"asks\": \"What goes in the box, and where does it go?\",\n      \"needs\": [\n        \"order\",\n        \"status\",\n        \"address\",\n        \"items\",\n        \"carrier\",\n        \"notes\"\n      ]\n    },\n    {\n      \"id\": \"manager\",\n      \"name\": \"Manager\",\n      \"asks\": \"How is the day going?\",\n      \"needs\": [\n        \"order\",\n        \"status\",\n        \"items\",\n        \"total\",\n        \"margin\",\n        \"carrier\"\n      ]\n    }\n  ],\n  \"onward\": [\n    {\n      \"label\": \"Internal CRM\",\n      \"to\": \"/work/internal-crm\"\n    },\n    {\n      \"label\": \"Roles, permissions and scopes\",\n      \"to\": \"/insights/permissions\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"roleLens\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
