import {
  FaClipboardCheck,
  FaFileInvoiceDollar,
  FaDatabase,
  FaChartLine,
} from "react-icons/fa";

const PRPOMODULES = [
  {
    id: "requisition-initiation-validation",
    groupName: "Requisition Initiation & Validation",
    icon: FaClipboardCheck,
    shortDesc:
      "Creates a clear, controlled, and standardized entry point for all procurement requests across the organization. By digitizing requisition creation, validations, and approvals, this stage ensures that every purchase request is properly justified, aligned to budgets, and compliant with internal policies before it moves forward. Real-time budget checks, automated workflows, and transparent approvals help reduce delays, avoid unnecessary spending, and give stakeholders confidence that procurement decisions are financially sound and well-governed from the very beginning.",
    image: "https://javajar1234.s3.ap-south-1.amazonaws.com/SunBPM+website/products/CSR/viewdetail.jpg",

    modules: [
      {
        id: "purchase-requisition-management",
        title: "Purchase Requisition (PR) Management",
        focus: [
          "Initiate and record requisitions with unique IDs, cost centers, item details, justification, and supporting documents."
        ],
        benefits: [
          "Standardizes requisitions across departments while maintaining transparency and accountability."
        ],
      },
      {
        id: "approval-workflow",
        title: "Approval Workflow",
        focus: [
          "Configurable multi-stage approvals based on department, role, cost limit, and material category with auto-escalations."
        ],
        benefits: [
          "Ensures faster decision-making with complete tracking and governance over approval cycles."
        ],
      },
      {
        id: "budget-validation",
        title: "Budget Validation",
        focus: [
          "Real-time checks against allocated budgets with automated alerts for exceptions or budget overruns."
        ],
        benefits: [
          "Prevents overspending and promotes financial discipline throughout procurement."
        ],
      },
    ],
  },

  {
    id: "purchase-order-management",
    groupName: "Purchase Order Management & Execution",
    icon: FaFileInvoiceDollar,
    shortDesc:
      "Manages the complete purchase order lifecycle with accuracy, speed, and strong control by automating key steps from PO creation to execution. This phase minimizes manual effort through system-driven validations, approvals, and document handling while ensuring collaboration between internal teams and vendors. By maintaining consistency, compliance, and visibility throughout the PO process, organizations can reduce errors, accelerate turnaround times, and ensure every order is executed in line with financial policies and supply chain requirements.",
    image: "https://javajar1234.s3.ap-south-1.amazonaws.com/SunBPM+website/products/CSR/viewdetail.jpg",

    modules: [
      {
        id: "automated-email-document-integration",
        title: "Automated Email & Document Integration",
        focus: [
          "Automatically captures PO PDFs from incoming emails, validates details through SCM."
        ],
        benefits: [
          "Eliminates data entry errors, accelerates approvals, and maintains a secure audit-ready document repository."
        ],
      },
      {
        id: "po-entry-modification",
        title: "PO Entry & Modification",
        focus: [
          "Create, update, and manage purchase orders with standardized fields, vendor details, schedules, and compliance validations."
        ],
        benefits: [
          "Ensures accurate and consistent PO creation while reducing operational workload and data inconsistencies."
        ],
      },
      {
        id: "scm-verification",
        title: "SCM Verification & Validation",
        focus: [
          "SCM team reviews product details, quantities, specifications, and vendor information before final approval."
        ],
        benefits: [
          "Prevents procurement discrepancies and ensures all PO data is validated before progressing to costing approval."
        ],
      },
      {
        id: "costing-approval",
        title: "Costing Approval Workflow",
        focus: [
          "Multi-level costing approval that verifies pricing, budget alignment, rate contracts, and financial compliance."
        ],
        benefits: [
          "Strengthens financial control and ensures all purchases comply with internal cost policies and budget limits."
        ],
      },
      {
        id: "vendor-collaboration-dashboard",
        title: "Vendor Collaboration Dashboard",
        focus: [
          "Enables vendors to acknowledge POs, upload invoices, and update delivery status through a self-service interface."
        ],
        benefits: [
          "Improves supplier communication and enhances transparency across the procurement lifecycle."
        ],
      }
    ],
  },

  {
    id: "master-data-compliance",
    groupName: "Master Data & Compliance Control",
    icon: FaDatabase,
    shortDesc:
      "Ensures accuracy, consistency, and compliance across all procurement activities by maintaining a centralized and reliable master data foundation. This layer keeps vendor information, organizational structures, and reference data synchronized and up to date while supporting seamless integration with enterprise systems. By eliminating data silos and manual inconsistencies, it strengthens audit readiness, reduces operational risk, and ensures that every procurement transaction is supported by trusted, compliant master data.",
    image: "https://javajar1234.s3.ap-south-1.amazonaws.com/SunBPM+website/products/CSR/viewdetail.jpg",

    modules: [
      {
        id: "master-updates",
        title: "Master Updates",
        focus: [
          "Manage incoterms, vendor master data, postal codes, and organizational structures in a unified system."
        ],
        benefits: [
          "Ensures consistent, compliant, and up-to-date information for all requisition and order workflows."
        ],
      },
      {
        id: "erp-integration",
        title: "ERP Integration (SAP, Oracle, etc.)",
        focus: [
          "Real-time synchronization of PR and PO data with ERP systems for finance, inventory, and material management."
        ],
        benefits: [
          "Avoids duplication and ensures a single source of truth for reporting and financial audits."
        ],
      },
      {
        id: "audit-trail-version-control",
        title: "Audit Trail & Version Control",
        focus: [
          "Tracks every modification, approval, and update with timestamped logs and full version visibility."
        ],
        benefits: [
          "Provides complete traceability and ensures strong compliance support for internal and external audits."
        ],
      },
    ],
  },

  {
    id: "reporting-analytics-optimization",
    groupName: "Reporting, Analytics & Optimization",
    icon: FaChartLine,
    shortDesc:
      "Transforms procurement data into meaningful insights that help teams monitor performance, identify risks, and continuously improve processes. With real-time dashboards, automated alerts, and detailed analytics, stakeholders gain visibility into spend patterns, supplier performance, and operational bottlenecks. This enables proactive decision-making, cost optimization, and stronger supplier management while driving efficiency and accountability across the entire procurement lifecycle.",
    image: "https://javajar1234.s3.ap-south-1.amazonaws.com/SunBPM+website/products/CSR/viewdetail.jpg",

    modules: [
      {
        id: "dynamic-reporting-analytics",
        title: "Dynamic Reporting & Analytics",
        focus: [
          "Generate visual reports on PR timeline, PO lifecycle, vendor performance, and spending patterns with export options."
        ],
        benefits: [
          "Strengthens leadership decision-making through accurate, real-time operational insights."
        ],
      },
      {
        id: "exception-reports-alerts",
        title: "Exception Reports & Alerts",
        focus: [
          "Automatically identify delayed approvals, pending deliveries, and over-budget requisitions with immediate notifications."
        ],
        benefits: [
          "Helps teams intervene in time to avoid procurement disruptions and improve operational efficiency."
        ],
      },
      {
        id: "vendor-performance-insights",
        title: "Vendor Performance Insights",
        focus: [
          "Monitor supplier KPIs such as delivery timeliness, service quality, and issue resolution metrics."
        ],
        benefits: [
          "Supports data-backed vendor evaluation and improves performance across supplier relationships."
        ],
      },
    ],
  },
];

export default PRPOMODULES;
