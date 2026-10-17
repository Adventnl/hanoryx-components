/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Break it on purpose. Spin for a way things go wrong, read what should happen and how to rehearse it, and mark the ones you have tried. A wheel because the failure you rehearse is usually the one you thought of; this picks another.",
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
      "name": "scenarios",
      "type": "Array<{ id: string; name: string; happens: string; should: string; test: string }>",
      "description": "Host-supplied scenarios; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"chaosWheel\",\n  \"anchor\": \"chaos\",\n  \"scene\": \"topology-pulse\",\n  \"tag\": \"End of quality\",\n  \"minHeight\": 700,\n  \"title\": \"Break it on purpose.\",\n  \"lede\": \"Spin the wheel for a way things go wrong, read what should happen, and how to rehearse it. Mark the ones you have actually tried.\",\n  \"scenarios\": [\n    {\n      \"id\": \"dep\",\n      \"name\": \"A dependency is down\",\n      \"happens\": \"A service you call stops answering, or answers slowly.\",\n      \"should\": \"The page says so plainly, the rest of it keeps working, and the call gives up after a sensible time.\",\n      \"test\": \"Point the call at an address that never answers. Does anything hang? Is the message honest?\"\n    },\n    {\n      \"id\": \"dup\",\n      \"name\": \"The same request arrives twice\",\n      \"happens\": \"A person double-clicks, or a network retries.\",\n      \"should\": \"One effect, and the same answer both times.\",\n      \"test\": \"Send the request twice at once, and twice with the answer thrown away between.\"\n    },\n    {\n      \"id\": \"big\",\n      \"name\": \"The input is enormous\",\n      \"happens\": \"Someone pastes a million characters, or uploads a vast file.\",\n      \"should\": \"It is refused clearly, quickly and without taking the server down.\",\n      \"test\": \"Send a body many times larger than any real one and watch memory and time.\"\n    },\n    {\n      \"id\": \"empty\",\n      \"name\": \"The list is empty\",\n      \"happens\": \"No orders, no results, no messages yet.\",\n      \"should\": \"A page that explains the emptiness and what to do about it, not a blank or an error.\",\n      \"test\": \"Open every list with no data. Look at the words as well as the layout.\"\n    },\n    {\n      \"id\": \"clock\",\n      \"name\": \"The clock jumps\",\n      \"happens\": \"Daylight saving changes, or a server’s time is corrected.\",\n      \"should\": \"Schedules run once, durations stay positive and times are stored in UTC.\",\n      \"test\": \"Run the scheduling code with the clock set to the hour before a change.\"\n    },\n    {\n      \"id\": \"disk\",\n      \"name\": \"The disk fills up\",\n      \"happens\": \"Logs or uploads use every last byte.\",\n      \"should\": \"Writes fail loudly, alerts fire and nothing is silently lost.\",\n      \"test\": \"Fill a small disk in a test environment and watch what breaks first.\"\n    },\n    {\n      \"id\": \"slow\",\n      \"name\": \"The network is slow\",\n      \"happens\": \"A phone on a weak connection, a long way from the server.\",\n      \"should\": \"Something useful appears early, and nothing jumps around as the rest arrives.\",\n      \"test\": \"Throttle the connection in the browser’s tools and load the heaviest page.\"\n    },\n    {\n      \"id\": \"perm\",\n      \"name\": \"Someone changes an id\",\n      \"happens\": \"A person edits the number in an address to see what is next.\",\n      \"should\": \"They see only what they are allowed to, and learn nothing about what exists.\",\n      \"test\": \"Sign in as one user and request another user’s record by id.\"\n    }\n  ],\n  \"onward\": [\n    {\n      \"label\": \"Engineering handbook\",\n      \"to\": \"/north/handbook\"\n    },\n    {\n      \"label\": \"Readiness check\",\n      \"to\": \"/resources/tools/readiness\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"chaosWheel\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
