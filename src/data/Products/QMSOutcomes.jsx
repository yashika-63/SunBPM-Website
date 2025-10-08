import { FaCheckCircle, FaUsers, FaChartLine } from "react-icons/fa";

const QMSOUTCOMES = [
  {
    icon: FaCheckCircle, 
    title: "Enhanced Quality Control",
    points: [
      "Standardized workflows ensure compliance with industry benchmarks.",
      "Real-time monitoring of tasks, defects, and risks.",
      "Reduced errors through structured reviews and audits.",
    ],
  },
  {
    icon: FaUsers, 
    title: "Improved Collaboration & Transparency",
    points: [
      "Role-based accountability for tasks and deliverables.",
      "Centralized MOMs for seamless communication.",
      "Transparent project status through visual RAG reporting.",
    ],
  },
  {
    icon: FaChartLine,
    title: "Smarter Decision-Making",
    points: [
      "Data-driven reports for project health and performance.",
      "Risk and change tracking to minimize disruptions.",
      "Insights that support faster, informed decisions.",
    ],
  },
];

export default QMSOUTCOMES;