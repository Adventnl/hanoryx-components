/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Every legal document in one place. The title, section count and reading time of each card are read from the document itself, and the bar along the bottom is its shape: one segment per section, as wide as the section is long.",
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
      "name": "docs",
      "type": "Array<{ key: string; kind: string; blurb: string }>",
      "description": "Host-supplied docs; see the complete working data example below."
    }
  ],
  "examples": [
    {
      "title": "Compose through signature block",
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"legalCentre\",\n  \"anchor\": \"documents\",\n  \"railLabel\": \"The documents\",\n  \"scene\": \"privacy-quiet-grid\",\n  \"minHeight\": 780,\n  \"eyebrow\": \"The documents\",\n  \"title\": \"Choose a document.\",\n  \"intro\": \"Each card shows how long the document is and how it is built: one segment for every section, as wide as the section is long.\",\n  \"docs\": [\n    {\n      \"key\": \"legal/privacy\",\n      \"kind\": \"Policy\",\n      \"blurb\": \"What the site asks for, what your browser keeps, and which connections are made.\"\n    },\n    {\n      \"key\": \"legal/terms\",\n      \"kind\": \"Policy\",\n      \"blurb\": \"What the site is, what you may do with it, and where its limits lie.\"\n    },\n    {\n      \"key\": \"legal/cookies\",\n      \"kind\": \"Policy\",\n      \"blurb\": \"Every item the site stores in your browser, why, for how long, and how to remove it.\"\n    },\n    {\n      \"key\": \"legal/acceptable-use\",\n      \"kind\": \"Policy\",\n      \"blurb\": \"Ground rules for visiting, linking to and building on the site.\"\n    },\n    {\n      \"key\": \"legal/retention\",\n      \"kind\": \"Policy\",\n      \"blurb\": \"For each thing the site touches, where it lives and when it goes.\"\n    },\n    {\n      \"key\": \"legal/copyright\",\n      \"kind\": \"Notice\",\n      \"blurb\": \"Who owns the site’s text, design, typefaces, code and names.\"\n    },\n    {\n      \"key\": \"legal/disclaimer\",\n      \"kind\": \"Notice\",\n      \"blurb\": \"What the site’s descriptions, demos, articles and figures are not.\"\n    },\n    {\n      \"key\": \"legal/linking\",\n      \"kind\": \"Notice\",\n      \"blurb\": \"How to link to the site well, and which addresses are stable.\"\n    },\n    {\n      \"key\": \"legal/accessibility\",\n      \"kind\": \"Statement\",\n      \"blurb\": \"What the site does to be usable, what has been checked, and where it falls short.\"\n    },\n    {\n      \"key\": \"legal/complaints\",\n      \"kind\": \"Statement\",\n      \"blurb\": \"How to tell the company something is wrong, and what happens next.\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"legalCentre\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
