/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "A titled list of disclosures (eased height, a scrambling code on hover, a plus that turns). Plain-text bodies are wrapped in a paragraph here so page data stays plain JSON.",
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
      "name": "items",
      "type": "Array<{ id: string; title: string; meta: string; body: string }>",
      "description": "Host-supplied items; see the complete working data example below."
    },
    {
      "name": "defaultOpen",
      "type": "string",
      "description": "Host-supplied defaultOpen; see the complete working data example below."
    },
    {
      "name": "single",
      "description": "Optional single. Refer to the source defaults and working composition."
    },
    {
      "name": "variant",
      "description": "Optional variant. Refer to the source defaults and working composition."
    },
    {
      "name": "note",
      "description": "Optional note. Refer to the source defaults and working composition."
    },
    {
      "name": "marker",
      "type": "string",
      "description": "Host-supplied marker; see the complete working data example below."
    }
  ],
  "examples": [
    {
      "title": "Compose through signature block",
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"accordionList\",\n  \"anchor\": \"principles\",\n  \"railLabel\": \"How North builds\",\n  \"scene\": \"privacy-quiet-grid\",\n  \"minHeight\": 560,\n  \"eyebrow\": \"Engineering principles\",\n  \"title\": \"How North builds.\",\n  \"intro\": \"Six habits that shape the work. Open any of them.\",\n  \"defaultOpen\": \"e-01\",\n  \"marker\": \"north.principles-accordion\",\n  \"items\": [\n    {\n      \"id\": \"e-01\",\n      \"title\": \"Foundations first\",\n      \"meta\": \"ENG.01\",\n      \"body\": \"Start with the data model, constraints, and service boundaries before committing to an interface.\"\n    },\n    {\n      \"id\": \"e-02\",\n      \"title\": \"Systems, not screens\",\n      \"meta\": \"ENG.02\",\n      \"body\": \"Design interactions and reusable components for the workflow rather than isolated page states.\"\n    },\n    {\n      \"id\": \"e-03\",\n      \"title\": \"Scoped by design\",\n      \"meta\": \"ENG.03\",\n      \"body\": \"Model roles, access, and data ownership as part of the architecture.\"\n    },\n    {\n      \"id\": \"e-04\",\n      \"title\": \"Observe what matters\",\n      \"meta\": \"ENG.04\",\n      \"body\": \"Identify the signals needed to understand behavior and failure before a system is released.\"\n    },\n    {\n      \"id\": \"e-05\",\n      \"title\": \"Reversible decisions\",\n      \"meta\": \"ENG.05\",\n      \"body\": \"Prefer changes with a recovery path and isolate those that cannot be undone.\"\n    },\n    {\n      \"id\": \"e-06\",\n      \"title\": \"Quiet by default\",\n      \"meta\": \"ENG.06\",\n      \"body\": \"Surface useful state without turning every screen into an alarm.\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"accordionList\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
