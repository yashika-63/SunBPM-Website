import {
  FaDatabase,
  FaBullseye,
  FaTruck,
  FaFileAlt,
} from "react-icons/fa";

const ESGMODULES = [
  {
    id: "data-foundation-disclosure",
    groupName: "Data Foundation & Disclosure",
    icon: FaDatabase,
    shortDesc:
      "Establishes a reliable ESG data foundation by bringing together environmental, social, and governance information from across the organization into one trusted system. It ensures data accuracy, consistency, and traceability across business units, locations, and reporting periods. By reducing manual data handling and fragmentation, teams gain confidence in their numbers and insights. This foundation keeps organizations disclosure-ready at all times while lowering reporting risk and effort.",
    image: "https://javajar1234.s3.ap-south-1.amazonaws.com/SunBPM+website/products/CSR/viewdetail.jpg",

    modules: [
      {
        id: "brsr-core",
        title: "BRSR Core",
        focus: [
          "Captures foundational environmental and social/governance data such as water, energy, waste, emissions, diversity, inclusion, fairness, and transparency."
        ],
        benefits: [
          "Creates a verifiable single source of truth for mandatory disclosure data ensuring consistency and audit readiness."
        ],
      },
      {
        id: "brsr-9-principles",
        title: "BRSR: 9 Principles",
        focus: [
          "Aligns business operations with responsible practices across ethics, environment, workforce, stakeholders and sustainable growth."
        ],
        benefits: [
          "Ensures compliance with India’s sustainability framework through transparent, accountable and principle-driven governance."
        ],
      },
      {
        id: "analysis",
        title: "Analysis",
        focus: [
          "Organizes ESG data by Business Units, Plants, Offices and Financial Years, while mapping Attributes, Parameters, Sub-Categories and intensity metrics."
        ],
        benefits: [
          "Enables benchmarking and performance improvement insights at granular levels across organizational layers."
        ],
      },
      {
        id: "scope-3",
        title: "Scope 3",
        focus: [
          "Manages calculation and reporting for value-chain emissions such as Purchased Goods, Capital Goods, Transportation (Upstream/Downstream), and Employee Commuting."
        ],
        benefits: [
          "Simplifies complex carbon accounting and provides auditable, complete value-chain emission visibility."
        ],
      },
      {
        id: "employee",
        title: "Employee",
        focus: [
          "Tracks employee wellbeing initiatives and issues to monitor and reduce organizational people-risk."
        ],
        benefits: [
          "Strengthens the Social pillar with improved transparency and measurable workplace improvement insights."
        ],
      },
    ],
  },

  {
    id: "strategy-assurance",
    groupName: "Strategy & Assurance",
    icon: FaBullseye,
    shortDesc:
      "Bridges the gap between ESG intent and real-world execution by converting stakeholder expectations into measurable priorities and actions. It supports structured goal setting, progress tracking, and risk monitoring across ESG initiatives. By embedding assurance and verification into the process, organizations can confidently demonstrate credibility and accountability. This approach ensures ESG commitments are not just stated, but actively managed and delivered.",
    image: "https://javajar1234.s3.ap-south-1.amazonaws.com/SunBPM+website/products/CSR/viewdetail.jpg",

    modules: [
      {
        id: "materiality",
        title: "Double Materiality",
        focus: [
          "Manages stakeholder mapping, prioritization of ESG concerns, risk/opportunity analysis, and creation of Materiality Reports."
        ],
        benefits: [
          "Ensures ESG actions focus on what matters most to business, stakeholders, and long-term risk mitigation."
        ],
      },
      {
        id: "target",
        title: "Target",
        focus: [
          "Defines ESG metrics, ownership, timelines and action plans with continuous progress monitoring and assurance mapping."
        ],
        benefits: [
          "Transforms ESG strategy into measurable execution with clear accountability and real-time tracking."
        ],
      },
      {
        id: "assurance",
        title: "Reasonable Assurance",
        focus: [
          "Covers verification lifecycle including audit onboarding, scope definition, assessments, findings and final reporting."
        ],
        benefits: [
          "Ensures audit readiness with complete traceability and seamless collaboration with assurance bodies."
        ],
      },
      {
        id: "benchmark",
        title: "Benchmark",
        focus: [
          "Compares ESG performance with peers based on size, geography, sector, and incorporates audit findings."
        ],
        benefits: [
          "Helps refine ESG strategies and concentrate effort where competitive advantage can be maximized."
        ],
      },
    ],
  },

  {
    id: "supply-chain-governance",
    groupName: "Supply Chain Governance",
    icon: FaTruck,
    shortDesc:
      "Extends ESG responsibility beyond organizational boundaries by actively engaging suppliers and partners in structured governance processes. It enables consistent ESG data capture, assessments, and compliance monitoring across the value chain. By improving visibility into third-party practices, organizations can proactively manage environmental and social risks. This approach promotes responsible sourcing while strengthening trust and resilience across the supply network.",
    image: "https://javajar1234.s3.ap-south-1.amazonaws.com/SunBPM+website/products/CSR/viewdetail.jpg",

    modules: [
      {
        id: "value-chains",
        title: "Value Chains",
        focus: [
          "Manages supplier ESG participation, reporting, onboarding, verifications, amendments, and rating workflows."
        ],
        benefits: [
          "Reduces supply chain environmental and social risks by ensuring partners align with corporate ESG standards."
        ],
      },
    ],
  },

  {
    id: "report-standards",
    groupName: "Report Standards & Disclosure Formats",
    icon: FaFileAlt,
    shortDesc:
      "Enables clear, consistent, and transparent ESG reporting across both Indian and global disclosure frameworks. It simplifies complex reporting requirements while maintaining strict alignment with regulatory, investor, and stakeholder expectations. By standardizing formats and automating data mapping, organizations reduce reporting effort and errors. This ensures audit-ready, credible ESG disclosures that can be published with confidence.",
    image: "https://javajar1234.s3.ap-south-1.amazonaws.com/SunBPM+website/products/CSR/viewdetail.jpg",

    modules: [
      {
        id: "indian-format",
        title: "BRSR Report",
        focus: [
          "Creates BRSR reports aligned with India’s regulatory requirements, including the BRSR 9 Principles, following the SEBI-mandated government format."
        ],
        benefits: [
          "Ensures accurate, audit-ready compliance reporting while simplifying statutory disclosure submissions."
        ],
      },

      {
        id: "global-format",
        title: "Global Format Reporting (GRI, CDP, S&P)",
        focus: [
          "Supports globally accepted frameworks including GRI (Global Reporting Initiative), CDP (Carbon Disclosure Project), and S&P ESG Evaluation formats."
        ],
        benefits: [
          "Enables organizations to publish internationally benchmarked sustainability reports with complete environmental, social, and governance transparency."
        ],
      },
    ],
  }
];

export default ESGMODULES;
