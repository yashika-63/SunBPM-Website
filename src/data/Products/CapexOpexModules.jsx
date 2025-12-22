import {
  FaBalanceScale,
  FaMoneyCheckAlt,
  FaHandshake,
  FaChartPie
} from "react-icons/fa";

const CapexOpexModules = [
  {
    id: "budget-planning-validation",
    groupName: "Budget Planning & Validation",
    shortDesc:
      "Establishes a strong and disciplined foundation for financial planning by bringing structure, consistency, and accountability to how budgets are created, reviewed, and approved. By standardizing budgeting practices across departments, organizations gain better visibility into planned versus actual spend while reducing manual errors and inconsistencies. Real-time budget validation ensures every request is checked against approved allocations before funds are committed, preventing surprises later in the cycle. This creates confidence among stakeholders, strengthens financial governance, and ensures funds are utilized responsibly and transparently at every stage.",
    image: "https://javajar1234.s3.ap-south-1.amazonaws.com/SunBPM+website/products/CSR/viewdetail.jpg",
    icon: FaBalanceScale,

    modules: [
      {
        id: "budget-management",
        title: "Budget Management",
        focus: [
          "Create, modify, and approve budgets with role-based workflows across teams and departments. Generate consolidated budget summaries."
        ],
        benefits: [
          "Standardizes budget entry processes, ensuring accountability and accurate allocation of financial resources."
        ],
      },
      {
        id: "budget-amendment",
        title: "Budget Amendment",
        focus: [
          "Submit amendment requests with documentation, track approval statuses, and maintain a transparent amendment log."
        ],
        benefits: [
          "Provides complete clarity and control over budget revisions, preventing unapproved overspending."
        ],
      },
      {
        id: "budget-validation",
        title: "Budget Validation",
        focus: [
          "Validate spending requests in real time against allocated budgets and trigger alerts for deviations or non-compliance."
        ],
        benefits: [
          "Enforces financial discipline and avoids budget overshoots during procurement and project execution."
        ],
      },
    ],
  },

  {
    id: "capex-request-management",
    groupName: "CAPEX Request Management",
    shortDesc:
      "Provides a centralized and transparent approach to managing the entire capital expenditure lifecycle, from initial idea submission to final investment approval. By structuring business justifications, ROI expectations, and cost evaluations, it enables decision-makers to assess investments with greater clarity and confidence. Multi-level approval workflows ensure governance is maintained without slowing down critical initiatives. This results in smarter capital allocation, reduced approval delays, and improved returns on long-term strategic investments.",
    image: "https://javajar1234.s3.ap-south-1.amazonaws.com/SunBPM+website/products/CSR/viewdetail.jpg",
    icon: FaMoneyCheckAlt,

    modules: [
      {
        id: "capex-entry-tracking",
        title: "CAPEX Entry & Tracking",
        focus: [
          "Submit capital expenditure requests with business justification, expected ROI, cost estimations, and vendor quotations."
        ],
        benefits: [
          "Ensures structured and consistent evaluation of organizational capital investments."
        ],
      },
      {
        id: "capex-approval-workflow",
        title: "Approval Workflow",
        focus: [
          "Supports multi-level approval routing from Level 1 to Level 3 with automated escalation for pending decisions."
        ],
        benefits: [
          "Speeds up decision-making while preserving governance, documentation, and transparency."
        ],
      },
      {
        id: "vendor-quotation-management",
        title: "Vendor & Quotation Management",
        focus: [
          "Compare vendor quotations, track negotiations, and finalize preferred suppliers within the platform."
        ],
        benefits: [
          "Reduces procurement delays and ensures cost-effective vendor selection based on real data."
        ],
      },
    ],
  },

  {
    id: "opex-vendor-management",
    groupName: "OPEX & Vendor Management",
    shortDesc:
      "Brings clarity, control, and consistency to everyday operational spending while strengthening vendor governance. By capturing OPEX transactions through defined approval workflows, organizations gain real-time visibility into ongoing expenses and can proactively manage costs. Centralized vendor records ensure compliance, reduce duplication, and improve coordination across teams. Together, these capabilities support tighter cost control, better supplier relationships, and continuous optimization of operational expenditure.",
    image: "https://javajar1234.s3.ap-south-1.amazonaws.com/SunBPM+website/products/CSR/viewdetail.jpg",
    icon: FaHandshake,

    modules: [
      {
        id: "opex-recording-approval",
        title: "OPEX Recording & Approval",
        focus: [
          "Capture operational expenditures, categorize them, and execute role-based approval workflows."
        ],
        benefits: [
          "Ensures consistent tracking of operational spend and compliance with financial policies."
        ],
      },
      {
        id: "vendor-registration",
        title: "Vendor Registration",
        focus: [
          "Capture supplier data, verify compliance documents, and process multi-level approvals for vendor onboarding."
        ],
        benefits: [
          "Centralizes vendor management, improves supplier reliability, and reduces compliance risk."
        ],
      },
      {
        id: "expense-analytics",
        title: "Expense Analytics",
        focus: [
          "Track spending trends, categorize expenditures, and generate performance summaries for reporting."
        ],
        benefits: [
          "Offers data-driven insights to improve operational cost efficiency and financial planning."
        ],
      },
    ],
  },

  {
    id: "reporting-analytics-optimization",
    groupName: "Reporting, Analytics & Optimization",
    shortDesc:
      "Converts complex financial data into clear, actionable insights that support smarter and faster decision-making. Real-time dashboards and alerts help leadership quickly identify exceptions, risks, and performance gaps before they escalate. Advanced analytics enable continuous monitoring of budgets, spend patterns, and compliance metrics across the organization. This empowers teams to optimize financial performance, strengthen governance, and drive ongoing improvements in budgeting and cost control.",
    image: "https://javajar1234.s3.ap-south-1.amazonaws.com/SunBPM+website/products/CSR/viewdetail.jpg",
    icon: FaChartPie,

    modules: [
      {
        id: "dynamic-reporting-analytics",
        title: "Dynamic Reporting & Analytics",
        focus: [
          "Generate CAPEX, OPEX, budget utilization, and compliance reports with export to Excel, CSV, or external systems."
        ],
        benefits: [
          "Empowers leadership to make informed decisions backed by audit-ready financial insights."
        ],
      },
      {
        id: "exception-alerts-dashboards",
        title: "Exception Alerts & Dashboards",
        focus: [
          "Identify delayed approvals, budget overruns, and pending vendor actions with real-time alerts."
        ],
        benefits: [
          "Helps teams intervene before delays cause financial or operational bottlenecks."
        ],
      },
      {
        id: "vendor-spend-insights",
        title: "Vendor & Spend Insights",
        focus: [
          "Evaluate supplier performance, cost-effectiveness, and overall contribution to procurement efficiency."
        ],
        benefits: [
          "Strengthens vendor partnerships and improves cost optimization based on reliable performance data."
        ],
      },
    ],
  },
];

export default CapexOpexModules;
