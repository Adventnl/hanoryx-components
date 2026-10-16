/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Hero object for the customer-product page: six abstract tiles. Tap one to \"add\" it — it lifts, takes a tick, and the basket count rolls up. A tiny taste of the experience; the tiles are shapes, not products.",
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
      "code": "import { PageHero } from 'hanoryx-components/page';\n<PageHero hero={{\n  \"scene\": \"commerce-pipeline\",\n  \"intensity\": \"hero\",\n  \"eyebrow\": \"Work / 03 · Supporting study\",\n  \"title\": \"From first look to a confirmed purchase.\",\n  \"intro\": \"A customer-facing product built around the shopping and transaction experience. It is unnamed by design.\",\n  \"code\": \"WRK.03\",\n  \"status\": \"SUPPORTING STUDY\",\n  \"actions\": [\n    {\n      \"label\": \"Next: Internal CRM\",\n      \"to\": \"/work/internal-crm\"\n    },\n    {\n      \"label\": \"All work\",\n      \"to\": \"/work\",\n      \"variant\": \"outline\"\n    }\n  ],\n  \"aside\": {\n    \"kind\": \"basketAside\",\n    \"caption\": \"Abstract tiles — tap to add\"\n  }\n}} />"
    }
  ],
  "notes": [
    "Registered as hero.aside, kind=\"basketAside\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
