import { FaFileSignature, FaClipboardList, FaDatabase, FaFileAlt } from "react-icons/fa";

const POPRMODULES = [
  {
    icon: FaFileSignature,
    title: "Purchase Requisition (PR)",
    points: [
      "Initiate requisitions for consumables, services, and domestic assets.",
      "Multi-level approvals by superior Level 1 to Level 3.",
    ],
  },
  {
    icon: FaClipboardList,
    title: "Purchase Order (PO)",
    points: [
      "Manage PO entries, modifications, and costing approvals.",
      "Automate mail notifications and SCM-based entries.",
      "Auto-read PDF PO's from emails and store them directly in the database.",
    ],
  },
  {
    icon: FaDatabase,
    title: "Master Update",
    points: [
      "Update incoterms, postal codes, and sales organization data.",
      "Maintain accurate records for compliance and operational efficiency.",
    ],
  },
  {
    icon: FaFileAlt,
    title: "Reports",
    points: [
      "Generate detailed purchase order reports.",
      "Access SAP-integrated insights for informed decision-making.",
      "Export reports to CSV or Excel, and send those exports to any server.",
    ],
  },
];

export default POPRMODULES;