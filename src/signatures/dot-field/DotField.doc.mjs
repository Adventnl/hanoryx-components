/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Hero object for the internal-CRM page: a dense field of ~750 dots — the feeling of a very large set, not a claim about one. A soft lens follows the pointer and pulls the dots near it into focus (bigger, brighter, red at the core);",
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
      "code": "import { PageHero } from 'hanoryx-components/page';\n<PageHero hero={{\n  \"scene\": \"data-rain\",\n  \"intensity\": \"hero\",\n  \"eyebrow\": \"Work / 04 · Supporting study\",\n  \"title\": \"Built for very large data sets.\",\n  \"intro\": \"An internal CRM and data system, designed to stay usable when the data set is very large. It is internal — not a public product.\",\n  \"code\": \"WRK.04\",\n  \"status\": \"SUPPORTING STUDY\",\n  \"actions\": [\n    {\n      \"label\": \"Back to the first project\",\n      \"to\": \"/work/musebase\"\n    },\n    {\n      \"label\": \"All work\",\n      \"to\": \"/work\",\n      \"variant\": \"outline\"\n    }\n  ],\n  \"aside\": {\n    \"kind\": \"dotField\",\n    \"caption\": \"A dense field — hover to focus\"\n  }\n}} />"
    }
  ],
  "notes": [
    "Registered as hero.aside, kind=\"dotField\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
