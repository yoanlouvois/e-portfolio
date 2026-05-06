import FlowGraph from "@/components/FlowGraph";

const rawNodes = [
  { id: "devops", label: "DevOps / MLOps" },
  { id: "cicd", label: "CI/CD" },
  { id: "github-actions", label: "GitHub Actions" },
  { id: "container", label: "Container" },
  { id: "docker", label: "Docker" },
  { id: "iac", label: "IaC" },
  { id: "terraform", label: "Terraform" },
  { id: "cloud", label: "Cloud" },
  { id: "aws", label: "AWS" },
  { id: "ec2-s3", label: "EC2 / S3" },
  { id: "sagemaker", label: "SageMaker\nAI pipelines" },
  { id: "cloudwatch", label: "CloudWatch" },
  { id: "lambda-api", label: "Lambda / API Gateway" },
  { id: "ecr", label: "ECR" },
];

const rawEdges = [
  ["devops", "cicd"],
  ["cicd", "github-actions"],
  ["devops", "container"],
  ["container", "docker"],
  ["devops", "iac"],
  ["iac", "terraform"],
  ["devops", "cloud"],
  ["cloud", "aws"],
  ["aws", "ec2-s3"],
  ["aws", "sagemaker"],
  ["aws", "cloudwatch"],
  ["aws", "lambda-api"],
  ["aws", "ecr"],
];

export default function DevOpsFlow() {
  return <FlowGraph rawNodes={rawNodes} rawEdges={rawEdges} />;
}