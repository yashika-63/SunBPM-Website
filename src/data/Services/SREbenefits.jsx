import {
  FaServer,
  FaUndo,
  FaSyncAlt,
  FaBalanceScale,
  FaTachometerAlt,
  FaShieldAlt,
  FaExpandArrowsAlt,
  FaChartLine,
  FaTasks,
  FaCogs,
  FaBolt,
  FaPiggyBank
} from "react-icons/fa";

const SREbenefits = [
  {
    title: "Higher System Availability",
    icon: <FaServer className="benefit-icon" />,
    desc:
      "Proactive release management and monitoring improve uptime and ensure reliable service availability for users and customers.",
  },
  {
    title: "Reduced Deployment Risk",
    icon: <FaUndo className="benefit-icon" />,
    desc:
      "Version control, rollback plans, and staged rollouts minimize the impact of faulty releases and reduce operational risk.",
  },
  {
    title: "Continuous Improvement",
    icon: <FaSyncAlt className="benefit-icon" />,
    desc:
      "Frequent minor enhancements and iterative development foster steady improvements in application stability and capability.",
  },
  {
    title: "Vendor Compliance & Security",
    icon: <FaBalanceScale className="benefit-icon" />,
    desc:
      "Timely vendor updates and patching ensure systems remain compliant with regulations and aligned with security best practices.",
  },
  {
    title: "Faster Feature Delivery",
    icon: <FaTachometerAlt className="benefit-icon" />,
    desc:
      "Streamlined release processes and agile development enable quicker rollout of new features and business capabilities.",
  },
  {
    title: "Lower Operational Disruptions",
    icon: <FaShieldAlt className="benefit-icon" />,
    desc:
      "Planned releases, testing, and rollback strategies reduce downtime and protect business continuity during updates.",
  },
  {
    title: "Scalability & Future Readiness",
    icon: <FaExpandArrowsAlt className="benefit-icon" />,
    desc:
      "Ongoing development and structured release planning ensure systems can scale and adapt to evolving business requirements.",
  },
  {
    title: "Real-Time Monitoring & Alerts",
    icon: <FaChartLine className="benefit-icon" />,
    desc:
      "Continuous system monitoring and automated alerts detect and resolve issues before they impact users.",
  },
  {
    title: "Optimized Resource Utilization",
    icon: <FaTasks className="benefit-icon" />,
    desc:
      "Efficient allocation and orchestration of infrastructure resources reduce wastage and improve performance.",
  },
  {
    title: "Automated Incident Response",
    icon: <FaCogs className="benefit-icon" />,
    desc:
      "Incident detection, automated remediation, and runbooks accelerate problem resolution and minimize downtime.",
  },
  {
    title: "Proactive Capacity Planning",
    icon: <FaBolt className="benefit-icon" />,
    desc:
      "Forecasting system loads and pre-emptive scaling ensures readiness for traffic spikes and business growth.",
  },
  {
    title: "Reduced Operational Costs",
    icon: <FaPiggyBank className="benefit-icon" />,
    desc:
      "Automation, proactive monitoring, and efficient resource planning lower IT operational expenses and maximize ROI.",
  },
];

export default SREbenefits;
