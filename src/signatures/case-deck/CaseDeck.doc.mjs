/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Hero object for the Work page: the four case studies as a deck of files. At rest they sit stacked with a slight fan; hover the deck and the cards spread out one by one, and the card under the pointer lifts. Each is a real link.",
  "props": [],
  "examples": [
    {
      "title": "Compose through hero.aside",
      "code": "import { PageHero } from 'hanoryx-components/page';\n<PageHero hero={{\n  \"scene\": \"node-compression\",\n  \"intensity\": \"hero\",\n  \"eyebrow\": \"Hanoryx Systems / Work\",\n  \"title\": \"Selected work.\",\n  \"intro\": \"Two primary projects and two quieter supporting studies — described plainly, without client names, dates or figures we cannot stand behind.\",\n  \"code\": \"WRK.00\",\n  \"status\": \"CASE STUDIES\",\n  \"actions\": [\n    {\n      \"label\": \"Musebase\",\n      \"to\": \"/work/musebase\"\n    },\n    {\n      \"label\": \"YK Engine\",\n      \"to\": \"/work/yk-engine\",\n      \"variant\": \"outline\"\n    }\n  ],\n  \"aside\": {\n    \"kind\": \"caseDeck\"\n  }\n}} />"
    }
  ],
  "notes": [
    "Registered as hero.aside, kind=\"caseDeck\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
