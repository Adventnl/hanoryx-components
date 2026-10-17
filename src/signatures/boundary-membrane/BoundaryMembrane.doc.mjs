/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "The line between inside and outside. Twelve records sit behind a membrane; choose a role and the records that role may reach cross to the outside while the rest stay where they are.",
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
      "name": "records",
      "type": "Array<{ id: string; name: string; visibleTo: Array<string> }>",
      "description": "Host-supplied records; see the complete working data example below."
    },
    {
      "name": "roles",
      "type": "Array<{ id: string; label: string; line: string }>",
      "description": "Host-supplied roles; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"boundaryMembrane\",\n  \"anchor\": \"membrane\",\n  \"railLabel\": \"The boundary\",\n  \"scene\": \"privacy-quiet-grid\",\n  \"minHeight\": 700,\n  \"eyebrow\": \"The boundary\",\n  \"title\": \"The line between inside and outside is engineered, not assumed.\",\n  \"intro\": \"Twelve records sit behind a membrane. Choose a role and watch which of them cross to the outside.\",\n  \"roles\": [\n    {\n      \"id\": \"guest\",\n      \"label\": \"Guest\",\n      \"line\": \"A visitor with no account: only what is public.\"\n    },\n    {\n      \"id\": \"client\",\n      \"label\": \"Client\",\n      \"line\": \"Someone the operation serves: their own schedule, documents and messages.\"\n    },\n    {\n      \"id\": \"partner\",\n      \"label\": \"Partner\",\n      \"line\": \"Someone working alongside the operation: shared plans and hand-over material.\"\n    },\n    {\n      \"id\": \"staff\",\n      \"label\": \"Staff\",\n      \"line\": \"Someone inside the operation, with broad access to run it.\"\n    }\n  ],\n  \"records\": [\n    {\n      \"id\": \"a\",\n      \"name\": \"Public notice\",\n      \"visibleTo\": [\n        \"guest\",\n        \"client\",\n        \"partner\",\n        \"staff\"\n      ]\n    },\n    {\n      \"id\": \"b\",\n      \"name\": \"Schedule\",\n      \"visibleTo\": [\n        \"client\",\n        \"partner\",\n        \"staff\"\n      ]\n    },\n    {\n      \"id\": \"c\",\n      \"name\": \"Invoices\",\n      \"visibleTo\": [\n        \"client\",\n        \"staff\"\n      ]\n    },\n    {\n      \"id\": \"d\",\n      \"name\": \"Contract\",\n      \"visibleTo\": [\n        \"client\",\n        \"partner\",\n        \"staff\"\n      ]\n    },\n    {\n      \"id\": \"e\",\n      \"name\": \"Messages\",\n      \"visibleTo\": [\n        \"client\",\n        \"partner\",\n        \"staff\"\n      ]\n    },\n    {\n      \"id\": \"f\",\n      \"name\": \"Hand-over files\",\n      \"visibleTo\": [\n        \"partner\",\n        \"staff\"\n      ]\n    },\n    {\n      \"id\": \"g\",\n      \"name\": \"Team directory\",\n      \"visibleTo\": [\n        \"staff\"\n      ]\n    },\n    {\n      \"id\": \"h\",\n      \"name\": \"Audit log\",\n      \"visibleTo\": [\n        \"staff\"\n      ]\n    },\n    {\n      \"id\": \"i\",\n      \"name\": \"Settings\",\n      \"visibleTo\": [\n        \"staff\"\n      ]\n    },\n    {\n      \"id\": \"j\",\n      \"name\": \"Reports\",\n      \"visibleTo\": [\n        \"partner\",\n        \"staff\"\n      ]\n    },\n    {\n      \"id\": \"k\",\n      \"name\": \"Forms\",\n      \"visibleTo\": [\n        \"client\",\n        \"partner\",\n        \"staff\"\n      ]\n    },\n    {\n      \"id\": \"l\",\n      \"name\": \"Archive\",\n      \"visibleTo\": [\n        \"staff\"\n      ]\n    }\n  ],\n  \"note\": \"An illustration of scoping. In a real portal the boundary is implemented and tested in the backend; an interface alone cannot enforce it.\"\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"boundaryMembrane\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
