/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Pull one part out of the stack and see what goes with it. A way of asking how much each dependency really carries. The judgements are ours; the file counts were taken when the page was written.",
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
      "name": "parts",
      "type": "Array<{ id: string; name: string; kind: string; headline: string; stops: string; keeps: string; effort: string; how: string; files: number }>",
      "description": "Host-supplied parts; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"whatIfRemove\",\n  \"anchor\": \"remove\",\n  \"scene\": \"node-compression\",\n  \"tag\": \"End of the stack\",\n  \"minHeight\": 640,\n  \"title\": \"Pull one out.\",\n  \"lede\": \"Choose a part of the stack and take it away in your head. The card says what stops, what carries on and what it would cost to replace. The judgements are ours.\",\n  \"parts\": [\n    {\n      \"id\": \"lenis\",\n      \"name\": \"lenis\",\n      \"kind\": \"Runtime\",\n      \"headline\": \"Scrolling would be the browser’s own.\",\n      \"stops\": \"The smooth, eased scrolling and the glide to a section when a link points at one.\",\n      \"keeps\": \"Every page, every link and all content. Scroll-linked effects would still read the scroll position.\",\n      \"effort\": \"Small\",\n      \"how\": \"It lives behind one provider and one hook. Change what the hook returns and the callers carry on.\",\n      \"files\": 1\n    },\n    {\n      \"id\": \"gsap\",\n      \"name\": \"gsap\",\n      \"kind\": \"Runtime\",\n      \"headline\": \"The timelines and the pointer-driven effects go.\",\n      \"stops\": \"The intro sequence, the custom cursor, magnetic buttons, the title that answers the pointer and the marquee that scroll speed pushes.\",\n      \"keeps\": \"Content, routing, layout and the canvases. The entrance reveals use the other animation library and would carry on.\",\n      \"effort\": \"Medium\",\n      \"how\": \"Each effect is its own component. They could be dropped one by one, or rewritten with CSS and the other library.\",\n      \"files\": 17\n    },\n    {\n      \"id\": \"motion\",\n      \"name\": \"motion\",\n      \"kind\": \"Runtime\",\n      \"headline\": \"Things would arrive and change without easing.\",\n      \"stops\": \"The entrance reveals as sections scroll into view, page transitions, and the springs and glides in menus, tabs and panels.\",\n      \"keeps\": \"All content and function. Controls would still work, and change state at once.\",\n      \"effort\": \"Large\",\n      \"how\": \"It is used widely. Most uses could become CSS transitions or animations; the layout transitions are the hard part.\",\n      \"files\": 22\n    },\n    {\n      \"id\": \"router\",\n      \"name\": \"react-router-dom\",\n      \"kind\": \"Runtime\",\n      \"headline\": \"There would be one page.\",\n      \"stops\": \"Every page address, every link between pages and the back button’s meaning.\",\n      \"keeps\": \"Components and styles. The content would have nowhere to be addressed.\",\n      \"effort\": \"Large\",\n      \"how\": \"Routing is the skeleton of the site. Replacing it with another router is realistic; removing it is not.\",\n      \"files\": 40\n    },\n    {\n      \"id\": \"icons\",\n      \"name\": \"lucide-react\",\n      \"kind\": \"Runtime\",\n      \"headline\": \"The small line icons disappear.\",\n      \"stops\": \"Arrows, chevrons, and the pictograms on buttons and cards.\",\n      \"keeps\": \"All text and behaviour. Controls keep their labels.\",\n      \"effort\": \"Medium\",\n      \"how\": \"Replace with inline SVGs, one icon at a time. Tedious rather than hard.\",\n      \"files\": 100\n    },\n    {\n      \"id\": \"clsx\",\n      \"name\": \"clsx\",\n      \"kind\": \"Runtime\",\n      \"headline\": \"Class names would be joined by hand.\",\n      \"stops\": \"Nothing visible; a convenience for conditional class names.\",\n      \"keeps\": \"Everything.\",\n      \"effort\": \"Small\",\n      \"how\": \"It does one tiny job; template strings could do it, at the price of tidiness.\",\n      \"files\": 146\n    },\n    {\n      \"id\": \"canvas\",\n      \"name\": \"The canvas scenes\",\n      \"kind\": \"Ours\",\n      \"headline\": \"The backgrounds would be plain.\",\n      \"stops\": \"The animated backgrounds behind every section and hero.\",\n      \"keeps\": \"All content and function. Calm mode already shows pages without moving backgrounds.\",\n      \"effort\": \"Small\",\n      \"how\": \"Sections declare a scene by name. Removing them leaves a quiet page that works.\",\n      \"files\": null\n    }\n  ],\n  \"onward\": [\n    {\n      \"label\": \"Licences and notices\",\n      \"to\": \"/trust/licences\"\n    },\n    {\n      \"label\": \"Site engineering\",\n      \"to\": \"/engineering\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"whatIfRemove\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
