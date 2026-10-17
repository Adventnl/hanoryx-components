/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "new",
  "summary": "Percentage split state and separator bindings for pointer and keyboard resizing.",
  "props": [],
  "returns": "{ size, setSize(next), handleProps }. size is a clamped percentage. handleProps contains separator ARIA, pointer capture and keyboard handlers.",
  "notes": [
    "Call at the top level of a React component. The handle must be a direct child of the measured split container.",
    "Prefer Resizable for a complete accessible composition."
  ],
  "sizing": {
    "rules": []
  },
  "keyboard": [],
  "examples": [
    {
      "title": "Working composition",
      "code": "const { size, handleProps } = useResizable({ defaultValue: 40, min: 20, max: 80 });\n// Spread handleProps on a named separator inside the measured parent.\n<div {...handleProps} aria-label=\"Resize panels\" />"
    }
  ],
  "subcomponents": {}
};
