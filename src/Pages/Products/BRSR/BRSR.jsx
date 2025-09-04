import React from "react";
import { motion } from "framer-motion";
import "../../../CSS/Products/BRSR/BRSR.css";

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
    title: "BRSR Committee & Governance",
    points: [
      "Streamline policy creation, meeting management, and committee workflows.",
      "Ensure compliance with BRSR regulations and governance frameworks.",
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
      "Allocate and monitor BRSR budgets effectively.",
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
      "Ensure fair, ethical, and BRSR-compliant procurement processes.",
    ],
  },
  {
    icon: FaGraduationCap,
    title: "Education & Community Engagement",
    points: [
      "Streamline student enrollments, attendance, and performance tracking.",
      "Strengthen community engagement through structured BRSR programs.",
    ],
  },
];

// ✅ Core Capabilities
const CAPABILITIES = [
  {
    icon: FaShieldAlt,
    title: "Compliance Ready",
    desc: "Ensure all BRSR activities meet legal standards.",
  },
  {
    icon: FaDraftingCompass,
    title: "Strategy Design",
    desc: "Plan and execute effective BRSR initiatives.",
  },
  {
    icon: FaChartBar,
    title: "Scalable Solution",
    desc: "Reliably grow BRSR initiatives across the enterprise.",
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
            Comprehensive Low-Code Platform for Corporate Social Responsibility
          </h1>
          <p>
            Our Enterprise BRSR Solution provides a comprehensive approach to
            Corporate Social Responsibility, empowering organizations to achieve
            sustainability development goals.
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
          <span className="highlight">Corporate Social Responsibility (BRSR)</span>{" "}
          is a strategic business practice where organizations integrate
          ethical, social, and environmental concerns into their operations,
          ensuring accountability to stakeholders and contributing to sustainable
          development.
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
            We deliver a next-generation BRSR platform that goes beyond
            compliance, empowering organizations with business insights, and
            measurable outcomes. With our solution, companies can transform
            social responsibility into a driver of growth, trust, and long-term
            value.
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
            Empower your BRSR journey with an all-in-one platform — from planning
            to impact measurement, built for modern enterprises.
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default BRSR;