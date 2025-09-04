import React from "react";
import { motion } from "framer-motion";
import "../../../CSS/Products/CSR/CSR.css";

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
    title: "CSR Committee & Governance",
    points: [
      "Streamline policy creation, meeting management, and committee workflows.",
      "Ensure compliance with CSR regulations and governance frameworks.",
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
      "Allocate and monitor CSR budgets effectively.",
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
      "Ensure fair, ethical, and CSR-compliant procurement processes.",
    ],
  },
  {
    icon: FaGraduationCap,
    title: "Education & Community Engagement",
    points: [
      "Streamline student enrollments, attendance, and performance tracking.",
      "Strengthen community engagement through structured CSR programs.",
    ],
  },
];

// ✅ Core Capabilities
const CAPABILITIES = [
  {
    icon: FaShieldAlt,
    title: "Compliance Ready",
    desc: "Ensure all CSR activities meet legal standards.",
  },
  {
    icon: FaDraftingCompass,
    title: "Strategy Design",
    desc: "Plan and execute effective CSR initiatives.",
  },
  {
    icon: FaChartBar,
    title: "Scalable Solution",
    desc: "Reliably grow CSR initiatives across the enterprise.",
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

const CSR = () => {
  return (
    <div className="csr-page">
      {/* ================= Hero ================= */}
      <motion.section
        className="csr-hero"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="csr-hero-overlay">
          <h1>
            Comprehensive Low-Code Platform for Corporate Social Responsibility
          </h1>
          <p>
            Our Enterprise CSR Solution provides a comprehensive approach to
            Corporate Social Responsibility, empowering organizations to achieve
            sustainability development goals.
          </p>
        </div>
      </motion.section>

      {/* ================= What is CSR ================= */}
      <motion.section
        className="csr-intro containers"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2>What is CSR ?</h2>
        <p>
          <span className="highlight">Corporate Social Responsibility (CSR)</span>{" "}
          is a strategic business practice where organizations integrate
          ethical, social, and environmental concerns into their operations,
          ensuring accountability to stakeholders and contributing to sustainable
          development.
        </p>
      </motion.section>

      {/* ================= Positive Outcomes ================= */}
      <motion.section
        className="csr-outcomes containers"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2>Positive Outcomes of CSR</h2>

        <div className="csr-cards">
          {OUTCOMES.map(({ icon: Icon, title, points }, i) => (
            <motion.div key={i} className="csr-card" variants={fadeInUp}>
              <div className="csr-icon-container">
                <Icon className="csr-feature-icon" />
              </div>
              <h3>{title}</h3>
              <ul>
                {points.map((p, idx) => (
                  <li key={idx}>
                    <span className="csr-benefit-dot"></span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ================= How CSR Works ================= */}
      <motion.section
        className="csr-how containers"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="csr-how-left" variants={fadeInLeft}>
          <img src="/images/products/CSR/CSR-work.png" alt="How CSR works" />
        </motion.div>
        <motion.div className="csr-how-right" variants={fadeInRight}>
          <h2>How CSR works</h2>
          <p>
            See how SunBPM CSR works — from innovation in technology to
            impactful action.
          </p>
          <button
            className="btn-learn"
            onClick={() =>
              document.getElementById("csr-modules")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Learn More
          </button>
        </motion.div>
      </motion.section>

      {/* ================= Redefining CSR ================= */}
      <motion.section
        className="csr-redef containers"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="csr-redef-left" variants={fadeInLeft}>
          <h2>
            Redefining <span className="highlight">CSR</span> with Smart,
            Scalable Solutions
          </h2>
          <p>
            We provide a smart and scalable CSR platform that transcends compliance, equipping 
            organizations with actionable insights and measurable outcomes. With SunBPM CSR, 
            companies can turn responsibility into a catalyst for growth, trust, and lasting impact.
          </p>
        </motion.div>
        <motion.div className="csr-redef-left" variants={fadeInRight}>
          <img
            src="/images/products/CSR/CSR-Side Frame.png"
            alt="CSR Infographic"
            className="csr-redef-img"
          />
        </motion.div>
      </motion.section>

      {/* ================= Core Modules ================= */}
      <motion.section
        id="csr-modules"
        className="csr-modules containers"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="csr-section-title">SunBPM CSR Core Modules</h2>

        <div className="csr-modules-grid">
          {MODULES.map(({ icon: Icon, title, points }, idx) => (
            <motion.div key={idx} className="csr-module-card" variants={fadeInUp}>
              <div className="csr-module-icon">
                <Icon size={32} />
              </div>
              <h4>{title}</h4>
              <ul>
                {points.map((p, i) => (
                  <li key={i}>
                    <span className="csr-benefit-dot"></span>
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
        className="csr-capabilities containers"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="csr-section-title">
          Core <span className="highlight">CSR</span> Capabilities :
        </h2>

        <div className="csr-cap-grid">
          {CAPABILITIES.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={i} className="csr-cap-card" variants={fadeInUp}>
              <div className="csr-cap-icon">
                <Icon size={26} />
              </div>
              <div className="csr-cap-heading">{title}</div>
              <div className="csr-cap-desc">{desc}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ================= CTA ================= */}
      <motion.section
        className="csr-cta"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="csr-cta-inner-container">
          <p className="csr-cta-text">
            Empower your CSR journey with an all-in-one platform — from planning
            to impact measurement, built for modern enterprises.
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default CSR;