"use client";

import "@xyflow/react/dist/style.css";
import {
  ReactFlow,
  Background,
  type Node,
  type Edge,
} from "@xyflow/react";

const baseNode = {
  background: "rgba(15, 23, 42, 0.94)",
  color: "#e0f2fe",
  border: "1px solid rgba(34, 211, 238, 0.55)",
  borderRadius: 14,
  padding: 12,
  boxShadow: "0 0 22px rgba(34, 211, 238, 0.18)",
};

const rootNode = {
  ...baseNode,
  color: "#67e8f9",
  border: "1px solid rgba(103, 232, 249, 0.9)",
  boxShadow: "0 0 45px rgba(34, 211, 238, 0.55)",
  fontWeight: 700,
};

const categoryNode = {
  ...baseNode,
  background: "rgba(8, 47, 73, 0.95)",
  color: "#a5f3fc",
  fontWeight: 700,
};

const leafNode = {
  ...baseNode,
  background: "rgba(30, 41, 59, 0.9)",
  color: "#cbd5e1",
  fontSize: 13,
};

const nodes: Node[] = [
  // ROOT
  {
    id: "me",
    position: { x: 600, y: 0 },
    data: { label: "Yoan Louvois" },
    type: "input",
    style: rootNode,
  },

  // LEVEL 1
  {
    id: "languages",
    position: { x: 250, y: 140 },
    data: { label: "Langages" },
    style: categoryNode,
  },
  {
    id: "devops",
    position: { x: 950, y: 140 },
    data: { label: "DevOps / MLOps" },
    style: categoryNode,
  },

  // LANGUAGES
  { id: "cpp", position: { x: 0, y: 300 }, data: { label: "C++" }, style: categoryNode },
  { id: "java", position: { x: 160, y: 300 }, data: { label: "Java" }, style: categoryNode },
  { id: "javascript", position: { x: 320, y: 300 }, data: { label: "JavaScript" }, style: categoryNode },
  { id: "typescript", position: { x: 500, y: 300 }, data: { label: "TypeScript" }, style: categoryNode },
  { id: "python", position: { x: 680, y: 300 }, data: { label: "Python" }, style: categoryNode },
  { id: "database", position: { x: 860, y: 300 }, data: { label: "Database" }, style: categoryNode },

  // C++
  { id: "qt", position: { x: -40, y: 460 }, data: { label: "Qt" }, style: leafNode },
  { id: "multithreading", position: { x: 55, y: 540 }, data: { label: "Multi-threading" }, style: leafNode },

  // JAVA
  { id: "javafx", position: { x: 130, y: 460 }, data: { label: "JavaFX / Swing" }, style: leafNode },
  { id: "springboot", position: { x: 220, y: 540 }, data: { label: "Spring Boot" }, style: leafNode },

  // JS
  { id: "express", position: { x: 320, y: 460 }, data: { label: "Express" }, style: leafNode },
  { id: "node", position: { x: 400, y: 540 }, data: { label: "Node.js" }, style: leafNode },

  // TS
  { id: "angular", position: { x: 520, y: 460 }, data: { label: "Angular" }, style: leafNode },

  // PYTHON
  { id: "numpy", position: { x: 640, y: 460 }, data: { label: "NumPy / Pandas" }, style: leafNode },
  { id: "sklearn", position: { x: 720, y: 540 }, data: { label: "Scikit-learn" }, style: leafNode },
  { id: "pytorch", position: { x: 620, y: 620 }, data: { label: "PyTorch" }, style: leafNode },
  { id: "fastapi", position: { x: 760, y: 700 }, data: { label: "FastAPI" }, style: leafNode },

  // DATABASE
  { id: "postgresql", position: { x: 880, y: 460 }, data: { label: "PostgreSQL" }, style: leafNode },
  { id: "mysql", position: { x: 980, y: 540 }, data: { label: "MySQL" }, style: leafNode },

  // DEVOPS / MLOPS
  { id: "cicd", position: { x: 1080, y: 300 }, data: { label: "CI/CD" }, style: categoryNode },
  { id: "container", position: { x: 1240, y: 300 }, data: { label: "Container" }, style: categoryNode },
  { id: "iac", position: { x: 1400, y: 300 }, data: { label: "IaC" }, style: categoryNode },
  { id: "cloud", position: { x: 1560, y: 300 }, data: { label: "Cloud" }, style: categoryNode },

  { id: "github-actions", position: { x: 1080, y: 460 }, data: { label: "GitHub Actions" }, style: leafNode },
  { id: "docker", position: { x: 1240, y: 460 }, data: { label: "Docker" }, style: leafNode },
  { id: "terraform", position: { x: 1400, y: 460 }, data: { label: "Terraform" }, style: leafNode },

  // AWS
  { id: "aws", position: { x: 1560, y: 460 }, data: { label: "AWS" }, style: categoryNode },
  { id: "ec2s3", position: { x: 1480, y: 620 }, data: { label: "EC2 / S3" }, style: leafNode },
  { id: "sagemaker", position: { x: 1620, y: 700 }, data: { label: "SageMaker" }, style: leafNode },
  { id: "cloudwatch", position: { x: 1470, y: 780 }, data: { label: "CloudWatch" }, style: leafNode },
  { id: "lambda", position: { x: 1620, y: 860 }, data: { label: "Lambda / API Gateway" }, style: leafNode },
  { id: "ecr", position: { x: 1500, y: 940 }, data: { label: "ECR" }, style: leafNode },
];

const edges: Edge[] = [
  // ROOT
  edge("me", "languages"),
  edge("me", "devops"),

  // LANGUAGES
  edge("languages", "cpp"),
  edge("languages", "java"),
  edge("languages", "javascript"),
  edge("languages", "typescript"),
  edge("languages", "python"),
  edge("languages", "database"),

  edge("cpp", "qt"),
  edge("cpp", "multithreading"),

  edge("java", "javafx"),
  edge("java", "springboot"),

  edge("javascript", "express"),
  edge("javascript", "node"),

  edge("typescript", "angular"),

  edge("python", "numpy"),
  edge("python", "sklearn"),
  edge("python", "pytorch"),
  edge("python", "fastapi"),

  edge("database", "postgresql"),
  edge("database", "mysql"),

  // DEVOPS
  edge("devops", "cicd"),
  edge("devops", "container"),
  edge("devops", "iac"),
  edge("devops", "cloud"),

  edge("cicd", "github-actions"),
  edge("container", "docker"),
  edge("iac", "terraform"),

  edge("cloud", "aws"),
  edge("aws", "ec2s3"),
  edge("aws", "sagemaker"),
  edge("aws", "cloudwatch"),
  edge("aws", "lambda"),
  edge("aws", "ecr"),
];

function edge(source: string, target: string): Edge {
  return {
    id: `${source}-${target}`,
    source,
    target,
    animated: true,
    style: {
      stroke: "#22d3ee",
      strokeWidth: 1.5,
    },
  };
}

export default function PortfolioFlow() {
  return (
    <div className="h-full w-full overflow-hidden rounded-2xl bg-slate-950">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        minZoom={0.2}
        maxZoom={1.5}
        className="bg-slate-950"
      >
        <Background color="#164e63" gap={24} />
      </ReactFlow>
    </div>
  );
}