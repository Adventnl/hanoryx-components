/* ============================================================
   23 · MENUS — dropdowns, radials and command lists.
   The still side is a node map: a hub and seven stops joined by lines. The
   scroll opens one stop at a time (a petal lifts and its line fills) while a
   pulse runs out along the line to it. Specimens share a tiny open/close hook
   (Escape and an outside press close a menu) and are operable by keyboard.
   ============================================================ */

import { Visual } from './Visual';
import { Dropdown } from './Dropdown';
import { SelectMenu } from './SelectMenu';
import { ContextMenu } from './ContextMenu';
import { RadialMenu } from './RadialMenu';
import { CommandList } from './CommandList';
import { MegaMenu } from './MegaMenu';
import { NestedSubmenu } from './NestedSubmenu';
import { WedgeMenu } from './WedgeMenu';
import { AccordionMenu } from './AccordionMenu';
import { KebabMenu } from './KebabMenu';
import { BurgerMenu } from './BurgerMenu';
import { BreadcrumbMenu } from './BreadcrumbMenu';
import { AccountMenu } from './AccountMenu';
import { FlyoutRail } from './FlyoutRail';
import { Combobox } from './Combobox';
import { ChecklistMenu } from './ChecklistMenu';
import { RadioMenu } from './RadioMenu';
import { Menubar } from './Menubar';
import { SlashMenu } from './SlashMenu';
import { SymbolGrid } from './SymbolGrid';
import { QuickDates } from './QuickDates';
import { SortMenu } from './SortMenu';
import { ShareMenu } from './ShareMenu';
import { Dropup } from './Dropup';
import { ShortcutMenu } from './ShortcutMenu';
import { WheelMenu } from './WheelMenu';
import { RingMenu } from './RingMenu';
import { FanMenu } from './FanMenu';
import { StaggerMenu } from './StaggerMenu';
import { UnderlineMenu } from './UnderlineMenu';
import { OverlayMenu } from './OverlayMenu';
import { TreeMenu } from './TreeMenu';
import { RegionMap } from './RegionMap';
import { LanguageMenu } from './LanguageMenu';
import { HourList } from './HourList';
import { ColourMenu } from './ColourMenu';
import { FontMenu } from './FontMenu';
import { DangerMenu } from './DangerMenu';
import { ShrinkingHeader } from './ShrinkingHeader';
import { ActionSheet } from './ActionSheet';
import { MagneticMenu } from './MagneticMenu';
import { FooterMenu } from './FooterMenu';

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
