/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "A type scale: one base size multiplied again and again by one ratio, so the sizes belong together. Set the base and the ratio, see each step set in type, and copy the sizes as CSS custom properties.",
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"typeScaleTool\",\n  \"anchor\": \"tool\",\n  \"railLabel\": \"The scale\",\n  \"scene\": \"privacy-quiet-grid\",\n  \"minHeight\": 800,\n  \"eyebrow\": \"The scale\",\n  \"title\": \"A base, a ratio, some steps.\",\n  \"intro\": \"Slide the base size, pick a ratio, and choose how many steps to go down and up. The specimen is set in this site’s serif face; the CSS is ready to paste.\",\n  \"note\": \"Sizes in rem assume the browser’s default of 16 pixels to the rem. People who change their browser’s default will see everything scale with it, which is the point of using rem.\"\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"typeScaleTool\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
