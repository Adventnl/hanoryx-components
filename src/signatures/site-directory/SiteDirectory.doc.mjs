/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "A directory of every page on the site, built from the same page data that renders them. Type to filter (title, path and the page's opening line), or press \"Take me somewhere\" to land on a page at random.",
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
    }
  ],
  "examples": [
    {
      "title": "Compose through signature block",
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"siteDirectory\",\n  \"anchor\": \"directory\",\n  \"railLabel\": \"The directory\",\n  \"scene\": \"privacy-quiet-grid\",\n  \"minHeight\": 900,\n  \"eyebrow\": \"The directory\",\n  \"title\": \"Find a page.\",\n  \"intro\": \"Type a word and the list narrows as you go. Enter opens a single match.\"\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"siteDirectory\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
