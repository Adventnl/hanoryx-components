/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Hero object for the Musebase page: the real mark, set on a light plate like a physical card, in front of two more plates (the mark itself is a stack of planes).",
  "props": [
    {
      "name": "caption",
      "type": "string",
      "description": "Host-supplied caption; see the complete working data example below."
    }
  ],
  "examples": [
    {
      "title": "Compose through hero.aside",
      "code": "import { PageHero } from 'hanoryx-components/page';\n<PageHero hero={{\n  \"scene\": \"musebase-coordination\",\n  \"intensity\": \"hero\",\n  \"eyebrow\": \"Work / 01 · Primary project\",\n  \"title\": \"Coordination, held in one place.\",\n  \"intro\": \"Musebase is an advanced coordination application. It brings scheduling, communication and records into one environment, with access scoped to each role.\",\n  \"code\": \"WRK.01\",\n  \"status\": \"CASE STUDY\",\n  \"actions\": [\n    {\n      \"label\": \"Next: YK Engine\",\n      \"to\": \"/work/yk-engine\"\n    },\n    {\n      \"label\": \"All work\",\n      \"to\": \"/work\",\n      \"variant\": \"outline\"\n    }\n  ],\n  \"aside\": {\n    \"kind\": \"logoPlate\",\n    \"caption\": \"Musebase\"\n  }\n}} />"
    }
  ],
  "notes": [
    "Registered as hero.aside, kind=\"logoPlate\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
