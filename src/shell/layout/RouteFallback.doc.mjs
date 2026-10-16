/* Documentation for RouteFallback. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "RouteFallback",
  "area": "shell",
  "family": "layout",
  "summary": "The loading state while a route chunk streams in: a pulsing telemetry line, quiet and short-lived. Use as the `Suspense` fallback of your routes.",
  "sizing": {
    "rules": [
      "Fills the viewport height (`min-height`) so the footer does not jump up while loading."
    ]
  },
  "related": [
    "ErrorBoundary"
  ],
  "examples": [
    {
      "title": "Basic",
      "code": "<Suspense fallback={<RouteFallback />}>…</Suspense>"
    }
  ]
};
