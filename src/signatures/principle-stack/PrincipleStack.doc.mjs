/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Principles as a deck of cards that stack as you scroll: each card sticks just below the last, so the next one slides over it like a card laid on a pile (pure CSS `position: sticky`).",
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
      "name": "principles",
      "type": "Array<{ code: string; title: string; body: string; practice: string; glyph: string }>",
      "description": "Host-supplied principles; see the complete working data example below."
    }
  ],
  "examples": [
    {
      "title": "Compose through signature block",
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"principleStack\",\n  \"anchor\": \"principles\",\n  \"railLabel\": \"The six\",\n  \"scene\": \"privacy-quiet-grid\",\n  \"minHeight\": 900,\n  \"eyebrow\": \"Operating principles\",\n  \"title\": \"Six rules that hold the work together.\",\n  \"intro\": \"Scroll — each card lays itself over the last, like a deck being dealt.\",\n  \"principles\": [\n    {\n      \"code\": \"01\",\n      \"title\": \"Controlled complexity\",\n      \"body\": \"Depth is engineered, never improvised. Systems hold weight without leaking it to the surface.\",\n      \"practice\": \"Depth lives in the model and its boundaries. The surface shows only what the moment needs.\",\n      \"glyph\": \"layers\"\n    },\n    {\n      \"code\": \"02\",\n      \"title\": \"Interfaces before noise\",\n      \"body\": \"A surface should resolve intent in a single read. Everything that does not serve clarity is removed.\",\n      \"practice\": \"A view resolves intent in a single read. Anything that does not help someone decide or act is removed.\",\n      \"glyph\": \"lens\"\n    },\n    {\n      \"code\": \"03\",\n      \"title\": \"Motion with purpose\",\n      \"body\": \"Movement carries meaning — state, direction, hierarchy. Nothing moves to decorate.\",\n      \"practice\": \"Every transition reports state, direction or hierarchy. If a movement only decorates, it goes.\",\n      \"glyph\": \"wave\"\n    },\n    {\n      \"code\": \"04\",\n      \"title\": \"Architecture that can expand\",\n      \"body\": \"Foundations are laid for systems that have not been announced yet. Growth is a property, not a rewrite.\",\n      \"practice\": \"Foundations are laid for what is not yet announced, so growth is an addition rather than a rewrite.\",\n      \"glyph\": \"stack\"\n    },\n    {\n      \"code\": \"05\",\n      \"title\": \"Reveal only what is needed\",\n      \"body\": \"Access is scoped. Information surfaces by role, by context, by intent — never by default.\",\n      \"practice\": \"Information is scoped by role, context and intent before it ever reaches a screen.\",\n      \"glyph\": \"key\"\n    },\n    {\n      \"code\": \"06\",\n      \"title\": \"Production-minded prototypes\",\n      \"body\": \"Fast iteration on foundations that are already built to survive contact with real operations.\",\n      \"practice\": \"Early versions sit on foundations that can survive real use, so a prototype is a first release, not a throwaway.\",\n      \"glyph\": \"spark\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"principleStack\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
