export const docs = {
  "origin": "new",
  "summary": "A visibility ref and transform/opacity entry styles, settled for reduced motion.",
  "notes": [
    "Call this hook at the top level of a React component. Attach returned DOM bindings to the corresponding element. The host owns rendering and application actions."
  ],
  "returns": "A visibility ref and transform/opacity entry styles, settled for reduced motion.",
  "keyboard": [],
  "examples": [
    {
      "title": "Hook contract",
      "code": "import { useEntryAnimation } from 'hanoryx-components/kit';\n\n// Inside a React component:\nconst { ref, visible, style } = useEntryAnimation();"
    }
  ],
  "sizing": {
    "rules": []
  },
  "subcomponents": {}
};
