export const docs = {
  "origin": "new",
  "summary": "Hover and focus preview bindings with a grace period when moving into the card.",
  "notes": [
    "Call this hook at the top level of a React component. Attach returned DOM bindings to the corresponding element. The host owns rendering and application actions."
  ],
  "returns": "Hover and focus preview bindings with a grace period when moving into the card.",
  "keyboard": [],
  "examples": [
    {
      "title": "Hook contract",
      "code": "import { useHoverCard } from 'hanoryx-components/kit';\n\n// Inside a React component:\nconst { open, triggerProps, contentProps } = useHoverCard({ delay: 250 });"
    }
  ],
  "sizing": {
    "rules": []
  },
  "subcomponents": {}
};
