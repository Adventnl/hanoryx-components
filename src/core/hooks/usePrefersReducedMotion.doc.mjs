/* Usage contract maintained beside the implementation. */
export const docs = {
  "summary": "Reactively tracks the user's reduced-motion preference. Components use this to gate or simplify expensive animation.",
  "origin": "hanoryx-web",
  "returns": "Boolean reflecting the prefers-reduced-motion media query.",
  "examples": [
    {
      "title": "Inside a React component",
      "code": "import { usePrefersReducedMotion } from 'hanoryx-components/core';\nconst reduced = usePrefersReducedMotion();\n// Disable nonessential motion when reduced is true."
    }
  ],
  "notes": [
    "Call this hook unconditionally at the top level of a React component.",
    "Browser effects clean up when the component unmounts. See the source for all optional arguments."
  ],
  "subcomponents": {}
};
