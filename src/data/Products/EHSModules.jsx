const EHSMODULES = [
  /* =========================================================
     SAFETY & HEALTH MODULES
  ========================================================= */
  {
    id: "safety-health",
    groupName: "Safety & Health Modules",
    shortDesc:
      "Strengthens workplace safety through structured reporting, hazard prevention, and employee competency assurance.",
    image: "/images/products/EHS/viewdetail.jpg",

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
        title: "Hazard Observation",
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
          "Schedules, manages, and tracks mandatory safety training (e.g., Lockout/Tagout, confined space entry) against employee roles and certifications."
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
    image: "/images/products/EHS/viewdetail.jpg",

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
        title: "Waste Management",
        focus: [
          "Tracks waste generation by type, disposal methods, transporter details, and regulatory compliance across waste streams."
        ],
        benefits: [
          "Ensures adherence to complex waste disposal laws, reducing liability and supporting sustainability goals."
        ]
      },
      {
        id: "environmental-monitoring",
        title: "Environmental Monitoring",
        focus: [
          "Manages scheduling and recording of required environmental testing, sampling data, and permit-defined limits."
        ],
        benefits: [
          "Provides verifiable proof of environmental performance for regulatory submissions and public disclosures."
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
    shortDesc:
      "Drives continuous improvement through structured audits, corrective actions, and emergency preparedness.",
    image: "/images/products/EHS/viewdetail.jpg",

    modules: [
      {
        id: "audit-management",
        title: "Audit Management",
        focus: [
          "Planning, scheduling, checklist execution, findings documentation, and follow-up tracking for internal and external EHS audits."
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
      {
        id: "emergency-response-plan",
        title: "Emergency Response Plan",
        focus: [
          "Central repository for emergency procedures, contact lists, drill scheduling, and post-drill review and improvements."
        ],
        benefits: [
          "Ensures the organization is prepared for critical events, minimizing injury, property damage, and operational downtime."
        ]
      }
    ]
  },

  /* =========================================================
     INCIDENT, AUDIT & PERSONNEL
  ========================================================= */
  {
    id: "incident-audit-personnel",
    groupName: "Incident, Audit & Personnel",
    shortDesc:
      "Ensures employee readiness, structured audit tracking, and comprehensive monitoring of EHS events across the organization.",
    image: "/images/products/EHS/viewdetail.jpg",

    modules: [
      {
        id: "incident-recording",
        title: "Incident",
        focus: [
          "Records, investigates, and tracks corrective actions for near-misses, injuries, and environmental releases."
        ],
        benefits: [
          "Drives continuous safety improvement by analyzing root causes and preventing recurrence."
        ]
      },
      {
        id: "audit-control",
        title: "Audit",
        focus: [
          "Schedules, executes, and tracks findings for internal and external EHS inspections and audits."
        ],
        benefits: [
          "Ensures systematic review of the EHS management system's effectiveness and compliance status."
        ]
      },
      {
        id: "employee-management",
        title: "Employee",
        focus: [
          "Manages training records, certifications, medical surveillance, and fitness-for-duty assessments."
        ],
        benefits: [
          "Confirms personnel are qualified and medically fit for assigned tasks, supporting a safe and compliant workforce."
        ]
      },
      {
        id: "contractor-monitoring",
        title: "Contractor",
        focus: [
          "Manages qualification, safety orientation, performance, and compliance of third-party personnel on-site."
        ],
        benefits: [
          "Extends EHS controls to contractors, reducing risks from external personnel and ensuring regulatory compliance."
        ]
      }
    ]
  }
];

export default EHSMODULES;
