 import {
   FaServer,
   FaUndo,
   FaSyncAlt,
   FaBalanceScale,
   FaTachometerAlt,
   FaUserCheck,
   FaShieldAlt,
   FaExpandArrowsAlt,
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
    title: "Improved User Experience",
    icon: <FaUserCheck className="benefit-icon" />,
    desc:
      "Targeted Minor enhancements and major releases improve workflows and boost user satisfaction.",
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
];

export default SREbenefits;