import { FaUserShield, FaClipboardCheck ,FaVials, FaExclamationTriangle, FaBalanceScale, FaShieldAlt } from "react-icons/fa";

const EHSMODULES = [
  {
    icon: FaBalanceScale,
    title: "Compliance & Regulatory Management",
    points: [
      "Ensure adherence to legal and industry-specific EHS standards",
      "Maintain compliance records and automate reporting workflows",
    ],
  },
  {
    icon: FaExclamationTriangle,
    title: "Incident & Risk Management",
    points: [
      "Identify, track, and prevent workplace hazards effectively",
      "Implement corrective actions and preventive safety measures",
    ],
  },
  {
    icon: FaShieldAlt,
    title: "Hazard Identification & Permit to Work",
    points: [
      "Streamline permit approvals for safer work environments",
      "Track hazard controls and work authorization in real time",
    ],
  },
  {
    icon: FaVials,
    title: "Safety Data & Material Management",
    points: [
      "Maintain chemical safety documentation and SDS records",
      "Track inspections, equipment safety, and compliance checks",
    ],
  },
  {
    icon: FaClipboardCheck,
    title: "Audits & Inspections",
    points: [
      "Conduct systematic audits with real-time tracking and analytics",
      "Generate actionable compliance reports for decision-making",
    ],
  },
  {
    icon: FaUserShield,
    title: "Workforce & Contractor Safety",
    points: [
      "Manage training, certifications, and safety protocols for employees and contractors",
      "Promote accountability and build a strong safety culture",
    ],
  },
];

export default EHSMODULES;