import { 
  FaBalanceScale, FaExclamationTriangle, FaClipboardCheck, FaFlask, FaCogs, FaSearch, FaUserShield, FaEye, 
  FaFileSignature, FaRecycle, FaProjectDiagram, FaCheckCircle, FaShieldAlt, FaFileAlt, FaClipboardList
} from "react-icons/fa";

const EHSMODULES = [
  {
    icon: FaShieldAlt,
    title: "Compliance & Regulatory Management",
    points: [
      "Ensure adherence to legal and industry-specific EHS standards.",
      "Maintain compliance records and automate reporting workflows.",
    ],
  },
  {
    icon: FaExclamationTriangle,
    title: "Incident & Near-Miss Management",
    points: [
      "Identify, track, and prevent workplace hazards effectively.",
      "Implement corrective and preventive measures to avoid recurrence.",
    ],
  },
  {
    icon: FaClipboardCheck,
    title: "Hazard Identification & Risk Assessment (HIRA)",
    points: [
      "Streamline hazard analysis and risk mitigation processes.",
      "Enable proactive safety planning with real-time tracking.",
    ],
  },
  {
    icon: FaFileAlt,
    title: "Safety Data Sheets (SDS)",
    points: [
      "Maintain and manage chemical safety documentation.",
      "Ensure quick access to hazard information and safety measures.",
    ],
  },
  {
    icon: FaCogs,
    title: "Material & Equipment Management",
    points: [
      "Maintain safety standards for materials and workplace equipment.",
      "Track inspections, maintenance, and compliance checks.",
    ],
  },
  {
    icon: FaClipboardList,
    title: "Audit & Inspection Tracking",
    points: [
      "Conduct systematic audits with real-time tracking and analytics.",
      "Generate detailed compliance reports for decision-making.",
    ],
  },
  {
    icon: FaUserShield,
    title: "Contractor & Employee Safety Management",
    points: [
      "Ensure safety compliance for employees and contractors.",
      "Manage certifications, training, and safety protocols.",
    ],
  },
  {
    icon: FaEye,
    title: "Work Area Monitoring",
    points: [
      "Monitor and manage hazardous work areas with safety protocols.",
      "Improve workplace conditions with real-time assessments.",
    ],
  },
  {
    icon: FaFileSignature,
    title: "Permit to Work (PTW)",
    points: [
      "Streamline permit approvals to ensure safer work environments.",
      "Track work authorization and approval status in real-time.",
    ],
  },
  {
    icon: FaRecycle,
    title: "Waste & Environmental Management",
    points: [
      "Optimize waste disposal and environmental impact tracking.",
      "Ensure compliance with regulatory waste management standards.",
    ],
  },
  {
    icon: FaProjectDiagram,
    title: "Management of Change (MOC)",
    points: [
      "Assign tasks cross-functionally with structured planning.",
      "Track execution, cost estimates, closure, and summary.",
    ],
  },
  {
    icon: FaCheckCircle,
    title: "Pre-Startup Safety Review (PSSR)",
    points: [
      "Streamline safety checks with workflows covering Entry, Plan, Action, Approval, and Closure.",
      "Ensure operational readiness and compliance before startup.",
    ],
  },
];

export default EHSMODULES;
