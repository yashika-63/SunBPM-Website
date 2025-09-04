import React from "react";
import { motion } from "framer-motion";
import "../../../CSS/Products/EHS/EHS.css";

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
    title: "EHS Committee & Governance",
    points: [
      "Streamline policy creation, meeting management, and committee workflows.",
      "Ensure compliance with EHS regulations and governance frameworks.",
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
      "Allocate and monitor EHS budgets effectively.",
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
      "Ensure fair, ethical, and EHS-compliant procurement processes.",
    ],
  },
  {
    icon: FaGraduationCap,
    title: "Education & Community Engagement",
    points: [
      "Streamline student enrollments, attendance, and performance tracking.",
      "Strengthen community engagement through structured EHS programs.",
    ],
  },
];

// ✅ Core Capabilities
const CAPABILITIES = [
  {
    icon: FaShieldAlt,
    title: "Compliance Ready",
    desc: "Ensure all EHS activities meet legal standards.",
  },
  {
    icon: FaDraftingCompass,
    title: "Strategy Design",
    desc: "Plan and execute effective EHS initiatives.",
  },
  {
    icon: FaChartBar,
    title: "Scalable Solution",
    desc: "Reliably grow EHS initiatives across the enterprise.",
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

const EHS = () => {
  return (
    <div className="EHS-page">
      {/* ================= Hero ================= */}
      <motion.section
        className="EHS-hero"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="EHS-hero-overlay">
          <h1>
            Comprehensive Low-Code Platform for Corporate Social Responsibility
          </h1>
          <p>
            Our Enterprise EHS Solution provides a comprehensive approach to
            Corporate Social Responsibility, empowering organizations to achieve
            sustainability development goals.
          </p>
        </div>
      </motion.section>

      {/* ================= What is EHS ================= */}
      <motion.section
        className="EHS-intro containers"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2>What is EHS ?</h2>
        <p>
          <span className="highlight">Corporate Social Responsibility (EHS)</span>{" "}
          is a strategic business practice where organizations integrate
          ethical, social, and environmental concerns into their operations,
          ensuring accountability to stakeholders and contributing to sustainable
          development.
        </p>
      </motion.section>

      {/* ================= Positive Outcomes ================= */}
      <motion.section
        className="EHS-outcomes containers"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2>Positive Outcomes of EHS</h2>

        <div className="EHS-cards">
          {OUTCOMES.map(({ icon: Icon, title, points }, i) => (
            <motion.div key={i} className="EHS-card" variants={fadeInUp}>
              <div className="EHS-icon-container">
                <Icon className="EHS-feature-icon" />
              </div>
              <h3>{title}</h3>
              <ul>
                {points.map((p, idx) => (
                  <li key={idx}>
                    <span className="EHS-benefit-dot"></span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ================= How EHS Works ================= */}
      <motion.section
        className="EHS-how containers"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="EHS-how-left" variants={fadeInLeft}>
          <img src="/images/products/EHS/EHS-work.png" alt="How EHS works" />
        </motion.div>
        <motion.div className="EHS-how-right" variants={fadeInRight}>
          <h2>How EHS works</h2>
          <p>
            See how SunBPM EHS works — from innovation in technology to
            impactful action.
          </p>
          <button
            className="btn-learn"
            onClick={() =>
              document.getElementById("EHS-modules")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Learn More
          </button>
        </motion.div>
      </motion.section>

      {/* ================= Redefining EHS ================= */}
      <motion.section
        className="EHS-redef containers"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="EHS-redef-left" variants={fadeInLeft}>
          <h2>
            Redefining <span className="highlight">EHS</span> with Smart,
            Scalable Solutions
          </h2>
          <p>
            We deliver a next-generation EHS platform that goes beyond
            compliance, empowering organizations with business insights, and
            measurable outcomes. With our solution, companies can transform
            social responsibility into a driver of growth, trust, and long-term
            value.
          </p>
        </motion.div>
        <motion.div className="EHS-redef-left" variants={fadeInRight}>
          <img
            src="/images/products/EHS/EHS-Side Frame.png"
            alt="EHS Infographic"
            className="EHS-redef-img"
          />
        </motion.div>
      </motion.section>

      {/* ================= Core Modules ================= */}
      <motion.section
        id="EHS-modules"
        className="EHS-modules containers"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="EHS-section-title">SunBPM EHS Core Modules</h2>

        <div className="EHS-modules-grid">
          {MODULES.map(({ icon: Icon, title, points }, idx) => (
            <motion.div key={idx} className="EHS-module-card" variants={fadeInUp}>
              <div className="EHS-module-icon">
                <Icon size={32} />
              </div>
              <h4>{title}</h4>
              <ul>
                {points.map((p, i) => (
                  <li key={i}>
                    <span className="EHS-benefit-dot"></span>
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
        className="EHS-capabilities containers"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="EHS-section-title">
          Core <span className="highlight">EHS</span> Capabilities :
        </h2>

        <div className="EHS-cap-grid">
          {CAPABILITIES.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={i} className="EHS-cap-card" variants={fadeInUp}>
              <div className="EHS-cap-icon">
                <Icon size={26} />
              </div>
              <div className="EHS-cap-heading">{title}</div>
              <div className="EHS-cap-desc">{desc}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ================= CTA ================= */}
      <motion.section
        className="EHS-cta"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="EHS-cta-inner-container">
          <p className="EHS-cta-text">
            Empower your EHS journey with an all-in-one platform — from planning
            to impact measurement, built for modern enterprises.
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default EHS;