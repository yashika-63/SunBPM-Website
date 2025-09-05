import {
  FaProjectDiagram,
  FaSitemap,
  FaDatabase,
  FaNetworkWired,
  FaBalanceScale,
  FaLeaf,
} from "react-icons/fa";

const BRSRMODULES = [
  {
    icon: FaSitemap,
    title: "Enterprise Mapping",
    points: [
      "Define and structure business units, plants, and offices.",
      "Manage roles, approvals, and access levels for visibility.",
    ],
  },
  {
    icon: FaProjectDiagram,
    title: "Workflows",
    points: [
      "Automate BRSR processes with attribute codes and responsibilities.",
      "Set reporting frequencies with alerts and reminders for timely submissions.",
    ],
  },
  {
    icon: FaDatabase,
    title: "Data Management",
    points: [
      "Capture and validate master data at source with controls.",
      "Enable secure restructuring of data for analytics and insights.",
    ],
  },
  {
    icon: FaNetworkWired,
    title: "Associate Digitalization",
    points: [
      "Engage upstream and downstream value chain in reporting.",
      "Provide restricted access while ensuring assurance and transparency.",
    ],
  },
  {
    icon: FaLeaf,
    title: "Core Footprints & Assessment",
    points: [
      "Track organizational environmental and social impact metrics.",
      "Evaluate practices against benchmarks for performance improvement.",
    ],
  },
  {
    icon: FaBalanceScale,
    title: "Targets, Value Chain & Materiality",
    points: [
      "Set measurable sustainability goals with stakeholder priorities.",
      "Engage partners in transparent reporting for shared accountability.",
    ],
  },
];

export default BRSRMODULES;