/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "The mark, used wrongly six ways and rightly once — each tile carrying the one-line reason. The wrong versions are real transforms of the real file.",
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
      "name": "tiles",
      "type": "Array<{ id: string; right: boolean; name: string; why: string; style: {  } }>",
      "description": "Host-supplied tiles; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"markMisuse\",\n  \"scene\": \"voronoi-cell\",\n  \"tag\": \"End of the brand page\",\n  \"minHeight\": 560,\n  \"title\": \"Six ways not to, and the one way to.\",\n  \"lede\": \"Each tile is the real mark, treated the wrong way. The first is how the site shows it.\",\n  \"tiles\": [\n    {\n      \"id\": \"right\",\n      \"right\": true,\n      \"name\": \"As the site shows it\",\n      \"why\": \"Square, unaltered, on near-black, with room around it.\",\n      \"style\": {}\n    },\n    {\n      \"id\": \"stretch\",\n      \"name\": \"Stretched\",\n      \"why\": \"The mark is square. Never squash or widen it.\",\n      \"style\": {\n        \"width\": \"132px\",\n        \"height\": \"54px\",\n        \"objectFit\": \"fill\"\n      }\n    },\n    {\n      \"id\": \"rotate\",\n      \"name\": \"Rotated\",\n      \"why\": \"It always stands upright.\",\n      \"style\": {\n        \"transform\": \"rotate(18deg)\"\n      }\n    },\n    {\n      \"id\": \"recolour\",\n      \"name\": \"Recoloured\",\n      \"why\": \"The red is the red. Do not shift its hue.\",\n      \"style\": {\n        \"filter\": \"hue-rotate(190deg) saturate(1.6)\"\n      }\n    },\n    {\n      \"id\": \"effects\",\n      \"name\": \"Glows and shadows\",\n      \"why\": \"No effects. The mark is flat.\",\n      \"style\": {\n        \"boxShadow\": \"0 0 28px 8px rgba(255,255,255,0.7)\"\n      }\n    },\n    {\n      \"id\": \"crowd\",\n      \"name\": \"Crowded\",\n      \"why\": \"Keep clear space. Nothing should touch or crop it.\",\n      \"style\": {\n        \"transform\": \"translateX(54px) scale(1.4)\"\n      }\n    },\n    {\n      \"id\": \"faint\",\n      \"name\": \"Faded\",\n      \"why\": \"Do not lower its contrast against the ground.\",\n      \"style\": {\n        \"opacity\": 0.22\n      }\n    }\n  ],\n  \"onward\": [\n    {\n      \"label\": \"Press & media\",\n      \"to\": \"/company/press\"\n    },\n    {\n      \"label\": \"Copyright & marks\",\n      \"to\": \"/legal/copyright\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"markMisuse\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
