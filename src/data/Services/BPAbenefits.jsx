import {
  FaBolt,
  FaTasks,
  FaClock,
  FaRobot,
  FaThumbsUp,
  FaBalanceScale,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";

const BPAbenefits = [
  {
    title: "Higher Process Efficiency",
    icon: <FaBolt className="benefit-icon" />,
    desc:
      "Automation eliminates repetitive manual work, reduces processing time and ensures faster task execution.",
  },
  {
    title: "Standardized Workflows",
    icon: <FaTasks className="benefit-icon" />,
    desc:
      "Predefined automation templates ensure consistent and error-free business processes across departments.",
  },
  {
    title: "Reduced Operational Costs",
    icon: <FaClock className="benefit-icon" />,
    desc:
      "Less manual intervention and optimized workflows lower resource spending and improve operational margins.",
  },
  {
    title: "AI & RPA Enablement",
    icon: <FaRobot className="benefit-icon" />,
    desc:
      "AI-powered decision automation and robotic workflows improve accuracy and decision-making quality.",
  },
  {
    title: "Better Customer Experience",
    icon: <FaThumbsUp className="benefit-icon" />,
    desc:
      "Automation enables faster response times, consistent service delivery, and a smoother customer lifecycle.",
  },
  {
    title: "Stronger Compliance & Governance",
    icon: <FaBalanceScale className="benefit-icon" />,
    desc:
      "Automated tracking and documentation ensure adherence to regulatory standards and reduce compliance risks.",
  },
  {
    title: "Data-Driven Insights",
    icon: <FaChartLine className="benefit-icon" />,
    desc:
      "Integrated BI tools provide real-time dashboards and predictive analytics for smarter business decisions.",
  },
  {
    title: "Improved Security & Traceability",
    icon: <FaShieldAlt className="benefit-icon" />,
    desc:
      "Automated workflows ensure better audit trails, controlled access, and higher data security across systems.",
  },
];

export default BPAbenefits;
