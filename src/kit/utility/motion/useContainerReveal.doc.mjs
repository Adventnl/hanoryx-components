export const docs = {
  "origin": "new",
  "summary": "The shared visibility observer under its container-reveal family name; returns ref and visible.",
  "notes": [
    "Call this hook at the top level of a React component. Attach returned DOM bindings to the corresponding element. The host owns rendering and application actions."
  ],
  "returns": "The shared visibility observer under its container-reveal family name; returns ref and visible.",
  "keyboard": [],
  "examples": [
    {
      "title": "Hook contract",
      "code": "import { useContainerReveal } from 'hanoryx-components/kit';\n\n// Inside a React component:\nconst [ref, visible] = useContainerReveal();"
    }
  ],
  "sizing": {
    "rules": []
  },
  "subcomponents": {}
};
