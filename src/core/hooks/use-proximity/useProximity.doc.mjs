/* Usage contract maintained beside the implementation. */
export const docs = {
  "summary": "Pointer-proximity engine. Finds every `[data-prox]` unit inside `ref` and keeps a CSS variable --k (0..1) on each: 1 under the cursor, easing to 0 at `radius` px (smoothstep falloff).",
  "origin": "hanoryx-web",
  "returns": "No return value. Writes --k on each [data-prox] descendant; disabled for touch and reduced motion.",
  "examples": [
    {
      "title": "Inside a React component",
      "code": "import { useProximity } from 'hanoryx-components/core';\nconst ref = useRef(null);\nuseProximity(ref, { radius: 220 });\n<div ref={ref}><span data-prox>Near</span></div>"
    }
  ],
  "notes": [
    "Call this hook unconditionally at the top level of a React component.",
    "Browser effects clean up when the component unmounts. See the source for all optional arguments."
  ],
  "subcomponents": {}
};
