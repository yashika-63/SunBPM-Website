import React from "react";
import { motion } from "framer-motion";
import "../../../CSS/Products/ESG/ESG.css";

// Feature icons
import { FaBuilding, FaUsers, FaGlobe } from "react-icons/fa";

// New icons for Modules & Capabilities
import {
FaGavel,
  FaProjectDiagram,
  FaRegMoneyBillAlt,
  FaChartLine,
  FaBoxes,
  FaGraduationCap,
  FaShieldAlt,
  FaDraftingCompass,
  FaChartBar,
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
    icon: FaGavel,
    title: "ESG Committee & Governance",
    points: [
      "Streamline policy creation, meeting management, and committee workflows.",
      "Ensure compliance with ESG regulations and governance frameworks.",
    ],
  },
  {
    icon: FaProjectDiagram,
    title: "Project Planning & Execution",
    points: [
      "Define project objectives, stakeholders, and timelines.",
      "Track execution, progress, and impact assessments.",
    ],
  },
  {
    icon: FaRegMoneyBillAlt,
    title: "Budgeting & Financial Planning",
    points: [
      "Allocate and monitor ESG budgets effectively.",
      "Track approvals, verifications, and amendments seamlessly.",
    ],
  },
  {
    icon: FaChartLine,
    title: "Impact Assessment",
    points: [
      "Conduct thorough stakeholder assessments and evaluations.",
      "Generate insights with respect to activities and project execution.",
    ],
  },
  {
    icon: FaBoxes,
    title: "Procurement & Resource Allocation",
    points: [
      "Handle vendor selection, approvals, requisitions, deliveries, POs, invoices, and payments.",
      "Ensure fair, ethical, and ESG-compliant procurement processes.",
    ],
  },
  {
    icon: FaGraduationCap,
    title: "Education & Community Engagement",
    points: [
      "Streamline student enrollments, attendance, and performance tracking.",
      "Strengthen community engagement through structured ESG programs.",
    ],
  },
];

// ✅ Core Capabilities
const CAPABILITIES = [
  {
    icon: FaShieldAlt,
    title: "Compliance Ready",
    desc: "Ensure all ESG activities meet legal standards.",
  },
  {
    icon: FaDraftingCompass,
    title: "Strategy Design",
    desc: "Plan and execute effective ESG initiatives.",
  },
  {
    icon: FaChartBar,
    title: "Scalable Solution",
    desc: "Reliably grow ESG initiatives across the enterprise.",
  },
];

// ✅ Positive Outcomes
const OUTCOMES = [
  {
    icon: FaBuilding,
    title: "Impact on Business",
    points: [
      "Builds strong brand reputation & trust",
      "Lowers costs through efficient practices",
      "Reduces risks of legal or reputational issues",
    ],
  },
  {
    icon: FaUsers,
    title: "Value for Customers",
    points: [
      "Encourages responsible buying behavior",
      "Ensures high quality, ethical products",
      "Promotes awareness of ethical consumption",
    ],
  },
  {
    icon: FaGlobe,
    title: "Benefits to Society",
    points: [
      "Supports communities and local sustainability",
      "Encourages job creation and social development",
      "Helps mitigate climate and ethical change",
    ],
  },
];

const ESG = () => {
  return (
    <div className="ESG-page">
      {/* ================= Hero ================= */}
      <motion.section
        className="ESG-hero"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="ESG-hero-overlay">
          <h1>
            Comprehensive Low-Code Platform for Environmental, social, and governance
          </h1>
          <p>
            Our Enterprise ESG Solution provides a comprehensive approach to
            Environmental, social, and governance, empowering organizations to achieve
            sustainability development goals.
          </p>
        </div>
      </motion.section>

      {/* ================= What is ESG ================= */}
      <motion.section
        className="ESG-intro containers"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2>What is ESG ?</h2>
        <p>
          <span className="highlight">Environmental, social, and governance (ESG)</span>{" "}
          is a strategic business practice where organizations integrate
          ethical, social, and environmental concerns into their operations,
          ensuring accountability to stakeholders and contributing to sustainable
          development.
        </p>
      </motion.section>

      {/* ================= Positive Outcomes ================= */}
      <motion.section
        className="ESG-outcomes containers"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2>Positive Outcomes of ESG</h2>

        <div className="ESG-cards">
          {OUTCOMES.map(({ icon: Icon, title, points }, i) => (
            <motion.div key={i} className="ESG-card" variants={fadeInUp}>
              <div className="ESG-icon-container">
                <Icon className="ESG-feature-icon" />
              </div>
              <h3>{title}</h3>
              <ul>
                {points.map((p, idx) => (
                  <li key={idx}>
                    <span className="ESG-benefit-dot"></span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ================= How ESG Works ================= */}
      <motion.section
        className="ESG-how containers"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="ESG-how-left" variants={fadeInLeft}>
          <img src="/images/products/ESG/ESG-work.png" alt="How ESG works" />
        </motion.div>
        <motion.div className="ESG-how-right" variants={fadeInRight}>
          <h2>How ESG works</h2>
          <p>
            See how SunBPM ESG works — from innovation in technology to
            impactful action.
          </p>
          <button
            className="btn-learn"
            onClick={() =>
              document.getElementById("ESG-modules")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Learn More
          </button>
        </motion.div>
      </motion.section>

      {/* ================= Redefining ESG ================= */}
      <motion.section
        className="ESG-redef containers"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="ESG-redef-left" variants={fadeInLeft}>
          <h2>
            Redefining <span className="highlight">ESG</span> with Smart,
            Scalable Solutions
          </h2>
          <p>
            We deliver a next-generation ESG platform that goes beyond
            compliance, empowering organizations with business insights, and
            measurable outcomes. With our solution, companies can transform
            social responsibility into a driver of growth, trust, and long-term
            value.
          </p>
        </motion.div>
        <motion.div className="ESG-redef-left" variants={fadeInRight}>
          <img
            src="/images/products/ESG/ESG-Side Frame.png"
            alt="ESG Infographic"
            className="ESG-redef-img"
          />
        </motion.div>
      </motion.section>

      {/* ================= Core Modules ================= */}
      <motion.section
        id="ESG-modules"
        className="ESG-modules containers"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="ESG-section-title">SunBPM ESG Core Modules</h2>

        <div className="ESG-modules-grid">
          {MODULES.map(({ icon: Icon, title, points }, idx) => (
            <motion.div key={idx} className="ESG-module-card" variants={fadeInUp}>
              <div className="ESG-module-icon">
                <Icon size={32} />
              </div>
              <h4>{title}</h4>
              <ul>
                {points.map((p, i) => (
                  <li key={i}>
                    <span className="ESG-benefit-dot"></span>
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
        className="ESG-capabilities containers"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="ESG-section-title">
          Core <span className="highlight">ESG</span> Capabilities :
        </h2>

        <div className="ESG-cap-grid">
          {CAPABILITIES.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={i} className="ESG-cap-card" variants={fadeInUp}>
              <div className="ESG-cap-icon">
                <Icon size={26} />
              </div>
              <div className="ESG-cap-heading">{title}</div>
              <div className="ESG-cap-desc">{desc}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ================= CTA ================= */}
      <motion.section
        className="ESG-cta"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="ESG-cta-inner-container">
          <p className="ESG-cta-text">
            Empower your ESG journey with an all-in-one platform — from planning
            to impact measurement, built for modern enterprises.
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default ESG;