import {
  FaBolt,
  FaChartLine,
  FaBrain,
  FaUserCheck,
  FaShieldAlt,
  FaSyncAlt,
  FaFileAlt,
  FaCubes,
  FaLightbulb,
  FaTasks,
  FaProjectDiagram,
  FaSearch,
  FaDollarSign,
} from "react-icons/fa";

const DAbenefits = [
  {
    title: "Data-Driven Decision Making",
    icon: <FaBrain className="benefit-icon" />,
    desc:
      "Companies gain valuable insights to make faster, smarter, and more confident business decisions.",
  },
  {
    title: "Improved Operational Efficiency",
    icon: <FaBolt className="benefit-icon" />,
    desc:
      "Automated data pipelines and analytics reduce manual effort and streamline operational activities.",
  },
  {
    title: "Predictive Insights",
    icon: <FaChartLine className="benefit-icon" />,
    desc:
      "AI and statistical models forecast trends, helping businesses act proactively rather than reactively.",
  },
  {
    title: "Enhanced Customer Understanding",
    icon: <FaUserCheck className="benefit-icon" />,
    desc:
      "Analyzing usage patterns and behavior helps improve personalization, retention, and customer satisfaction.",
  },
  {
    title: "High Data Accuracy & Reliability",
    icon: <FaShieldAlt className="benefit-icon" />,
    desc:
      "Structured validation and testing improve data integrity and confidence in analytical outputs.",
  },
  {
    title: "Continuous Improvement",
    icon: <FaSyncAlt className="benefit-icon" />,
    desc:
      "Models can be retrained and optimized as new data becomes available, ensuring longer value over time.",
  },
  {
    title: "Better Governance & Compliance",
    icon: <FaFileAlt className="benefit-icon" />,
    desc:
      "Defined workflows and documentation ensure proper governance, transparency, and regulatory alignment.",
  },
  // Removed "Unified View of Business Data"
  // --- New Benefits ---
  {
    title: "Actionable Insights",
    icon: <FaLightbulb className="benefit-icon" />,
    desc:
      "Transforms raw data into meaningful insights that drive strategic initiatives and operational improvements.",
  },
  {
    title: "Enhanced Collaboration",
    icon: <FaTasks className="benefit-icon" />,
    desc:
      "Centralized dashboards and analytics enable cross-team collaboration and informed decision-making.",
  },
  {
    title: "End-to-End Data Visibility",
    icon: <FaProjectDiagram className="benefit-icon" />,
    desc:
      "Provides transparency across all stages of data collection, processing, and reporting for better oversight.",
  },
  {
    title: "Trend & Market Analysis",
    icon: <FaSearch className="benefit-icon" />,
    desc:
      "Identifies emerging trends, customer behavior shifts, and market opportunities to stay ahead of competition.",
  },
  {
    title: "Low-Cost Analytics Enablement",
    icon: <FaDollarSign className="benefit-icon" />,
    desc:
      "Delivers actionable insights and analytics at reduced operational costs, making data-driven decisions accessible to all businesses.",
  },
];

export default DAbenefits;