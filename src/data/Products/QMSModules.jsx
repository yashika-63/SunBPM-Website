const QMSMODULES = [
  {
    id: "project-initiation-control",
    groupName: "Project Initiation & Control",
    shortDesc:
      "Standardized project initiation and governance workflows ensuring structured planning, risk management, and controlled execution.",
    image: "https://javajar1234.s3.ap-south-1.amazonaws.com/SunBPM+website/products/CSR/viewdetail.jpg",

    modules: [
      {
        id: "project-registrations",
        title: "Project Registrations",
        focus: [
          "Centralized initiation with unique project IDs, stakeholder details, and scope definition."
        ],
        benefits: [
          "Ensures standardized project entry across teams, improving governance and traceability."
        ],
      },
      {
        id: "project-planning-scheduling",
        title: "Project Planning & Scheduling",
        focus: [
          "Define milestones, dependencies, resources, and timelines with real-time progress visualization via Gantt charts."
        ],
        benefits: [
          "Creates a structured roadmap supporting timely and cost-effective project execution."
        ],
      },
      {
        id: "risk-log-mitigation",
        title: "Risk Log & Mitigation",
        focus: [
          "Record, categorize, and assess risks while defining mitigation and impact analysis strategies."
        ],
        benefits: [
          "Improves decision-making and prevents operational delays by proactively managing risks."
        ],
      },
      {
        id: "minutes-of-meeting",
        title: "Minutes of Meeting (MOM)",
        focus: [
          "Instantly document discussions, decisions, and action items with a digitally searchable archive."
        ],
        benefits: [
          "Enhances stakeholder alignment and provides a reliable audit trail of all key decisions."
        ],
      },

    ],
  },

  {
    id: "execution-tracking-collaboration",
    groupName: "Execution, Tracking, and Collaboration",
    shortDesc:
      "Real-time execution monitoring with collaboration tools ensuring transparency, accountability, and controlled change implementation.",
    image: "https://javajar1234.s3.ap-south-1.amazonaws.com/SunBPM+website/products/CSR/viewdetail.jpg",

    modules: [
      {
        id: "task-tracking-collaboration",
        title: "Task Tracking & Collaboration",
        focus: [
          "Assign tasks, monitor progress, and manage updates in real time with role-based accountability and comment threads."
        ],
        benefits: [
          "Boosts collaboration and ensures consistent project momentum across distributed teams."
        ],
      },
      {
        id: "change-tracker",
        title: "Change Tracker",
        focus: [
          "Structured approval workflows for change requests including impact evaluation before application."
        ],
        benefits: [
          "Maintains an audit-proof record of scope and configuration changes, preventing unplanned project deviations."
        ],
      },
      {
        id: "rag-health-reports",
        title: "RAG – Health Reports",
        focus: [
          "Monitor project health using Red, Amber, Green indicators with alerts for at-risk areas."
        ],
        benefits: [
          "Helps leadership identify red flags early and focus intervention where most needed."
        ],
      },
    ],
  },

  {
    id: "quality-assurance-defect-lifecycle",
    groupName: "Quality Assurance & Defect Lifecycle",
    shortDesc:
      "Ensures that deliverables consistently meet quality standards through structured testing and continuous improvement practices.",
    image: "https://javajar1234.s3.ap-south-1.amazonaws.com/SunBPM+website/products/CSR/viewdetail.jpg",

    modules: [
      {
        id: "testing-system",
        title: "Testing System",
        focus: [
          "Develop and execute test cases with configurable approval workflows and built-in stakeholder feedback."
        ],
        benefits: [
          "Ensures every project output meets defined standards before deployment or release."
        ],
      },
      {
        id: "defect-tracker",
        title: "Defect Tracker",
        focus: [
          "Log, prioritize, classify, and monitor resolution timelines of defects with clear responsibility assignment."
        ],
        benefits: [
          "Provides insights into recurring issues, helping prevent repeat failures over time."
        ],
      },
      // {
      //   id: "nc-capa",
      //   title: "Non-Conformance (NC) / CAPA",
      //   focus: [
      //     "Manages systematic resolution of major issues through corrective and preventive actions with formal workflow routing."
      //   ],
      //   benefits: [
      //     "Leads to permanent elimination of systemic flaws and promotes continuous organizational improvement."
      //   ],
      // },
    ],
  },

  {
    id: "reporting-continuous-improvement",
    groupName: "Reporting & Continuous Improvement",
    shortDesc:
      "Data-driven insights that streamline reporting and strengthen future execution.",
    image: "https://javajar1234.s3.ap-south-1.amazonaws.com/SunBPM+website/products/CSR/viewdetail.jpg",

    modules: [
      {
        id: "dynamic-reporting",
        title: "Dynamic Reporting & Analytics",
        focus: [
          "Generate consolidated reports across tasks, risks, and defects with export options for audits and reviews."
        ],
        benefits: [
          "Supports data-driven decision-making and simplifies compliance and audit processes."
        ],
      },
      {
        id: "report-formats-frequency",
        title: "Report Formats & Frequency Automation",
        focus: [
          "Supports Excel-based import/export, automated scheduling, and multi-frequency reporting including daily, weekly, monthly, quarterly, yearly, real-time, and on-demand reports."
        ],
        benefits: [
          "Ensures consistent, timely, and customizable reporting cycles with automated generation and user-defined scheduling."
        ],
      },
      {
        id: "lessons-learned-archival",
        title: "Lessons Learned & Archival",
        focus: [
          "Capture project feedback, document key learnings, archive documentation, and formally close out projects."
        ],
        benefits: [
          "Promotes organizational maturity by improving accuracy and execution efficiency in future projects."
        ],
      },
    ],
  },
];

export default QMSMODULES;
