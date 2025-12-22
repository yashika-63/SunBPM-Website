import {
  FaClipboardCheck,
  FaHandsHelping,
  FaChartLine,
  FaFileAlt,
} from "react-icons/fa";

const CSRMODULES = [
  {
    id: "planning-budget-control",
    groupName: "Planning and Budget Control",
    icon: FaClipboardCheck,
    shortDesc:
      "Builds a strong and reliable governance foundation for CSR programs by bringing structure to budget planning, policy approvals, and project initiation. It ensures CSR funds are allocated with complete transparency, approvals follow clearly defined controls, and every initiative is registered in a standardized manner from the start. By aligning planning with statutory requirements and internal policies, organizations gain better visibility, accountability, and confidence in how CSR decisions are made. This structured approach minimizes risk, improves compliance, and sets the stage for effective and responsible CSR execution.",
    image: "https://javajar1234.s3.ap-south-1.amazonaws.com/SunBPM+website/products/CSR/viewdetail.jpg",

    modules: [
      {
        id: "csr-committee-governance",
        title: "CSR Committee & Governance",
        focus: [
          "Streamlines CSR policy creation, meeting management, corrective actions, and governance documentation."
        ],
        benefits: [
          "Ensures compliance with CSR regulations and strengthens responsible decision-making through structured governance."
        ],
      },
      {
        id: "budget-planning-allocation",
        title: "Budget Planning & Allocation",
        focus: [
          "Define overall CSR budget, allocate funds to mandated focus areas, and manage multi-year projections.",
        ],
        benefits: [
          "Ensures mandatory compliance spending is planned accurately and tracked against legal requirements in real-time.",
        ],
      },
      {
        id: "policy-approval-workflow",
        title: "Policy & Approval Workflow",
        focus: [
          "Digital approval workflows for annual policies, project sanctions, and emergency funding.",
        ],
        benefits: [
          "Provides an audit-ready governance trail for every strategic decision, minimizing internal risk.",
        ],
      },
      {
        id: "project-registrations",
        title: "Project Registrations",
        focus: [
          "Standardized forms for initiating projects with unique IDs, objectives, and high-level scope definition.",
        ],
        benefits: [
          "Enforces governance consistency across all initiatives, regardless of geography or focus area.",
        ],
      },
    ],
  },

  {
    id: "execution-partner-management",
    groupName: "Execution and Partner Management",
    icon: FaHandsHelping,
    shortDesc:
      "Brings control, transparency, and accountability to the execution phase of CSR initiatives by governing implementation partners, fund flows, and volunteer involvement. It enables organizations to closely monitor agency performance, link payments to measurable milestones, and ensure funds are released responsibly. Structured oversight of partners and volunteers builds trust while reducing execution risks. This ensures CSR projects are delivered efficiently on the ground, with clear visibility into progress, spend, and stakeholder participation.",
    image: "https://javajar1234.s3.ap-south-1.amazonaws.com/SunBPM+website/products/CSR/viewdetail.jpg",

    modules: [
      {
        id: "agency-implementation-partner",
        title: "Agency / Implementation Partner",
        focus: [
          "Vetting, onboarding, and performance tracking of implementation agencies. Manages agreements and periodic reporting requirements.",
        ],
        benefits: [
          "Ensures accountability and due diligence for all external partners, protecting the company's reputation.",
        ],
      },
      {
        id: "fund-disbursement-tracker",
        title: "Fund Disbursement Tracker",
        focus: [
          "Links project milestones to finance systems for transparent, phased release of funds.",
        ],
        benefits: [
          "Guarantees financial control by preventing payments until verifiable project milestones are met.",
        ],
      },
      {
        id: "volunteer-management",
        title: "Volunteer Management",
        focus: [
          "Tracks employee volunteer hours, skills utilized, and engagement across various projects.",
        ],
        benefits: [
          "Quantifies the in-kind contribution of the organization and boosts employee morale and participation.",
        ],
      },
    ],
  },

  {
    id: "impact-assessment-verification",
    groupName: "Impact Assessment and Verification",
    icon: FaChartLine,
    shortDesc:
      "Enables organizations to clearly understand and demonstrate the real-world impact of their CSR initiatives through structured measurement and verification. By capturing baseline data, monitoring progress, and assessing outcomes, it ensures impact claims are backed by credible and objective evidence. This data-driven approach builds transparency and trust with regulators, stakeholders, and communities. It transforms CSR from activity-based reporting into outcome-driven impact validation.",
    image: "https://javajar1234.s3.ap-south-1.amazonaws.com/SunBPM+website/products/CSR/viewdetail.jpg",

    modules: [
      {
        id: "baseline-data-collection",
        title: "Baseline Data Collection",
        focus: [
          "Mandatory module to collect objective, pre-intervention data (e.g., literacy rates, access to water) before project commencement.",
        ],
        benefits: [
          "Provides the unforgeable starting point required for credible impact measurement.",
        ],
      },
      {
        id: "impact-assessment",
        title: "Impact Assessment",
        focus: [
          "Tracks post-intervention data collection, analysis, and formal generation of the final impact report.",
        ],
        benefits: [
          "Delivers verifiable proof of outcome, essential for investor relations and regulatory reporting.",
        ],
      },
      {
        id: "project-monitoring-tracking",
        title: "Project Monitoring & Tracking",
        focus: [
          "Real-time dashboards and RAG (Red, Amber, Green) health reports on project execution and utilization of resources.",
        ],
        benefits: [
          "Enables managers to spot and mitigate risks on the ground before they escalate into project failures.",
        ],
      },
    ],
  },

  {
    id: "reporting-compliance",
    groupName: "Reporting",
    icon: FaFileAlt,
    shortDesc:
      "Simplifies CSR compliance and reporting by automating regulatory disclosures and centralizing all supporting documentation. It ensures that reports, evidence, and records remain accurate, consistent, and readily available whenever required. By reducing manual effort and dependency on spreadsheets, organizations can confidently handle audits and inspections. This creates long-term regulatory readiness while allowing teams to focus more on impact creation rather than administrative burden.",
    image: "https://javajar1234.s3.ap-south-1.amazonaws.com/SunBPM+website/products/CSR/viewdetail.jpg",

    modules: [
      {
        id: "mandatory-reporting",
        title: "Mandatory Reporting",
        focus: [
          "Automates the generation of regulatory reports (e.g., India's CSR Form, custom reports).",
        ],
        benefits: [
          "Reduces compliance effort and ensures reports are data-consistent across all mandated formats.",
        ],
      },
      {
        id: "archival-documentation",
        title: "Archival & Documentation",
        focus: [
          "Centralized, searchable repository for all project documents, photographs, audit memos, and geo-tagged evidence.",
        ],
        benefits: [
          "Accelerates audits by providing a complete, instantly retrievable history of all project activities.",
        ],
      },
    ],
  },
];

export default CSRMODULES;
