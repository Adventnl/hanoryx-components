/* Usage contract maintained beside the implementation. */
export const docs = {
  "summary": "Tracks whether an element is on screen. Unlike useElementInView (one-shot reveals) this keeps toggling, so loops, canvases and infinite animations can pause the moment they scroll away. State is only set from the observer callback.",
  "origin": "hanoryx-web",
  "returns": "[ref, onScreen]. Attach ref to one element; onScreen follows every intersection change.",
  "examples": [
    {
      "title": "Inside a React component",
      "code": "import { useOnScreen } from 'hanoryx-components/core';\nconst [ref, onScreen] = useOnScreen({ rootMargin: \"120px\" });\n<div ref={ref}>{onScreen ? \"Visible\" : \"Off screen\"}</div>"
    }
  ],
  "notes": [
    "Call this hook unconditionally at the top level of a React component.",
    "Browser effects clean up when the component unmounts. See the source for all optional arguments."
  ],
  "subcomponents": {}
};
