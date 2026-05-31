"use client";

import "@xyflow/react/dist/style.css";
import { ReactFlow, Background } from "@xyflow/react";
import dagre from "dagre";

const nodeWidth = 180;
const nodeHeight = 60;

const rawNodes = [
  { id: "me", label: "Yoan Louvois" },

  { id: "devops", label: "DevOps / MLOps" },
  { id: "cicd", label: "CI/CD" },
  { id: "github-actions", label: "GitHub Actions" },
  { id: "container", label: "Container" },
  { id: "docker", label: "Docker" },
  { id: "iac", label: "IaC" },
  { id: "terraform", label: "Terraform" },
  { id: "cloud", label: "Cloud" },
  { id: "aws", label: "AWS" },

  { id: "languages", label: "Langages" },
  { id: "poo", label: "POO" },
  { id: "cpp", label: "C++\nQt • Multi-threading" },
  { id: "java", label: "Java\nJavaFX • Swing • Spring Boot" },

  { id: "scripting", label: "Scripting" },
  { id: "javascript", label: "JavaScript\nExpress • Node.js" },
  { id: "typescript", label: "TypeScript\nAngular" },
  { id: "python", label: "Python\nPandas • Scikit-learn • PyTorch • FastAPI" },

  { id: "database", label: "Database" },
  { id: "postgresql", label: "PostgreSQL" },
  { id: "mysql", label: "MySQL" },
];

const rawEdges = [
  ["me", "devops"],
  ["me", "languages"],
  ["me", "database"],

  ["devops", "cicd"],
  ["cicd", "github-actions"],

  ["devops", "container"],
  ["container", "docker"],

  ["devops", "iac"],
  ["iac", "terraform"],

  ["devops", "cloud"],
  ["cloud", "aws"],

  ["languages", "poo"],
  ["poo", "cpp"],
  ["poo", "java"],

  ["languages", "scripting"],
  ["scripting", "javascript"],
  ["scripting", "typescript"],
  ["scripting", "python"],

  ["database", "postgresql"],
  ["database", "mysql"],
];

function getLayoutedElements() {
  const dagreGraph = new dagre.graphlib.Graph();

  dagreGraph.setDefaultEdgeLabel(() => ({}));

  dagreGraph.setGraph({
    rankdir: "TB", // Passe de "TB" à "LR" (Left to Right)
    ranksep: 60,   // Réduit de 100 à 60
    nodesep: 20,   // Réduit de 50 à 20
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
      style: getNodeStyle(node.id),
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

function getNodeStyle(nodeId: string) {
  const baseStyle = {
    borderRadius: 12,
    padding: 10,
    whiteSpace: "pre-line",
    width: nodeWidth,
    minHeight: nodeHeight,
  };

  if (nodeId === "me") {
    return {
      ...baseStyle,
      background: "#082f49",
      color: "#67e8f9",
      border: "2px solid #22d3ee",
      boxShadow: "0 0 24px rgba(34, 211, 238, 0.45)",
      fontWeight: 700,
    };
  }

  if (
    [
      "devops",
      "cicd",
      "github-actions",
      "container",
      "docker",
      "iac",
      "terraform",
      "cloud",
      "aws",
    ].includes(nodeId)
  ) {
    return {
      ...baseStyle,
      background: "#172554",
      color: "#bfdbfe",
      border: "1px solid #3b82f6",
    };
  }

  if (
    [
      "languages",
      "poo",
      "cpp",
      "java",
      "scripting",
      "javascript",
      "typescript",
      "python",
    ].includes(nodeId)
  ) {
    return {
      ...baseStyle,
      background: "#3b0764",
      color: "#e9d5ff",
      border: "1px solid #a855f7",
    };
  }

  if (["database", "postgresql", "mysql"].includes(nodeId)) {
    return {
      ...baseStyle,
      background: "#052e16",
      color: "#bbf7d0",
      border: "1px solid #22c55e",
    };
  }

  return {
    ...baseStyle,
    background: "#0f172a",
    color: "#e2e8f0",
    border: "1px solid #475569",
  };
}

export default function PortfolioFlow() {
  const { nodes, edges } = getLayoutedElements();

  return(
    <div className="h-full w-full rounded-2xl bg-slate-950">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        fitViewOptions={{
          padding: 0.4,
          minZoom: 0.54,
          maxZoom: 0.9,
        }}
        minZoom={0.2}
        maxZoom={1.5}
        defaultViewport={{ x: 0, y: 0, zoom: 0.45 }}
      >
        <Background color="#164e63" gap={24} />
      </ReactFlow>
    </div>
  );
}