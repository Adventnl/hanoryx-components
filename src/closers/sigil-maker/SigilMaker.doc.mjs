/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "A figure drawn from a word. The same word always draws the same shape, so it is a signature rather than a random picture. Download it as an SVG.",
  "props": [
    {
      "name": "tag",
      "type": "string",
      "description": "Host-supplied tag; see the complete working data example below."
    },
    {
      "name": "title",
      "type": "string",
      "description": "Host-supplied title; see the complete working data example below."
    },
    {
      "name": "lede",
      "type": "string",
      "description": "Host-supplied lede; see the complete working data example below."
    },
    {
      "name": "onward",
      "type": "Array<{ label: string; to: string }>",
      "description": "Host-supplied onward; see the complete working data example below."
    }
  ],
  "examples": [
    {
      "title": "Compose through closer block",
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"sigilMaker\",\n  \"anchor\": \"sigil\",\n  \"scene\": \"magnetic-particles\",\n  \"tag\": \"End of the visual lab\",\n  \"minHeight\": 640,\n  \"title\": \"Draw a figure from a word.\",\n  \"lede\": \"A seeded drawing: the same word always makes the same shape, so it is a signature rather than a random picture. Change the rings and spokes, then download it as an SVG.\",\n  \"onward\": [\n    {\n      \"label\": \"Interface lab\",\n      \"to\": \"/north/interface-lab\"\n    },\n    {\n      \"label\": \"Motion systems\",\n      \"to\": \"/north/motion-systems\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"sigilMaker\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
