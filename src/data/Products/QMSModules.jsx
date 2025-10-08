import {
  FaSitemap,
  FaProjectDiagram,
  FaClipboardList,
  FaTasks,
  FaVial,
  FaExchangeAlt,
  FaBug,
  FaExclamationTriangle,
  FaTrafficLight,
  FaRegClock,
  FaFileAlt,
  FaClipboardCheck,
} from "react-icons/fa";

const QMSMODULES = [
  {
    icon: FaProjectDiagram,
    title: "Project Registrations",
    points: [
      "Centralized project initiation with unique IDs and metadata.",
      "Capture objectives, stakeholders, and scope for better tracking.",
    ],
  },
  {
    icon: FaClipboardList, 
    title: "Project Plan",
    points: [
      "Define project milestones, deliverables, and dependencies.",
      "Allocate resources with timelines for structured execution.",
    ],
  },
  {
    icon: FaTasks,
    title: "Task Tracking",
    points: [
      "Assign, monitor, and update tasks with real-time progress.",
      "Ensure accountability with role-based ownership and deadlines.",
    ],
  },
  {
    icon: FaClipboardCheck,
    title: "Testing System",
    points: [
      "Build and execute test cases with configurable workflows.",
      "Track results and feedback to ensure quality compliance.",
    ],
  },
  {
    icon: FaExchangeAlt,
    title: "Change Tracker",
    points: [
      "Manage change requests with approval workflows.",
      "Track impact analysis to minimize risks and disruptions.",
    ],
  },
  {
    icon: FaClipboardList,
    title: "Defect Tracker",
    points: [
      "Log, categorize, and prioritize defects efficiently.",
      "Monitor resolution status and prevent recurring issues.",
    ],
  },
  {
    icon: FaExclamationTriangle, 
    title: "Risk Log",
    points: [
      "Identify, assess, and record potential project risks.",
      "Mitigate issues with proactive action planning.",
    ],
  },
  {
    icon: FaTrafficLight, 
    title: "RAG – Red Amber Green (Project Report)",
    points: [
      "Visual project health indicators for quick decision-making.",
      "Generate performance reports to track progress and risks.",
    ],
  },
  {
    icon: FaRegClock, 
    title: "MOM (Minutes of Meeting)",
    points: [
      "Document discussions, decisions, and action items instantly.",
      "Share structured MOMs with stakeholders for alignment.",
    ],
  },
  {
    icon: FaFileAlt, 
    title: "Reports",
    points: [
      "Generate dynamic reports across tasks, defects, and risks.",
      "Export insights for performance reviews and audits.",
    ],
  },
];

export default QMSMODULES;
