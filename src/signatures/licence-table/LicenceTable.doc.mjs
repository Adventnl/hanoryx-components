/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Every library and typeface the site is built with, its version and its licence, as published by the packages themselves. Filter, search, sort — and see at a glance which licences make up the whole.",
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
      "name": "note",
      "type": "string",
      "description": "Host-supplied note; see the complete working data example below."
    }
  ],
  "examples": [
    {
      "title": "Compose through signature block",
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"licenceTable\",\n  \"anchor\": \"list\",\n  \"railLabel\": \"The list\",\n  \"scene\": \"architectural-grid\",\n  \"minHeight\": 820,\n  \"eyebrow\": \"The list\",\n  \"title\": \"Twenty-four things, and their licences.\",\n  \"intro\": \"Search it, sort it, or filter to what ships to visitors. The bar shows how the licences are spread.\",\n  \"note\": \"Names, versions and licences are those published by each package, as recorded when the site was last built. Licence texts are in each package’s own repository. The three typefaces are delivered by Google Fonts under the SIL Open Font License.\"\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"licenceTable\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
