import {
  FaBolt,
  FaLock,
  FaExpandArrowsAlt,
  FaPiggyBank,
  FaDatabase,
  FaHeadset,
  FaPuzzlePiece,
  FaLightbulb,
  FaSyncAlt,
  FaChartLine,
  FaTasks,
  FaCogs,
} from "react-icons/fa";

const ERPbenefits = [
  {
    title: "Efficiency Of Business",
    icon: <FaBolt className="benefit-icon" />,
    desc:
      "Automates tasks and integrates workflows, improving collaboration and reducing handoffs with real-time visibility.",
  },
  {
    title: "Data Security",
    icon: <FaLock className="benefit-icon" />,
    desc:
      "Ensures secure access with role controls, encryption, backups, and compliance with protection standards.",
  },
  {
    title: "Scalability",
    icon: <FaExpandArrowsAlt className="benefit-icon" />,
    desc:
      "Expands seamlessly by adding users and modules without replatforming, supporting continuous business growth.",
  },
  {
    title: "Reduced Costs",
    icon: <FaPiggyBank className="benefit-icon" />,
    desc:
      "Cuts operational expenses through automation, fewer errors, optimized use of resources, and lower maintenance overhead.",
  },
  {
    title: "Improved Data Management",
    icon: <FaDatabase className="benefit-icon" />,
    desc:
      "Centralizes information for accurate, real-time decisions and early detection of issues across operations.",
  },
  {
    title: "Customer Service",
    icon: <FaHeadset className="benefit-icon" />,
    desc:
      "Improves customer experience with quick, accurate access to support, order, and shipment information.",
  },
  {
    title: "Customizable",
    icon: <FaPuzzlePiece className="benefit-icon" />,
    desc:
      "Adapts to business processes with flexible modules, integrations, and configurable reporting as needs evolve.",
  },
  {
    title: "Analysis & Forecasting",
    icon: <FaLightbulb className="benefit-icon" />,
    desc:
      "Provides dashboards and forecasting tools for strategic planning, capacity management, and data-driven decisions.",
  },
  // New Benefits
  {
    title: "Seamless System Integration",
    icon: <FaSyncAlt className="benefit-icon" />,
    desc:
      "Connects all enterprise systems including CRM, SCM, and HR, eliminating data silos and ensuring smooth operations.",
  },
  {
    title: "Enhanced Reporting & Analytics",
    icon: <FaChartLine className="benefit-icon" />,
    desc:
      "Offers detailed, real-time reports and KPIs to support management decisions and strategic planning.",
  },
  {
    title: "Optimized Resource Management",
    icon: <FaTasks className="benefit-icon" />,
    desc:
      "Improves utilization of human, financial, and material resources through coordinated workflows and planning tools.",
  },
  {
    title: "Process Standardization",
    icon: <FaCogs className="benefit-icon" />,
    desc:
      "Implements standardized processes across departments to reduce errors, enhance efficiency, and maintain consistency.",
  },
];

export default ERPbenefits;
