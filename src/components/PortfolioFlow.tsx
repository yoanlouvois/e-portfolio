"use client";

import "@xyflow/react/dist/style.css";
import ReactFlow, { Background } from "@xyflow/react";
import dagre from "dagre";

const nodeWidth = 180;
const nodeHeight = 60;

const rawNodes = [
  { id: "me", label: "Yoan Louvois" },
  { id: "languages", label: "Languages" },
  { id: "devops", label: "DevOps / MLOps" },
  { id: "python", label: "Python" },
  { id: "java", label: "Java" },
  { id: "aws", label: "AWS" },
  { id: "docker", label: "Docker" },
];

const rawEdges = [
  ["me", "languages"],
  ["me", "devops"],
  ["languages", "python"],
  ["languages", "java"],
  ["devops", "aws"],
  ["devops", "docker"],
];

function getLayoutedElements() {
  const dagreGraph = new dagre.graphlib.Graph();

  dagreGraph.setDefaultEdgeLabel(() => ({}));

  dagreGraph.setGraph({
    rankdir: "TB", // Top -> Bottom
    ranksep: 100,
    nodesep: 50,
  });

  rawNodes.forEach((node) => {
    dagreGraph.setNode(node.id, {
      width: nodeWidth,
      height: nodeHeight,
    });
  });

  rawEdges.forEach(([source, target]) => {
    dagreGraph.setEdge(source, target);
  });

  dagre.layout(dagreGraph);

  const nodes = rawNodes.map((node) => {
    const pos = dagreGraph.node(node.id);

    return {
      id: node.id,
      data: { label: node.label },
      position: {
        x: pos.x - nodeWidth / 2,
        y: pos.y - nodeHeight / 2,
      },
      style: {
        background: "#0f172a",
        color: "#67e8f9",
        border: "1px solid #22d3ee",
        borderRadius: 12,
        padding: 10,
      },
    };
  });

  const edges = rawEdges.map(([source, target]) => ({
    id: `${source}-${target}`,
    source,
    target,
    animated: true,
  }));

  return { nodes, edges };
}

export default function PortfolioFlow() {
  const { nodes, edges } = getLayoutedElements();

  return (
    <div className="h-full w-full bg-slate-950 rounded-2xl">
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <Background color="#164e63" gap={24} />
      </ReactFlow>
    </div>
  );
}