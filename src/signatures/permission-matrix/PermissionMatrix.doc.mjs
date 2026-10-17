/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Roles against actions. Toggle what a role may do, switch between \"roles only\" and \"roles plus scope\" (own records, own team), then act as a person and see the decision — and the rule that made it.",
  "props": [
    {
      "name": "eyebrow",
      "type": "string",
      "description": "Host-supplied eyebrow; see the complete working data example below."
    },
    {
      "name": "title",
      "type": "string",
      "description": "Host-supplied title; see the complete working data example below."
    },
    {
      "name": "intro",
      "type": "string",
      "description": "Host-supplied intro; see the complete working data example below."
    },
    {
      "name": "roles",
      "type": "Array<{ id: string; label: string; grants: Array<string>; scoped: Array<unknown> }>",
      "description": "Host-supplied roles; see the complete working data example below."
    },
    {
      "name": "actions",
      "type": "Array<{ id: string; label: string; owned: boolean }>",
      "description": "Host-supplied actions; see the complete working data example below."
    },
    {
      "name": "note",
      "type": "string",
      "description": "Host-supplied note; see the complete working data example below."
    }
  ],
  "examples": [
    {
      "title": "Compose through signature block",
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"permissionMatrix\",\n  \"anchor\": \"try\",\n  \"railLabel\": \"Try it\",\n  \"scene\": \"privacy-quiet-grid\",\n  \"minHeight\": 760,\n  \"eyebrow\": \"Try it\",\n  \"title\": \"Grant, withhold, then act as someone.\",\n  \"intro\": \"Toggle what each role may do. Switch between “roles only” and “roles plus scope”. Then act as a person, try an action, and read the rule that decided it.\",\n  \"roles\": [\n    {\n      \"id\": \"viewer\",\n      \"label\": \"Viewer\",\n      \"grants\": [\n        \"view\"\n      ],\n      \"scoped\": []\n    },\n    {\n      \"id\": \"agent\",\n      \"label\": \"Support agent\",\n      \"grants\": [\n        \"view\",\n        \"note\",\n        \"refund\"\n      ],\n      \"scoped\": [\n        \"note\",\n        \"refund\"\n      ]\n    },\n    {\n      \"id\": \"lead\",\n      \"label\": \"Team lead\",\n      \"grants\": [\n        \"view\",\n        \"note\",\n        \"refund\",\n        \"export\"\n      ],\n      \"scoped\": [\n        \"note\"\n      ]\n    },\n    {\n      \"id\": \"admin\",\n      \"label\": \"Administrator\",\n      \"grants\": [\n        \"view\",\n        \"note\",\n        \"refund\",\n        \"export\",\n        \"roles\"\n      ],\n      \"scoped\": []\n    }\n  ],\n  \"actions\": [\n    {\n      \"id\": \"view\",\n      \"label\": \"View orders\",\n      \"owned\": false\n    },\n    {\n      \"id\": \"note\",\n      \"label\": \"Add a note\",\n      \"owned\": true\n    },\n    {\n      \"id\": \"refund\",\n      \"label\": \"Issue a refund\",\n      \"owned\": true\n    },\n    {\n      \"id\": \"export\",\n      \"label\": \"Export customers\",\n      \"owned\": false\n    },\n    {\n      \"id\": \"roles\",\n      \"label\": \"Change roles\",\n      \"owned\": false\n    }\n  ],\n  \"note\": \"An illustration of the idea. The roles and actions are invented for the demonstration and do not describe any real system.\"\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"permissionMatrix\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
