/* Usage contract maintained beside the implementation. */
export const docs = {
  "summary": "Subscribes to a CSS media query without effect-driven state (so it is safe under the React 19 lint rules and never causes a cascading render).",
  "origin": "hanoryx-web",
  "returns": "Boolean matching the supplied query. serverDefault is used during server rendering.",
  "examples": [
    {
      "title": "Inside a React component",
      "code": "import { useMediaQuery } from 'hanoryx-components/core';\nconst wide = useMediaQuery(\"(min-width: 48rem)\");"
    }
  ],
  "notes": [
    "Call this hook unconditionally at the top level of a React component.",
    "Browser effects clean up when the component unmounts. See the source for all optional arguments."
  ],
  "subcomponents": {
    "useFinePointer": {
      "summary": "True for a mouse / trackpad (hover-capable, precise). Touch gets simpler, tap-first behaviour.",
      "origin": "hanoryx-web",
      "returns": "Boolean: true only for a hover-capable fine pointer.",
      "examples": [
        {
          "title": "Inside a React component",
          "code": "import { useFinePointer } from 'hanoryx-components/core';\nconst fine = useFinePointer();"
        }
      ],
      "notes": [
        "Call this hook unconditionally at the top level of a React component.",
        "Browser effects clean up when the component unmounts. See the source for all optional arguments."
      ]
    }
  }
};
