import React from "react";
import { motion } from "framer-motion";
import "../../../CSS/Products/BRSR/BRSR.css";
import BRSRMODULES from "../../../data/Products/BRSRModules";
import BRSRCAPABILITIES from "../../../data/Products/BRSRCapabilities";
import BRSROUTCOMES from "../../../data/Products/BRSROutcomes";

// Feature icons


// New icons for Modules & Capabilities


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
            transparency, compliance, and measurable impact driving long-term ESG and business growth.
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
          {BRSROUTCOMES.map(({ icon: Icon, title, points }, i) => (
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
            See how SunBPM BRSR works from innovation in technology to
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
          {BRSRMODULES.map(({ icon: Icon, title, points }, idx) => (
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
          {BRSRCAPABILITIES.map(({ icon: Icon, title, desc }, i) => (
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
            Transform sustainability reporting into a strategic advantage with SunBPM BRSR precise, 
            transparent, and future-ready.
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default BRSR;