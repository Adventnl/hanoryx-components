/* ============================================================
   23 · MENUS — dropdowns, radials and command lists.
   The still side is a node map: a hub and seven stops joined by lines. The
   scroll opens one stop at a time (a petal lifts and its line fills) while a
   pulse runs out along the line to it. Specimens share a tiny open/close hook
   (Escape and an outside press close a menu) and are operable by keyboard.
   ============================================================ */

import { Visual } from "./visual/Visual";
import { Dropdown } from "./dropdown/Dropdown";
import { SelectMenu } from "./select-menu/SelectMenu";
import { ContextMenu } from "./context-menu/ContextMenu";
import { RadialMenu } from "./radial-menu/RadialMenu";
import { CommandList } from "./command-list/CommandList";
import { MegaMenu } from "./mega-menu/MegaMenu";
import { NestedSubmenu } from "./nested-submenu/NestedSubmenu";
import { WedgeMenu } from "./wedge-menu/WedgeMenu";
import { AccordionMenu } from "./accordion-menu/AccordionMenu";
import { KebabMenu } from "./kebab-menu/KebabMenu";
import { BurgerMenu } from "./burger-menu/BurgerMenu";
import { BreadcrumbMenu } from "./breadcrumb-menu/BreadcrumbMenu";
import { AccountMenu } from "./account-menu/AccountMenu";
import { FlyoutRail } from "./flyout-rail/FlyoutRail";
import { Combobox } from "./combobox/Combobox";
import { ChecklistMenu } from "./checklist-menu/ChecklistMenu";
import { RadioMenu } from "./radio-menu/RadioMenu";
import { Menubar } from "./menubar/Menubar";
import { SlashMenu } from "./slash-menu/SlashMenu";
import { SymbolGrid } from "./symbol-grid/SymbolGrid";
import { QuickDates } from "./quick-dates/QuickDates";
import { SortMenu } from "./sort-menu/SortMenu";
import { ShareMenu } from "./share-menu/ShareMenu";
import { Dropup } from "./dropup/Dropup";
import { ShortcutMenu } from "./shortcut-menu/ShortcutMenu";
import { WheelMenu } from "./wheel-menu/WheelMenu";
import { RingMenu } from "./ring-menu/RingMenu";
import { FanMenu } from "./fan-menu/FanMenu";
import { StaggerMenu } from "./stagger-menu/StaggerMenu";
import { UnderlineMenu } from "./underline-menu/UnderlineMenu";
import { OverlayMenu } from "./overlay-menu/OverlayMenu";
import { TreeMenu } from "./tree-menu/TreeMenu";
import { RegionMap } from "./region-map/RegionMap";
import { LanguageMenu } from "./language-menu/LanguageMenu";
import { HourList } from "./hour-list/HourList";
import { ColourMenu } from "./colour-menu/ColourMenu";
import { FontMenu } from "./font-menu/FontMenu";
import { DangerMenu } from "./danger-menu/DangerMenu";
import { ShrinkingHeader } from "./shrinking-header/ShrinkingHeader";
import { ActionSheet } from "./action-sheet/ActionSheet";
import { MagneticMenu } from "./magnetic-menu/MagneticMenu";
import { FooterMenu } from "./footer-menu/FooterMenu";

export { Visual };
export { Dropdown, SelectMenu, ContextMenu, RadialMenu, CommandList, MegaMenu, NestedSubmenu, WedgeMenu, AccordionMenu, KebabMenu, BurgerMenu, BreadcrumbMenu, AccountMenu, FlyoutRail, Combobox, ChecklistMenu, RadioMenu, Menubar, SlashMenu, SymbolGrid, QuickDates, SortMenu, ShareMenu, Dropup, ShortcutMenu, WheelMenu, RingMenu, FanMenu, StaggerMenu, UnderlineMenu, OverlayMenu, TreeMenu, RegionMap, LanguageMenu, HourList, ColourMenu, FontMenu, DangerMenu, ShrinkingHeader, ActionSheet, MagneticMenu, FooterMenu };

/** [label, Component, interaction] in page order — what a Stage lays out. */
export const items = [
  ["Dropdown", Dropdown, "click"],
  ["Select menu", SelectMenu, "click"],
  ["Context menu", ContextMenu, "right-click"],
  ["Radial menu", RadialMenu, "click"],
  ["Command list", CommandList, "type"],
  ["Mega menu", MegaMenu, "click"],
  ["Nested submenu", NestedSubmenu, "hover"],
  ["Wedge menu", WedgeMenu, "hover"],
  ["Accordion menu", AccordionMenu, "click"],
  ["Kebab menu", KebabMenu, "click"],
  ["Burger menu", BurgerMenu, "click"],
  ["Breadcrumb menu", BreadcrumbMenu, "click"],
  ["Account menu", AccountMenu, "click"],
  ["Flyout rail", FlyoutRail, "hover"],
  ["Combobox", Combobox, "type"],
  ["Checklist menu", ChecklistMenu, "click"],
  ["Radio menu", RadioMenu, "click"],
  ["Menubar", Menubar, "click"],
  ["Slash menu", SlashMenu, "type"],
  ["Symbol grid", SymbolGrid, "click"],
  ["Quick dates", QuickDates, "click"],
  ["Sort menu", SortMenu, "click"],
  ["Share menu", ShareMenu, "click"],
  ["Dropup", Dropup, "click"],
  ["Shortcut menu", ShortcutMenu, "click"],
  ["Wheel menu", WheelMenu, "scroll"],
  ["Ring menu", RingMenu, "click"],
  ["Fan menu", FanMenu, "click"],
  ["Stagger menu", StaggerMenu, "click"],
  ["Underline menu", UnderlineMenu, "hover"],
  ["Overlay menu", OverlayMenu, "click"],
  ["Tree menu", TreeMenu, "click"],
  ["Region map", RegionMap, "click"],
  ["Language menu", LanguageMenu, "click"],
  ["Hour list", HourList, "keys"],
  ["Colour menu", ColourMenu, "click"],
  ["Font menu", FontMenu, "click"],
  ["Danger menu", DangerMenu, "click"],
  ["Shrinking header", ShrinkingHeader, "click"],
  ["Action sheet", ActionSheet, "click"],
  ["Magnetic menu", MagneticMenu, "hover"],
  ["Footer menu", FooterMenu, "click"],
];

export default { Visual, items };
