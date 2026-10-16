/* ============================================================
   10 · GRAPHS — nodes, trees and flows that grow.
   A spine runs down the middle of the page and specimens branch off it. The disc
   that rides the spine is a graph of its own: thirty-one nodes appear one by one
   as you scroll, each link drawing itself from its parent, and the counters in
   the middle are written by CSS. Everything below is a graph of some kind —
   trees, networks, flows, fractals — drawn from fixed data, so it is the same
   on every render.
   ============================================================ */

import { Visual } from './Visual';
import { SpringGraph } from './SpringGraph';
import { OrgChart } from './OrgChart';
import { FileTree } from './FileTree';
import { MindMap } from './MindMap';
import { DependencyGraph } from './DependencyGraph';
import { DecisionTree } from './DecisionTree';
import { FlowchartSteps } from './FlowchartSteps';
import { RadialTree } from './RadialTree';
import { DendrogramCut } from './DendrogramCut';
import { RingNetwork } from './RingNetwork';
import { HubAndSpoke } from './HubAndSpoke';
import { PacketRoute } from './PacketRoute';
import { TournamentBracket } from './TournamentBracket';
import { BranchGraph } from './BranchGraph';
import { TransitMap } from './TransitMap';
import { NeuralLayers } from './NeuralLayers';
import { BlockChain } from './BlockChain';
import { LinkedList } from './LinkedList';
import { StackAndQueue } from './StackAndQueue';
import { HeapTree } from './HeapTree';
import { SearchTree } from './SearchTree';
import { TraversalSteps } from './TraversalSteps';
import { ShortestPath } from './ShortestPath';
import { SpanningTree } from './SpanningTree';
import { StateMachine } from './StateMachine';
import { TokenPipeline } from './TokenPipeline';
import { FanOut } from './FanOut';
import { Trie } from './Trie';
import { HuffmanTree } from './HuffmanTree';
import { VennSets } from './VennSets';
import { MazePath } from './MazePath';
import { LinkCurve } from './LinkCurve';
import { ArcDiagram } from './ArcDiagram';
import { AdjacencyView } from './AdjacencyView';
import { Constellation } from './Constellation';
import { SequenceDiagram } from './SequenceDiagram';
import { TreeRings } from './TreeRings';
import { FractalTree } from './FractalTree';
import { KochCurve } from './KochCurve';
import { Sierpinski } from './Sierpinski';
import { LineageTree } from './LineageTree';
import { CascadeNodes } from './CascadeNodes';

export { Visual };
export { SpringGraph, OrgChart, FileTree, MindMap, DependencyGraph, DecisionTree, FlowchartSteps, RadialTree, DendrogramCut, RingNetwork, HubAndSpoke, PacketRoute, TournamentBracket, BranchGraph, TransitMap, NeuralLayers, BlockChain, LinkedList, StackAndQueue, HeapTree, SearchTree, TraversalSteps, ShortestPath, SpanningTree, StateMachine, TokenPipeline, FanOut, Trie, HuffmanTree, VennSets, MazePath, LinkCurve, ArcDiagram, AdjacencyView, Constellation, SequenceDiagram, TreeRings, FractalTree, KochCurve, Sierpinski, LineageTree, CascadeNodes };

/** [label, Component, interaction] in page order — what a Stage lays out. */
export const items = [
  ["Spring graph", SpringGraph, "drag"],
  ["Org chart", OrgChart, "click"],
  ["File tree", FileTree, "click"],
  ["Mind map", MindMap, "hover"],
  ["Dependency graph", DependencyGraph, "hover"],
  ["Decision tree", DecisionTree, "click"],
  ["Flowchart steps", FlowchartSteps, "click"],
  ["Radial tree", RadialTree, "hover"],
  ["Dendrogram cut", DendrogramCut, "drag"],
  ["Ring network", RingNetwork, "click"],
  ["Hub and spoke", HubAndSpoke, "auto"],
  ["Packet route", PacketRoute, "click"],
  ["Tournament bracket", TournamentBracket, "click"],
  ["Branch graph", BranchGraph, "hover"],
  ["Transit map", TransitMap, "hover"],
  ["Neural layers", NeuralLayers, "auto"],
  ["Block chain", BlockChain, "click"],
  ["Linked list", LinkedList, "click"],
  ["Stack and queue", StackAndQueue, "click"],
  ["Heap tree", HeapTree, "click"],
  ["Search tree", SearchTree, "type"],
  ["Traversal steps", TraversalSteps, "click"],
  ["Shortest path", ShortestPath, "click"],
  ["Spanning tree", SpanningTree, "click"],
  ["State machine", StateMachine, "click"],
  ["Token pipeline", TokenPipeline, "auto"],
  ["Fan-out", FanOut, "auto"],
  ["Trie", Trie, "type"],
  ["Huffman tree", HuffmanTree, "hover"],
  ["Venn sets", VennSets, "hover"],
  ["Maze path", MazePath, "auto"],
  ["Link curve", LinkCurve, "drag"],
  ["Arc diagram", ArcDiagram, "hover"],
  ["Adjacency view", AdjacencyView, "hover"],
  ["Constellation", Constellation, "hover"],
  ["Sequence diagram", SequenceDiagram, "click"],
  ["Tree rings", TreeRings, "hover"],
  ["Fractal tree", FractalTree, "drag"],
  ["Koch curve", KochCurve, "click"],
  ["Sierpinski", Sierpinski, "click"],
  ["Lineage tree", LineageTree, "hover"],
  ["Cascade nodes", CascadeNodes, "click"],
];

export default { Visual, items };
