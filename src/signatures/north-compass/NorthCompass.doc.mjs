/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Hero object for the development page: a compass whose four points are the four pillars of the team's work.",
  "props": [
    {
      "name": "pillars",
      "type": "Array<{ id: string; code: string; title: string; body: string }>",
      "description": "Host-supplied pillars; see the complete working data example below."
    },
    {
      "name": "caption",
      "type": "string",
      "description": "Host-supplied caption; see the complete working data example below."
    }
  ],
  "examples": [
    {
      "title": "Compose through hero.aside",
      "code": "import { PageHero } from 'hanoryx-components/page';\n<PageHero hero={{\n  \"scene\": \"topographic-lines\",\n  \"intensity\": \"hero\",\n  \"eyebrow\": \"Development / Hanoryx North\",\n  \"title\": \"The team behind the systems.\",\n  \"intro\": \"Hanoryx North is the development team behind Hanoryx Systems: platform architecture, interface systems, operational tooling and production-minded software engineering.\",\n  \"code\": \"DEV.00\",\n  \"status\": \"LIVE\",\n  \"actions\": [\n    {\n      \"label\": \"Engineering\",\n      \"to\": \"/north/engineering\"\n    },\n    {\n      \"label\": \"Selected work\",\n      \"to\": \"/work\",\n      \"variant\": \"outline\"\n    }\n  ],\n  \"aside\": {\n    \"kind\": \"northCompass\",\n    \"pillars\": [\n      {\n        \"id\": \"n-01\",\n        \"code\": \"N.ARCH\",\n        \"title\": \"Platform architecture\",\n        \"body\": \"Service boundaries, data models, and orchestration layers designed to carry operational load without ceremony.\"\n      },\n      {\n        \"id\": \"n-02\",\n        \"code\": \"N.IFACE\",\n        \"title\": \"Interface systems\",\n        \"body\": \"Component systems and interaction models built as a controlled language, not a collection of screens.\"\n      },\n      {\n        \"id\": \"n-03\",\n        \"code\": \"N.ORCH\",\n        \"title\": \"Orchestration & automation\",\n        \"body\": \"Internal tooling that removes manual operational drag and keeps multi-role coordination predictable.\"\n      },\n      {\n        \"id\": \"n-04\",\n        \"code\": \"N.PROTO\",\n        \"title\": \"Production-minded prototyping\",\n        \"body\": \"Applied software engineering that ships fast, then hardens — foundations first, surface second.\"\n      }\n    ],\n    \"caption\": \"Move the pointer around the dial, or tap a point. Each point is a pillar of the work.\"\n  }\n}} />"
    }
  ],
  "notes": [
    "Registered as hero.aside, kind=\"northCompass\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
