/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "The site's stack as slabs, top to bottom: what the visitor touches down to what builds it. Versions and licences are read from the same data as the licences page, so they cannot disagree with it.",
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
      "name": "layers",
      "type": "Array<{ id: string; name: string; blurb: string; packages: Array<object> }>",
      "description": "Host-supplied layers; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"stackMap\",\n  \"anchor\": \"stack\",\n  \"railLabel\": \"The stack\",\n  \"scene\": \"privacy-quiet-grid\",\n  \"minHeight\": 760,\n  \"eyebrow\": \"The stack\",\n  \"title\": \"From what you touch to what builds it.\",\n  \"intro\": \"Seven layers, top to bottom. Choose a part for its version, its licence and the reason it earned a place. Dashed parts are code written for this site.\",\n  \"layers\": [\n    {\n      \"id\": \"face\",\n      \"name\": \"The interface\",\n      \"blurb\": \"What a visitor sees and touches\",\n      \"packages\": [\n        {\n          \"name\": \"React components\",\n          \"why\": \"The pages are components. Page content lives in data files and is rendered by a small set of block types.\"\n        },\n        {\n          \"name\": \"CSS Modules\",\n          \"why\": \"Each component’s styles are local to it, with shared values coming from design tokens. No CSS framework.\"\n        },\n        {\n          \"name\": \"lucide-react\",\n          \"why\": \"The small line icons, imported one by one so that only the ones used are shipped.\"\n        },\n        {\n          \"name\": \"clsx\",\n          \"why\": \"Joins class names conditionally, in a few bytes.\"\n        }\n      ]\n    },\n    {\n      \"id\": \"motion\",\n      \"name\": \"Motion and drawing\",\n      \"blurb\": \"What moves, and how it is drawn\",\n      \"packages\": [\n        {\n          \"name\": \"gsap\",\n          \"why\": \"Timelines and pointer-driven effects, where precise sequencing is worth a library: the intro, the cursor, magnetic buttons and the text that answers the pointer.\"\n        },\n        {\n          \"name\": \"@gsap/react\",\n          \"why\": \"Connects GSAP to React’s lifecycle so animations are set up and cleaned up properly.\"\n        },\n        {\n          \"name\": \"motion\",\n          \"why\": \"The entrance reveals as sections arrive, page transitions, and the springs and glides in menus, tabs and panels.\"\n        },\n        {\n          \"name\": \"lenis\",\n          \"why\": \"Smooth scrolling, wrapped in one place so it can be removed without touching pages.\"\n        },\n        {\n          \"name\": \"Canvas scenes\",\n          \"why\": \"The animated backgrounds are plain drawing code on a canvas. No graphics library.\"\n        }\n      ]\n    },\n    {\n      \"id\": \"routing\",\n      \"name\": \"Routing and data\",\n      \"blurb\": \"How a page is found and filled\",\n      \"packages\": [\n        {\n          \"name\": \"react-router-dom\",\n          \"why\": \"Page addresses, links and navigation. Every page is a route.\"\n        },\n        {\n          \"name\": \"Page data files\",\n          \"why\": \"Each page is a data file loaded on demand, so a visitor downloads the page they are reading, not all of them.\"\n        }\n      ]\n    },\n    {\n      \"id\": \"framework\",\n      \"name\": \"The framework\",\n      \"blurb\": \"What it is all built on\",\n      \"packages\": [\n        {\n          \"name\": \"react\",\n          \"why\": \"The component model and state.\"\n        },\n        {\n          \"name\": \"react-dom\",\n          \"why\": \"Puts React’s output into the browser’s document.\"\n        }\n      ]\n    },\n    {\n      \"id\": \"build\",\n      \"name\": \"Build\",\n      \"blurb\": \"Turning source into a site\",\n      \"packages\": [\n        {\n          \"name\": \"vite\",\n          \"why\": \"A fast development server and the production bundler. It splits the site into pieces so pages load only what they use.\"\n        },\n        {\n          \"name\": \"@vitejs/plugin-react\",\n          \"why\": \"Teaches the build about React’s syntax.\"\n        }\n      ]\n    },\n    {\n      \"id\": \"checks\",\n      \"name\": \"Checks\",\n      \"blurb\": \"What guards each change\",\n      \"packages\": [\n        {\n          \"name\": \"eslint\",\n          \"why\": \"Reads the code and flags mistakes before it runs.\"\n        },\n        {\n          \"name\": \"eslint-plugin-react-hooks\",\n          \"why\": \"Catches the ways components go wrong: state set in the wrong place, impure rendering.\"\n        },\n        {\n          \"name\": \"playwright-core\",\n          \"why\": \"Drives a real browser through every page and interaction.\"\n        },\n        {\n          \"name\": \"axe-core\",\n          \"why\": \"Tests every page against accessibility rules.\"\n        }\n      ]\n    },\n    {\n      \"id\": \"deploy\",\n      \"name\": \"Deploy\",\n      \"blurb\": \"Putting it on the internet\",\n      \"packages\": [\n        {\n          \"name\": \"wrangler\",\n          \"why\": \"The tool that publishes the built site to its host.\"\n        }\n      ]\n    }\n  ],\n  \"note\": \"Versions and licences are read from the same data as the licences page. Layer membership is our own grouping.\"\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"stackMap\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
