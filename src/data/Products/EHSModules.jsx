import {
  FaHardHat,
  FaLeaf,
  FaGavel,
  FaIndustry,
} from "react-icons/fa";

const EHSMODULES = [
  /* =========================================================
     SAFETY & HEALTH MODULES
  ========================================================= */
  {
    id: "safety-health",
    groupName: "Safety & Health Modules",
    icon: FaHardHat,
    shortDesc:
      "Creates a strong foundation for workplace safety by empowering employees and leaders to proactively identify risks, report incidents, and continuously improve safety practices. It promotes a culture where safety is embedded into everyday behavior rather than treated as a checkbox activity. By enabling early hazard identification, structured incident investigations, and role-based safety training, organizations can significantly reduce workplace accidents and injuries. This approach not only improves compliance but also builds confidence, preparedness, and trust across the workforce.",
    image: "https://javajar1234.s3.ap-south-1.amazonaws.com/SunBPM+website/products/CSR/viewdetail.jpg",

    modules: [
      {
        id: "incident-management",
        title: "Incident Management",
        focus: [
          "Comprehensive logging, investigation, classification (Lost Time, Recordable, Near-Miss), and root cause analysis of all safety incidents."
        ],
        benefits: [
          "Provides detailed, auditable records for mandatory reporting (e.g., OSHA logs) and drives the systemic elimination of hazards."
        ]
      },
      {
        id: "hazard-observation",
        title: "Unsafe act/ Unsafe condition Observation",
        focus: [
          "Facilitates and tracks reporting of unsafe conditions or behaviors by any employee, ensuring immediate management attention."
        ],
        benefits: [
          "Fosters an inclusive safety culture and provides leading indicators for risk before incidents occur."
        ]
      },
      {
        id: "training-competency",
        title: "Training & Competency",
        focus: [
          "Schedules, manages, and tracks mandatory safety training against employee roles and certifications."
        ],
        benefits: [
          "Ensures all personnel are qualified and compliant for their tasks, drastically reducing human error in high-risk scenarios."
        ]
      }
    ]
  },

  /* =========================================================
     ENVIRONMENTAL & COMPLIANCE MODULES
  ========================================================= */
  {
    id: "environment-compliance",
    groupName: "Environmental & Compliance Modules",
    icon: FaLeaf,
    shortDesc:
      "Brings clarity and control to environmental compliance by centralizing permits, regulatory obligations, and statutory reporting in a single, easy-to-manage system. It helps teams stay ahead of renewals, inspections, and compliance deadlines while reducing dependency on manual tracking. By ensuring continuous adherence to environmental laws and standards, organizations can minimize regulatory risks and penalties. At the same time, it supports sustainable operations and demonstrates a strong commitment to environmental responsibility.",
    image: "https://javajar1234.s3.ap-south-1.amazonaws.com/SunBPM+website/products/CSR/viewdetail.jpg",

    modules: [
      {
        id: "permit-management",
        title: "Permit Management",
        focus: [
          "Tracks the status, renewal dates, required sampling/testing, and compliance conditions for operational permits (air, water, waste)."
        ],
        benefits: [
          "Prevents costly lapses in required permits and guarantees continuous environmental compliance."
        ]
      },
      {
        id: "waste-management",
        title: "Compliance",
        focus: [
          "Compliance is the adherence to all relevant government regulations, laws, and standards for protecting the environment, ensuring worker safety."
        ],
        benefits: [
          "Ensures adherence to complex waste disposal laws, reducing liability and supporting sustainability goals."
        ]
      }
    ]
  },

  /* =========================================================
     GOVERNANCE & IMPROVEMENT MODULES
  ========================================================= */
  {
    id: "governance-improvement",
    groupName: "Governance & Improvement Modules",
    icon: FaGavel,
    shortDesc:
      "Strengthens EHS governance by introducing structured audits, clear accountability, and a disciplined approach to corrective and preventive actions. It ensures that audit findings are tracked to closure and lessons learned are embedded into daily operations. By driving continuous improvement, organizations can reduce recurring risks and strengthen regulatory confidence. This governance-focused approach helps leadership maintain long-term control over EHS performance and compliance maturity.",
    image: "https://javajar1234.s3.ap-south-1.amazonaws.com/SunBPM+website/products/CSR/viewdetail.jpg",

    modules: [
      {
        id: "audit-management",
        title: "Audit Management",
        focus: [
          "Planning, scheduling, target date, findings documentation, and follow-up tracking for internal and external EHS audits."
        ],
        benefits: [
          "Streamlines the entire auditing process, ensuring a transparent and efficient audit trail for regulatory bodies."
        ]
      }
    ]
  },

  /* =========================================================
     Process Safety Management
  ========================================================= */
  {
    id: "process-safety-management",
    groupName: "Process Safety Management",
    icon: FaIndustry,
    shortDesc:
      "Provides a comprehensive digital framework to manage high-risk industrial processes with greater confidence and control. It supports systematic hazard identification, disciplined change management, and thorough readiness checks before startup. By embedding safety into every stage of operational decision-making, organizations can prevent major accidents and unplanned downtime. This structured approach strengthens process reliability, improves regulatory compliance, and protects both people and critical assets.",
    image: "https://javajar1234.s3.ap-south-1.amazonaws.com/SunBPM+website/products/CSR/viewdetail.jpg",

    modules: [
      {
        id: "hazop",
        title: "HAZOP (Hazard and Operability Study)",
        focus: [
          "Simplifies hazard analysis with digital workflows, automated risk calculations, and transparent approvals for safer, compliant operations."
        ],
        benefits: [
          "Enhances safety by enabling consistent node evaluation and complete audit traceability."
        ]
      },

      {
        id: "moc",
        title: "MOC (Management of Change)",
        focus: [
          "Enables structured planning, cross-functional evaluation, task assignment, and financial estimation throughout the change management process."
        ],
        benefits: [
          "Ensures controlled implementation of organizational changes with complete visibility of tasks, costs, and closure."
        ]
      },

      {
        id: "pssr",
        title: "PSSR (Pre-Startup Safety Review)",
        focus: [
          "Streamlines Pre-Startup Safety Review with structured workflows across Entry, Planning, Action, Approval, Modification, and Summary stages."
        ],
        benefits: [
          "Ensures operational readiness by identifying and mitigating risks before startup, improving compliance and safety reliability."
        ]
      }
    ]
  }
];

export default EHSMODULES;
