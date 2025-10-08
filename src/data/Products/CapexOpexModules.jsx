import {
  FaMoneyCheckAlt,
  FaEdit,
  FaCogs,
  FaFileInvoiceDollar,
  FaUserCheck,
  FaFileAlt,
} from "react-icons/fa";

const CapexOpexMODULES = [
  {
    icon: FaMoneyCheckAlt, 
    title: "Budget",
    points: [
      "Create, modify, and approve budgets with role-based workflows.",
      "Generate summaries and track approvals across multiple levels.",
    ],
  },
  {
    icon: FaEdit, 
    title: "Budget Amendment",
    points: [
      "Submit amendment requests with proper documentation.",
      "Get approvals and maintain a transparent amendment summary.",
    ],
  },
  {
    icon: FaCogs,
    title: "CAPEX",
    points: [
      "Manage CAPEX entries, quotations, negotiations, and vendor selection.",
      "Ensure multi-level approvals up to superior Level-1 to Level-3.",
    ],
  },
  {
    icon: FaFileInvoiceDollar, 
    title: "Expense (OPEX)",
    points: [
      "Record, approve, and track operational expenses efficiently.",
      "Update material codes, modify entries, and generate detailed summaries.",
    ],
  },
  {
    icon: FaUserCheck, 
    title: "Vendor Registration",
    points: [
      "Capture vendor details, conduct verifications, and ensure compliance.",
      "Enable multi-level approvals including superior Level-1 to Level-3.",
    ],
  },
  {
    icon: FaFileAlt, 
    title: "Reports",
    points: [
      "Generate detailed CAPEX/OPEX, budget, and compliance reports.",
      "Access negotiation, quotation, and overall approval summaries instantly.",
    ],
  },
];

export default CapexOpexMODULES;
