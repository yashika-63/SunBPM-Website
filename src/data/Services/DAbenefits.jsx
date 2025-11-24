import {
  FaBolt,
  FaChartLine,
  FaBrain,
  FaUserCheck,
  FaShieldAlt,
  FaSyncAlt,
  FaFileAlt,
  FaCubes,
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
  {
    title: "Unified View of Business Data",
    icon: <FaCubes className="benefit-icon" />,
    desc:
      "Consolidating multiple data sources supports a single source of truth across the organization.",
  },
];

export default DAbenefits;