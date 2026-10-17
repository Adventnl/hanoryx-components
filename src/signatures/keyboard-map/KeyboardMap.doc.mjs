/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "A keyboard you can press — or tap. Each key that does something on this site is drawn as a keycap; press the real key (or tap the cap) and it lights and says what it does here.",
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
      "name": "keys",
      "type": "Array<{ id: string; label: string; wide: boolean; match: Array<string>; does: string }>",
      "description": "Host-supplied keys; see the complete working data example below."
    },
    {
      "name": "rows",
      "type": "Array<Array<string>>",
      "description": "Host-supplied rows; see the complete working data example below."
    },
    {
      "name": "hint",
      "type": "string",
      "description": "Host-supplied hint; see the complete working data example below."
    },
    {
      "name": "note",
      "description": "Optional note. Refer to the source defaults and working composition."
    }
  ],
  "examples": [
    {
      "title": "Compose through signature block",
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"keyboardMap\",\n  \"anchor\": \"keys\",\n  \"railLabel\": \"The keyboard\",\n  \"scene\": \"architectural-grid\",\n  \"minHeight\": 520,\n  \"eyebrow\": \"The keyboard\",\n  \"title\": \"Press a key. See what it does here.\",\n  \"intro\": \"Every key that does something on this site is drawn below. Press the real key, or tap a cap to read it.\",\n  \"keys\": [\n    {\n      \"id\": \"esc\",\n      \"label\": \"Esc\",\n      \"wide\": true,\n      \"match\": [\n        \"Escape\"\n      ],\n      \"does\": \"Closes search, menus and overlays, and returns focus to where you were.\"\n    },\n    {\n      \"id\": \"tab\",\n      \"label\": \"Tab\",\n      \"wide\": true,\n      \"match\": [\n        \"Tab\"\n      ],\n      \"does\": \"Moves focus to the next link or control, in reading order. Shift + Tab goes back. A visible ring shows where you are.\"\n    },\n    {\n      \"id\": \"enter\",\n      \"label\": \"Enter\",\n      \"wide\": true,\n      \"match\": [\n        \"Enter\"\n      ],\n      \"does\": \"Activates the focused link or button, and opens the highlighted result in search.\"\n    },\n    {\n      \"id\": \"space\",\n      \"label\": \"Space\",\n      \"wide\": true,\n      \"match\": [\n        \" \"\n      ],\n      \"does\": \"Activates the focused button, switch or checkbox.\"\n    },\n    {\n      \"id\": \"mod\",\n      \"label\": \"Ctrl / ⌘\",\n      \"wide\": true,\n      \"match\": [\n        \"Control\",\n        \"Meta\"\n      ],\n      \"does\": \"With K, opens the search from anywhere on the site.\"\n    },\n    {\n      \"id\": \"k\",\n      \"label\": \"K\",\n      \"match\": [\n        \"k\",\n        \"K\"\n      ],\n      \"does\": \"With Ctrl or ⌘, opens the search.\"\n    },\n    {\n      \"id\": \"slash\",\n      \"label\": \"/\",\n      \"match\": [\n        \"/\"\n      ],\n      \"does\": \"Also opens the search, whenever you are not typing in a field.\"\n    },\n    {\n      \"id\": \"help\",\n      \"label\": \"?\",\n      \"match\": [\n        \"?\"\n      ],\n      \"does\": \"Opens the shortcuts panel, a short list of these keys.\"\n    },\n    {\n      \"id\": \"b\",\n      \"label\": \"B\",\n      \"match\": [\n        \"b\",\n        \"B\"\n      ],\n      \"does\": \"Switches blueprint mode on and off, which outlines and names the marked parts of the page.\"\n    },\n    {\n      \"id\": \"left\",\n      \"label\": \"←\",\n      \"match\": [\n        \"ArrowLeft\"\n      ],\n      \"does\": \"Moves within tab lists, sliders, carousels and the timeline.\"\n    },\n    {\n      \"id\": \"up\",\n      \"label\": \"↑\",\n      \"match\": [\n        \"ArrowUp\"\n      ],\n      \"does\": \"Moves within lists, search results and radio groups.\"\n    },\n    {\n      \"id\": \"down\",\n      \"label\": \"↓\",\n      \"match\": [\n        \"ArrowDown\"\n      ],\n      \"does\": \"Moves within lists, search results and radio groups.\"\n    },\n    {\n      \"id\": \"right\",\n      \"label\": \"→\",\n      \"match\": [\n        \"ArrowRight\"\n      ],\n      \"does\": \"Moves within tab lists, sliders, carousels and the timeline.\"\n    },\n    {\n      \"id\": \"home\",\n      \"label\": \"Home\",\n      \"match\": [\n        \"Home\"\n      ],\n      \"does\": \"Jumps to the first item in a tab list or slider.\"\n    },\n    {\n      \"id\": \"end\",\n      \"label\": \"End\",\n      \"match\": [\n        \"End\"\n      ],\n      \"does\": \"Jumps to the last item in a tab list or slider.\"\n    }\n  ],\n  \"rows\": [\n    [\n      \"esc\",\n      \"tab\",\n      \"enter\",\n      \"space\"\n    ],\n    [\n      \"mod\",\n      \"k\",\n      \"slash\",\n      \"help\",\n      \"b\"\n    ],\n    [\n      \"left\",\n      \"up\",\n      \"down\",\n      \"right\",\n      \"home\",\n      \"end\"\n    ]\n  ],\n  \"hint\": \"Keys are only watched while this map is on screen, and never while you are typing in a field. Nothing is intercepted.\"\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"keyboardMap\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
