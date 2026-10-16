/* ============================================================
   08 · MATRICES — heat, tables and dot grids to pan across.
   The page is a field of forty-two grids you travel across along a snaking path.
   On the left, a small map of that field: the red cell and the dot are where the
   scroll has taken you, the line is the way so far, and the numbers beside them
   are written by CSS counters — the same `--pin` that moves the field draws them.
   Most specimens below are grids read with the pointer or the arrow keys
   (useCell); the rest are small games, tables and displays.
   ============================================================ */

import { Visual } from './Visual';
import { HeatMatrix } from './HeatMatrix';
import { CorrelationGrid } from './CorrelationGrid';
import { ConfusionMatrix } from './ConfusionMatrix';
import { TimesTable } from './TimesTable';
import { SortableTable } from './SortableTable';
import { ScrollTable } from './ScrollTable';
import { DotClock } from './DotClock';
import { PixelMarquee } from './PixelMarquee';
import { LifeGrid } from './LifeGrid';
import { PixelPad } from './PixelPad';
import { SeatMap } from './SeatMap';
import { BingoCard } from './BingoCard';
import { SudokuPeek } from './SudokuPeek';
import { LightsOut } from './LightsOut';
import { TilePuzzle } from './TilePuzzle';
import { MineField } from './MineField';
import { ChessBoard } from './ChessBoard';
import { KeyMap } from './KeyMap';
import { PaperTape } from './PaperTape';
import { BrailleCells } from './BrailleCells';
import { BitGrid } from './BitGrid';
import { HexDump } from './HexDump';
import { PriorityMatrix } from './PriorityMatrix';
import { RiskMatrix } from './RiskMatrix';
import { TruthTable } from './TruthTable';
import { PlanTable } from './PlanTable';
import { PivotTable } from './PivotTable';
import { Timetable } from './Timetable';
import { MonthGrid } from './MonthGrid';
import { MiniSheet } from './MiniSheet';
import { CellularRows } from './CellularRows';
import { PascalTriangle } from './PascalTriangle';
import { SwatchMatrix } from './SwatchMatrix';
import { WordSearch } from './WordSearch';
import { MemoryFlip } from './MemoryFlip';
import { NoughtsGrid } from './NoughtsGrid';
import { DropFour } from './DropFour';
import { FleetGrid } from './FleetGrid';
import { TransformGrid } from './TransformGrid';
import { ProductGrid } from './ProductGrid';
import { LampGrid } from './LampGrid';
import { EqualizerGrid } from './EqualizerGrid';

export { Visual };
export { HeatMatrix, CorrelationGrid, ConfusionMatrix, TimesTable, SortableTable, ScrollTable, DotClock, PixelMarquee, LifeGrid, PixelPad, SeatMap, BingoCard, SudokuPeek, LightsOut, TilePuzzle, MineField, ChessBoard, KeyMap, PaperTape, BrailleCells, BitGrid, HexDump, PriorityMatrix, RiskMatrix, TruthTable, PlanTable, PivotTable, Timetable, MonthGrid, MiniSheet, CellularRows, PascalTriangle, SwatchMatrix, WordSearch, MemoryFlip, NoughtsGrid, DropFour, FleetGrid, TransformGrid, ProductGrid, LampGrid, EqualizerGrid };

/** [label, Component, interaction] in page order — what a Stage lays out. */
export const items = [
  ["Heat matrix", HeatMatrix, "hover"],
  ["Correlation grid", CorrelationGrid, "hover"],
  ["Confusion matrix", ConfusionMatrix, "click"],
  ["Times table", TimesTable, "hover"],
  ["Sortable table", SortableTable, "click"],
  ["Scroll table", ScrollTable, "scroll"],
  ["Dot clock", DotClock, "auto"],
  ["Pixel marquee", PixelMarquee, "auto"],
  ["Life grid", LifeGrid, "click"],
  ["Pixel pad", PixelPad, "drag"],
  ["Seat map", SeatMap, "click"],
  ["Bingo card", BingoCard, "click"],
  ["Sudoku peek", SudokuPeek, "hover"],
  ["Lights out", LightsOut, "click"],
  ["Tile puzzle", TilePuzzle, "click"],
  ["Mine field", MineField, "click"],
  ["Chess board", ChessBoard, "click"],
  ["Key map", KeyMap, "keys"],
  ["Paper tape", PaperTape, "hover"],
  ["Braille cells", BrailleCells, "type"],
  ["Bit grid", BitGrid, "click"],
  ["Hex dump", HexDump, "hover"],
  ["Priority matrix", PriorityMatrix, "click"],
  ["Risk matrix", RiskMatrix, "hover"],
  ["Truth table", TruthTable, "click"],
  ["Plan table", PlanTable, "click"],
  ["Pivot table", PivotTable, "hover"],
  ["Timetable", Timetable, "click"],
  ["Month grid", MonthGrid, "click"],
  ["Mini sheet", MiniSheet, "type"],
  ["Cellular rows", CellularRows, "auto"],
  ["Pascal triangle", PascalTriangle, "hover"],
  ["Swatch matrix", SwatchMatrix, "click"],
  ["Word search", WordSearch, "click"],
  ["Memory flip", MemoryFlip, "click"],
  ["Noughts grid", NoughtsGrid, "click"],
  ["Drop four", DropFour, "click"],
  ["Fleet grid", FleetGrid, "click"],
  ["Transform grid", TransformGrid, "drag"],
  ["Product grid", ProductGrid, "hover"],
  ["Lamp grid", LampGrid, "hover"],
  ["Equalizer grid", EqualizerGrid, "auto"],
];

export default { Visual, items };
