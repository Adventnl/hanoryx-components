/* Documentation for Avatar. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "Avatar",
  "area": "kit",
  "family": "data",
  "summary": "A person, a team or a system as its initials in a circle or square. No photographs, on purpose: initials need no consent, load instantly and cannot be the wrong face.",
  "props": [
    {
      "name": "name",
      "type": "string",
      "description": "The full name; becomes the accessible name."
    },
    {
      "name": "size",
      "type": "string",
      "default": "\"2.4rem\"",
      "description": "A CSS length."
    },
    {
      "name": "shape",
      "description": "Appearance."
    },
    {
      "name": "tone",
      "description": "Appearance."
    },
    {
      "name": "names",
      "description": "The group shows max avatars and “+N” for the rest."
    },
    {
      "name": "max (group)",
      "description": "The group shows max avatars and “+N” for the rest."
    }
  ],
  "keyboard": [
    {
      "key": "—",
      "does": "Not interactive."
    }
  ],
  "notes": [
    "The group lists every name in its accessible label, including those it only counts."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<Avatar name=\"Alex Example\" />\n<AvatarGroup names={['Alex Example', 'Sam Sample', 'Rin Placeholder']} max={3} />"
    }
  ],
  "subcomponents": {
    "AvatarGroup": {
      "summary": "Avatars stacked as one group, with a \"+N\" for the ones that do not fit."
    }
  }
};
