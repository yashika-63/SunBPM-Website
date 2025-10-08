import { FaShoppingCart, FaBolt, FaChartBar } from "react-icons/fa";

const POPROUTCOMES = [
  {
    icon: FaShoppingCart,
    title: "Simplified Procurement Process",
    points: [
      "Easy initiation and tracking of purchase requisitions.",
      "Standardized workflows for consumables, services, and assets.",
      "Reduced manual errors with automated entries.",
    ],
  },
  {
    icon: FaBolt,
    title: "Faster Approvals & Execution",
    points: [
      "Multi-level approvals by superior Level 1 to Level 3.",
      "Role-based accountability ensures transparency.",
      "Automated mail notifications for real-time updates.",
    ],
  },
  {
    icon: FaChartBar,
    title: "Centralized Control & Reporting",
    points: [
      "Consolidated PO/PR reports for better visibility.",
      "SAP integration for accurate data synchronization.",
      "Master updates to maintain compliance and accuracy.",
    ],
  },
];

export default POPROUTCOMES;