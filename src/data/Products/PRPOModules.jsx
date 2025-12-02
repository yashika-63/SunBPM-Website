const PRPOMODULES = [
  {
    id: "requisition-initiation-validation",
    groupName: "Requisition Initiation & Validation",
    shortDesc:
      "Standardized requisition creation with automated approvals and real-time budget validation ensuring controlled purchasing operations.",
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
  shortDesc:
    "Streamlined purchase order processing with automated document handling, SCM verification, costing approvals, and system integrations.",
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
}

,

  {
    id: "master-data-compliance",
    groupName: "Master Data & Compliance Control",
    shortDesc:
      "Centralized master data and integration ensuring accuracy, consistency, and full audit traceability across procurement operations.",
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
    shortDesc:
      "Real-time visibility into procurement performance with alerts, automation, and insights for continuous improvement.",
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
