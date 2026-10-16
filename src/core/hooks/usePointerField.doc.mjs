/* Usage contract maintained beside the implementation. */
export const docs = {
  "summary": "Writes the pointer's position INSIDE an element to CSS variables, so any descendant can respond with pure CSS (transforms, gradients, parallax).",
  "origin": "hanoryx-web",
  "returns": "No return value. Writes --px/--py, --mx/--my and data-hot on the attached element.",
  "examples": [
    {
      "title": "Inside a React component",
      "code": "import { usePointerField } from 'hanoryx-components/core';\nconst ref = useRef(null);\nusePointerField(ref);\n<div ref={ref}>Pointer-responsive surface</div>"
    }
  ],
  "notes": [
    "Call this hook unconditionally at the top level of a React component.",
    "Browser effects clean up when the component unmounts. See the source for all optional arguments."
  ],
  "subcomponents": {}
};
