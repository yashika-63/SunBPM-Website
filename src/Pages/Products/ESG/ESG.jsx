import React from "react";
import { motion } from "framer-motion";
import "../../../CSS/Products/ESG/ESG.css";

// Feature icons
import { FaChartLine, FaHandshake, FaLeaf, FaClipboardCheck,FaCloud, FaUsers } from "react-icons/fa";

import {
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
    icon: FaLeaf,
    title: "Sustainability Framework",
    points: [
      "Ensure alignment with GRI, CDP, and S&P standards",
      "Maintain investor-trusted attribute frameworks",
    ],
  },
  {
    icon: FaCloud,
    title: "Carbon Tracking & Reporting",
    points: [
      "Automate Scope 1, 2, & 3 emissions tracking",
      "Deliver integrated carbon accounting & insights",
    ],
  },
  {
    icon: FaClipboardCheck,
    title: "Assurance & Reports",
    points: [
      "Generate audit-ready ESG reports",
      "Provide verification and compliance tools",
    ],
  },
  {
    icon: FaUsers,
    title: "Employee Wellbeing & Inclusion",
    points: [
      "Foster diversity, fairness, and inclusion",
      "Promote employee health and well-being",
    ],
  },
  {
    icon: FaChartLine,
    title: "Performance Tracking & Benchmarking",
    points: [
      "Offer real-time ESG performance insights",
      "Enable financial and non-financial comparisons",
    ],
  },
  {
    icon: FaHandshake,
    title: "Stakeholder & Value Chain Engagement",
    points: [
      "Manage stakeholder interactions effectively",
      "Conduct materiality assessments for ESG priorities",
    ],
  },
];

// ✅ Core Capabilities
const CAPABILITIES = [
  {
    icon: FaShieldAlt,
    title: "Compliance Assurance",
    desc: "Ensure ESG initiatives align with global regulations and reporting standards.",
  },
  {
    icon: FaDraftingCompass,
    title: "Strategic Execution",
    desc: "Design and implement effective sustainability strategies across the enterprise.",
  },
  {
    icon: FaChartBar,
    title: "Scalable Growth",
    desc: "Expand ESG practices seamlessly to support long-term organizational goals.",
  },
];


// ✅ Positive Outcomes
const OUTCOMES = [
  {
    icon: FaLeaf,
    title: "Sustainable Growth",
    points: [
      "Strengthens long-term business resilience",
      "Reduces environmental risks with efficient resource use",
      "Aligns strategies with global sustainability goals",
    ],
  },
  {
    icon: FaHandshake,
    title: "Stronger Stakeholder Trust",
    points: [
      "Builds credibility with investors, regulators, and customers",
      "Improves employee engagement and workplace culture",
      "Enhances brand reputation through ethical practices",
    ],
  },
  {
    icon: FaChartLine,
    title: "Improved Business Performance",
    points: [
      "Unlocks access to ESG-focused funding and partnerships",
      "Drives operational efficiency and cost savings",
      "Enables data-driven decisions with transparent reporting",
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
            Comprehensive Low-Code Platform for Environmental, Social, and Governance
          </h1>
          <p>
            Our Enterprise ESG Solution empowers organizations to achieve sustainability goals through a 
            holistic Environmental, Social, and Governance approach.
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
          <span className="highlight">Environmental, Social, and Governance (ESG)</span>{" "}
          refers to the standards and practices that guide businesses in managing their environmental impact, 
          social responsibility, and corporate governance to drive sustainable growth.
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
            We provide a future-ready ESG platform that goes beyond compliance, enabling organizations to 
            gain actionable insights, achieve measurable outcomes, and turn sustainability into a driver of 
            growth, trust, and long-term value.
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
            Drive sustainable success with a unified ESG platform enabling strategy, compliance, and 
            measurable impact for modern enterprises.
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default ESG;