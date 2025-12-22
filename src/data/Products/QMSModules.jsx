import {
  FaProjectDiagram,
  FaUsersCog,
  FaCheckCircle,
  FaChartLine
} from "react-icons/fa";

const QMSMODULES = [
  {
    id: "project-initiation-control",
    groupName: "Project Initiation & Control",
    shortDesc:
      "Provides a strong and well-defined foundation for every project by bringing structure, clarity, and governance right from the start. This phase ensures that projects are initiated through standardized processes, approved workflows, and clearly documented objectives, scope, and responsibilities. By aligning stakeholders early, defining expectations upfront, and identifying potential risks at the initiation stage, organizations can minimize ambiguity, prevent downstream issues, and ensure projects are executed with accountability, transparency, and alignment to quality, timeline, and delivery goals.",
    image: "https://javajar1234.s3.ap-south-1.amazonaws.com/SunBPM+website/products/CSR/viewdetail.jpg",
    icon: FaProjectDiagram,

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
      "Supports seamless project execution by enabling teams to collaborate effectively while maintaining real-time visibility into progress and performance. This stage focuses on tracking tasks, managing changes, and monitoring overall project health through structured workflows and accountability-driven processes. By ensuring that every activity aligns with approved plans and timelines, teams can respond quickly to issues, coordinate across functions, and maintain control over execution while delivering consistent outcomes that meet quality and business expectations.",
    image: "https://javajar1234.s3.ap-south-1.amazonaws.com/SunBPM+website/products/CSR/viewdetail.jpg",
    icon: FaUsersCog,

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
      "Ensures that quality is embedded throughout the project lifecycle by enabling structured testing, issue identification, and defect resolution. This approach helps teams detect problems early, assign clear ownership, and track resolutions through defined workflows. By maintaining transparency and accountability in defect management, organizations can significantly reduce rework, avoid repeated errors, and deliver reliable, high-quality outputs that meet defined standards and stakeholder expectations.",
    image: "https://javajar1234.s3.ap-south-1.amazonaws.com/SunBPM+website/products/CSR/viewdetail.jpg",
    icon: FaCheckCircle,

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
    ],
  },

  {
    id: "reporting-continuous-improvement",
    groupName: "Reporting & Continuous Improvement",
    shortDesc:
      "Converts operational and project data into actionable insights that drive informed decision-making and continuous improvement. By enabling structured reporting, performance analysis, and knowledge retention, this phase helps organizations understand what worked, what didn’t, and how to improve future execution. Consistent analytics and documented learnings empower leadership to refine processes, enhance efficiency, reduce risk, and continuously raise the overall maturity and success rate of projects.",
    image: "https://javajar1234.s3.ap-south-1.amazonaws.com/SunBPM+website/products/CSR/viewdetail.jpg",
    icon: FaChartLine,

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
