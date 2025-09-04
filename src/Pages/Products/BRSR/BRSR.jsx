import React from "react";
import { motion } from "framer-motion";
import "../../../CSS/Products/BRSR/BRSR.css";

// Feature icons
import { FaBuilding, FaHandshake, FaLeaf } from "react-icons/fa";

// New icons for Modules & Capabilities
import {
  FaProjectDiagram,
  FaSitemap,
  FaDatabase,
  FaNetworkWired,
  FaBalanceScale,
  FaChartLine,
  FaCogs,
  FaCheckCircle,
} from "react-icons/fa";

// ---------- Animation Variants ----------
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};
const fadeInLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};
const fadeInRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

// ---------- Data ----------
// ✅ Core Modules
const MODULES = [
  {
    icon: FaSitemap,
    title: "Enterprise Mapping",
    points: [
      "Define and structure business units, plants, and offices.",
      "Manage roles, approvals, and access levels for visibility.",
    ],
  },
  {
    icon: FaProjectDiagram,
    title: "Workflows",
    points: [
      "Automate BRSR processes with attribute codes and responsibilities.",
      "Set reporting frequencies with alerts and reminders for timely submissions.",
    ],
  },
  {
    icon: FaDatabase,
    title: "Data Management",
    points: [
      "Capture and validate master data at source with controls.",
      "Enable secure restructuring of data for analytics and insights.",
    ],
  },
  {
    icon: FaNetworkWired,
    title: "Associate Digitalization",
    points: [
      "Engage upstream and downstream value chain in reporting.",
      "Provide restricted access while ensuring assurance and transparency.",
    ],
  },
  {
    icon: FaLeaf,
    title: "Core Footprints & Assessment",
    points: [
      "Track organizational environmental and social impact metrics.",
      "Evaluate practices against benchmarks for performance improvement.",
    ],
  },
  {
    icon: FaBalanceScale,
    title: "Targets, Value Chain & Materiality",
    points: [
      "Set measurable sustainability goals with stakeholder priorities.",
      "Engage partners in transparent reporting for shared accountability.",
    ],
  },
];


// ✅ Core Capabilities
const CAPABILITIES = [
  {
    icon: FaCheckCircle,
    title: "Regulatory Compliance",
    desc: "Ensure BRSR disclosures meet all legal and reporting standards.",
  },
  {
    icon: FaCogs,
    title: "Process Automation",
    desc: "Automate data collection, validation, and reporting workflows.",
  },
  {
    icon: FaChartLine,
    title: "Performance Insights",
    desc: "Gain actionable analytics to drive sustainability improvements.",
  },
];

// ✅ Positive Outcomes
const OUTCOMES = [
  {
    icon: FaBuilding,
    title: "Business Advantages",
    points: [
      "Strengthens brand reputation and investor confidence",
      "Improves decision-making with reliable sustainability data",
      "Reduces risks by ensuring regulatory and ESG compliance",
    ],
  },
  {
    icon: FaHandshake,
    title: "Stakeholder Value",
    points: [
      "Builds trust with customers, employees, and partners",
      "Encourages responsible and ethical business practices",
      "Enhances transparency in corporate disclosures",
    ],
  },
  {
    icon: FaLeaf,
    title: "Societal & Environmental Impact",
    points: [
      "Promotes community development and social welfare",
      "Drives climate action and resource efficiency",
      "Supports long-term sustainable growth goals",
    ],
  },
];

const BRSR = () => {
  return (
    <div className="BRSR-page">
      {/* ================= Hero ================= */}
      <motion.section
        className="BRSR-hero"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="BRSR-hero-overlay">
          <h1>
            Comprehensive Low-Code Platform for Business Responsibility & Sustainability Reporting
          </h1>
          <p>
            SunBPM BRSR empowers organizations to capture, manage, and report sustainability data with 
            transparency, compliance, and measurable impact—driving long-term ESG and business growth.
          </p>
        </div>
      </motion.section>

      {/* ================= What is BRSR ================= */}
      <motion.section
        className="BRSR-intro containers"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2>What is BRSR ?</h2>
        <p>
          <span className="highlight">Business Responsibility & Sustainability Reporting (BRSR)</span>{" "}
          is a structured framework introduced to help organizations disclose their environmental, social, 
          and governance (ESG) performance in a transparent and measurable manner. It goes beyond compliance, 
          enabling businesses to align operations with sustainability goals, demonstrate accountability to 
          stakeholders, and drive long-term value creation through responsible practices.
        </p>
      </motion.section>

      {/* ================= Positive Outcomes ================= */}
      <motion.section
        className="BRSR-outcomes containers"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2>Positive Outcomes of BRSR</h2>

        <div className="BRSR-cards">
          {OUTCOMES.map(({ icon: Icon, title, points }, i) => (
            <motion.div key={i} className="BRSR-card" variants={fadeInUp}>
              <div className="BRSR-icon-container">
                <Icon className="BRSR-feature-icon" />
              </div>
              <h3>{title}</h3>
              <ul>
                {points.map((p, idx) => (
                  <li key={idx}>
                    <span className="BRSR-benefit-dot"></span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ================= How BRSR Works ================= */}
      <motion.section
        className="BRSR-how containers"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="BRSR-how-left" variants={fadeInLeft}>
          <img src="/images/products/BRSR/BRSR-work.png" alt="How BRSR works" />
        </motion.div>
        <motion.div className="BRSR-how-right" variants={fadeInRight}>
          <h2>How BRSR works</h2>
          <p>
            See how SunBPM BRSR works — from innovation in technology to
            impactful action.
          </p>
          <button
            className="btn-learn"
            onClick={() =>
              document.getElementById("BRSR-modules")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Learn More
          </button>
        </motion.div>
      </motion.section>

      {/* ================= Redefining BRSR ================= */}
      <motion.section
        className="BRSR-redef containers"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="BRSR-redef-left" variants={fadeInLeft}>
          <h2>
            Redefining <span className="highlight">BRSR</span> with Smart,
            Scalable Solutions
          </h2>
          <p>
            SunBPM BRSR enables enterprises to streamline sustainability reporting with a unified platform 
            that simplifies data collection, validation, and compliance. Built for modern organizations, 
            it ensures transparency, accountability, and alignment with regulatory frameworks, empowering 
            companies to meet stakeholder expectations and sustainability goals.
          </p>
        </motion.div>
        <motion.div className="BRSR-redef-left" variants={fadeInRight}>
          <img
            src="/images/products/BRSR/BRSR-Side Frame.png"
            alt="BRSR Infographic"
            className="BRSR-redef-img"
          />
        </motion.div>
      </motion.section>

      {/* ================= Core Modules ================= */}
      <motion.section
        id="BRSR-modules"
        className="BRSR-modules containers"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="BRSR-section-title">SunBPM BRSR Core Modules</h2>

        <div className="BRSR-modules-grid">
          {MODULES.map(({ icon: Icon, title, points }, idx) => (
            <motion.div key={idx} className="BRSR-module-card" variants={fadeInUp}>
              <div className="BRSR-module-icon">
                <Icon size={32} />
              </div>
              <h4>{title}</h4>
              <ul>
                {points.map((p, i) => (
                  <li key={i}>
                    <span className="BRSR-benefit-dot"></span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ================= Core Capabilities ================= */}
      <motion.section
        className="BRSR-capabilities containers"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="BRSR-section-title">
          Core <span className="highlight">BRSR</span> Capabilities :
        </h2>

        <div className="BRSR-cap-grid">
          {CAPABILITIES.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={i} className="BRSR-cap-card" variants={fadeInUp}>
              <div className="BRSR-cap-icon">
                <Icon size={26} />
              </div>
              <div className="BRSR-cap-heading">{title}</div>
              <div className="BRSR-cap-desc">{desc}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ================= CTA ================= */}
      <motion.section
        className="BRSR-cta"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="BRSR-cta-inner-container">
          <p className="BRSR-cta-text">
            Transform sustainability reporting into a strategic advantage with SunBPM BRSR — precise, 
            transparent, and future-ready.
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default BRSR;