import {
  FaBolt,
  FaLock,
  FaExpandArrowsAlt,
  FaPiggyBank,
  FaDatabase,
  FaHeadset,
  FaPuzzlePiece,
  FaLightbulb,
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
];

export default ERPbenefits;
