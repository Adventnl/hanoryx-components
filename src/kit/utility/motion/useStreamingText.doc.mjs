export const docs = {
  "origin": "new",
  "summary": "A progressively revealed string that pauses off screen, stops when complete and settles for reduced motion.",
  "notes": [
    "Call this hook at the top level of a React component. Attach returned DOM bindings to the corresponding element. The host owns rendering and application actions."
  ],
  "returns": "A progressively revealed string that pauses off screen, stops when complete and settles for reduced motion.",
  "keyboard": [],
  "examples": [
    {
      "title": "Hook contract",
      "code": "import { useStreamingText } from 'hanoryx-components/kit';\n\n// Inside a React component:\nconst { ref, text, complete } = useStreamingText(message, { interval: 30 });"
    }
  ],
  "sizing": {
    "rules": []
  },
  "subcomponents": {}
};
