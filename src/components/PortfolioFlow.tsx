"use client";

import "@xyflow/react/dist/style.css";
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  type Node,
  type Edge,
} from "@xyflow/react";

const nodes: Node[] = [
  {
    id: "core",
    position: { x: 280, y: 220 },
    data: { label: "Yoan Louvois" },
    type: "input",
    style: {
      background: "#020617",
      color: "#67e8f9",
      border: "1px solid #22d3ee",
      borderRadius: 18,
      padding: 18,
      boxShadow: "0 0 35px rgba(34,211,238,0.45)",
    },
  },
  {
    id: "devops",
    position: { x: 40, y: 80 },
    data: { label: "DevOps" },
    style: futuristicNode(),
  },
  {
    id: "mlops",
    position: { x: 520, y: 80 },
    data: { label: "MLOps" },
    style: futuristicNode(),
  },
  {
    id: "backend",
    position: { x: 60, y: 380 },
    data: { label: "Backend Systems" },
    style: futuristicNode(),
  },
  {
    id: "cloud",
    position: { x: 520, y: 380 },
    data: { label: "Cloud Engineering" },
    style: futuristicNode(),
  },
  {
    id: "ai",
    position: { x: 290, y: 20 },
    data: { label: "Deep Learning" },
    style: futuristicNode(),
  },
  {
    id: "contact",
    position: { x: 300, y: 500 },
    data: { label: "Contact" },
    type: "output",
    style: futuristicNode(),
  },
];

const edges: Edge[] = [
  { id: "core-devops", source: "core", target: "devops", animated: true },
  { id: "core-mlops", source: "core", target: "mlops", animated: true },
  { id: "core-backend", source: "core", target: "backend", animated: true },
  { id: "core-cloud", source: "core", target: "cloud", animated: true },
  { id: "core-ai", source: "core", target: "ai", animated: true },
  { id: "core-contact", source: "core", target: "contact", animated: true },
];

function futuristicNode() {
  return {
    background: "rgba(15, 23, 42, 0.9)",
    color: "#e0f2fe",
    border: "1px solid rgba(34, 211, 238, 0.55)",
    borderRadius: 16,
    padding: 14,
    boxShadow: "0 0 25px rgba(59, 130, 246, 0.25)",
  };
}

export default function PortfolioFlow() {
  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      fitView
      className="rounded-2xl"
    >
      <Background color="#22d3ee" gap={24} />
      <MiniMap />
      <Controls />
    </ReactFlow>
  );
}