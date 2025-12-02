const EHSMODULES = [
  /* =========================================================
     SAFETY & HEALTH MODULES
  ========================================================= */
  {
    id: "safety-health",
    groupName: "Safety & Health Modules",
    shortDesc:
      "Strengthens workplace safety through structured reporting, hazard prevention, and employee competency assurance.",
    image: "https://javajar1234.s3.ap-south-1.amazonaws.com/SunBPM+website/products/CSR/viewdetail.jpg",

    modules: [
      {
        id: "incident-tracker",
        title: "Incident Tracker",
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
    shortDesc:
      "Ensures operational compliance by managing permits, waste reporting, and environmental performance measurement.",
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
      },
      // {
      //   id: "environmental-monitoring",
      //   title: "Environmental Monitoring",
      //   focus: [
      //     "Manages scheduling and recording of required environmental testing, sampling data, and permit-defined limits."
      //   ],
      //   benefits: [
      //     "Provides verifiable proof of environmental performance for regulatory submissions and public disclosures."
      //   ]
      // }
    ]
  },

  /* =========================================================
     GOVERNANCE & IMPROVEMENT MODULES
  ========================================================= */
  {
    id: "governance-improvement",
    groupName: "Governance & Improvement Modules",
    shortDesc:
      "Drives continuous improvement through structured audits, corrective actions, and emergency preparedness.",
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
      },
      {
        id: "corrective-preventive-action",
        title: "Corrective & Preventive Action (CAPA)",
        focus: [
          "Full workflow management for root cause analysis, action planning, assignment, tracking, and verification of effectiveness (VOE)."
        ],
        benefits: [
          "Institutionalizes continuous improvement, ensuring that EHS failures lead to permanent systemic changes."
        ]
      },
      // {
      //   id: "emergency-response-plan",
      //   title: "Emergency Response Plan",
      //   focus: [
      //     "Central repository for emergency procedures, contact lists, drill scheduling, and post-drill review and improvements."
      //   ],
      //   benefits: [
      //     "Ensures the organization is prepared for critical events, minimizing injury, property damage, and operational downtime."
      //   ]
      // }
    ]
  },

  /* =========================================================
     Process Safety Management
  ========================================================= */
  {
    id: "process-safety-management",
    groupName: "Process Safety Management",
    shortDesc:
      "A fully digitized safety ecosystem that strengthens hazard identification, controls organizational changes, and ensures equipment and process readiness before startup.",
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
