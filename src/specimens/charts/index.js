/* ============================================================
   07 · CHARTS — marks, bars, lines and areas.
   The still middle of the page is a plotter: a line is drawn down the screen as
   you scroll, two series, a crosshair and a dot per series — the dots and the
   numbers beside them come from the same sine sums the paths were drawn with, so
   CSS (sin, counters) and SVG agree without any script per frame.
   Every sample is generated from a seed, so a chart is the same on every render.
   ============================================================ */

import { Visual } from './Visual';
import { ColumnChart } from './ColumnChart';
import { ScrubLine } from './ScrubLine';
import { MorphArea } from './MorphArea';
import { StackToggle } from './StackToggle';
import { DonutSlices } from './DonutSlices';
import { PullOutPie } from './PullOutPie';
import { Candlesticks } from './Candlesticks';
import { CalendarHeat } from './CalendarHeat';
import { BinSlider } from './BinSlider';
import { ScatterField } from './ScatterField';
import { BubbleField } from './BubbleField';
import { SpiderChart } from './SpiderChart';
import { Treemap } from './Treemap';
import { Sunburst } from './Sunburst';
import { FunnelSteps } from './FunnelSteps';
import { Waterfall } from './Waterfall';
import { BoxAndWhisker } from './BoxAndWhisker';
import { Ridgeline } from './Ridgeline';
import { GanttStrips } from './GanttStrips';
import { LollipopChart } from './LollipopChart';
import { DumbbellDots } from './DumbbellDots';
import { SlopeLines } from './SlopeLines';
import { FlowBands } from './FlowBands';
import { ChordRing } from './ChordRing';
import { BumpLines } from './BumpLines';
import { StepPlot } from './StepPlot';
import { StreamGraph } from './StreamGraph';
import { HorizonStrip } from './HorizonStrip';
import { MosaicColumns } from './MosaicColumns';
import { PyramidBars } from './PyramidBars';
import { EasingCurve } from './EasingCurve';
import { ErrorBars } from './ErrorBars';
import { ParallelLines } from './ParallelLines';
import { UnitIcons } from './UnitIcons';
import { SparkTable } from './SparkTable';
import { ThresholdLine } from './ThresholdLine';
import { BrushWindow } from './BrushWindow';
import { BarsAndLine } from './BarsAndLine';
import { SpiralPlot } from './SpiralPlot';
import { AnnotatedLine } from './AnnotatedLine';
import { CirclePack } from './CirclePack';
import { DivergingBars } from './DivergingBars';

export { Visual };
export { ColumnChart, ScrubLine, MorphArea, StackToggle, DonutSlices, PullOutPie, Candlesticks, CalendarHeat, BinSlider, ScatterField, BubbleField, SpiderChart, Treemap, Sunburst, FunnelSteps, Waterfall, BoxAndWhisker, Ridgeline, GanttStrips, LollipopChart, DumbbellDots, SlopeLines, FlowBands, ChordRing, BumpLines, StepPlot, StreamGraph, HorizonStrip, MosaicColumns, PyramidBars, EasingCurve, ErrorBars, ParallelLines, UnitIcons, SparkTable, ThresholdLine, BrushWindow, BarsAndLine, SpiralPlot, AnnotatedLine, CirclePack, DivergingBars };

/** [label, Component, interaction] in page order — what a Stage lays out. */
export const items = [
  ["Column chart", ColumnChart, "click"],
  ["Scrub line", ScrubLine, "hover"],
  ["Morph area", MorphArea, "click"],
  ["Stack toggle", StackToggle, "click"],
  ["Donut slices", DonutSlices, "hover"],
  ["Pull-out pie", PullOutPie, "click"],
  ["Candlesticks", Candlesticks, "hover"],
  ["Calendar heat", CalendarHeat, "hover"],
  ["Bin slider", BinSlider, "drag"],
  ["Scatter field", ScatterField, "hover"],
  ["Bubble field", BubbleField, "auto"],
  ["Spider chart", SpiderChart, "click"],
  ["Treemap", Treemap, "hover"],
  ["Sunburst", Sunburst, "hover"],
  ["Funnel steps", FunnelSteps, "click"],
  ["Waterfall", Waterfall, "auto"],
  ["Box and whisker", BoxAndWhisker, "hover"],
  ["Ridgeline", Ridgeline, "auto"],
  ["Gantt strips", GanttStrips, "hover"],
  ["Lollipop chart", LollipopChart, "hover"],
  ["Dumbbell dots", DumbbellDots, "hover"],
  ["Slope lines", SlopeLines, "click"],
  ["Flow bands", FlowBands, "hover"],
  ["Chord ring", ChordRing, "hover"],
  ["Bump lines", BumpLines, "click"],
  ["Step plot", StepPlot, "auto"],
  ["Stream graph", StreamGraph, "auto"],
  ["Horizon strip", HorizonStrip, "auto"],
  ["Mosaic columns", MosaicColumns, "hover"],
  ["Pyramid bars", PyramidBars, "hover"],
  ["Easing curve", EasingCurve, "drag"],
  ["Error bars", ErrorBars, "hover"],
  ["Parallel lines", ParallelLines, "hover"],
  ["Unit icons", UnitIcons, "hover"],
  ["Spark table", SparkTable, "hover"],
  ["Threshold line", ThresholdLine, "drag"],
  ["Brush window", BrushWindow, "drag"],
  ["Bars and line", BarsAndLine, "hover"],
  ["Spiral plot", SpiralPlot, "auto"],
  ["Annotated line", AnnotatedLine, "hover"],
  ["Circle pack", CirclePack, "hover"],
  ["Diverging bars", DivergingBars, "hover"],
];

export default { Visual, items };
