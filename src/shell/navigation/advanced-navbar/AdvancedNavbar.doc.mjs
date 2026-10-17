/* Documentation for AdvancedNavbar. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "AdvancedNavbar",
  "area": "shell",
  "family": "navigation",
  "summary": "The primary navigation: a hover-intent controller and a wide full-screen-width menu (categories on the left, pages across the right). Reads its groups from the navigation config.",
  "props": [
    {
      "name": "menuOpen",
      "description": "Whether the mobile menu is open (the shell owns it)."
    },
    {
      "name": "onToggleMenu",
      "description": "Called by the burger button."
    },
    {
      "name": "revealed",
      "description": "Glide the bar in (the shell sets it as the intro lifts)."
    }
  ],
  "keyboard": [
    {
      "key": "Tab / Enter",
      "does": "Move through links; Enter or ArrowDown opens a group."
    },
    {
      "key": "Esc",
      "does": "Close the open menu and return focus."
    }
  ],
  "sizing": {
    "rules": [
      "Fixed to the top, full width, `--nav-h` = 72px. Under 900px it becomes the burger and `MobileNav`."
    ]
  },
  "notes": [
    "Groups come from `navGroups` (see `applyNavigation` in `content/routeConfig`).",
    "A group with one child is a plain link and never opens a panel."
  ],
  "related": [
    "MobileNav",
    "MegaPanel",
    "SiteShell"
  ],
  "examples": [
    {
      "title": "Change the menu",
      "code": "import { configureSite } from 'hanoryx-components/core';\nconfigureSite({ navigation: { navGroups: [/* { id, label, code, to, lead, categories } */] } });"
    }
  ]
};
