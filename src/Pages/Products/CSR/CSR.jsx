import React from "react";
import { motion } from "framer-motion";
import "../../../CSS/Products/CSR/CSR.css";
// import CSRADVANTAGES from "../../../data/Products/CSRAdvantages.jsx";
import CSRADVANTAGES from "../../../data/Products/CSRAdvantages";
import CSRMODULES from "../../../data/Products/CSRModules";

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

            Impact That Speaks. Responsibility <br />That Counts
          </h1>
          <div className="hero-button">
            <button
              className="btn-learn"
              onClick={() => {
                const element = document.getElementById("csr-modules");
                if (element) {
                  const offset = element.getBoundingClientRect().top + window.pageYOffset - 30;
                  window.scrollTo({ top: offset, behavior: "smooth" });
                }
              }}
            >
              Learn More
            </button>
          </div>
          {/* <p>
            Empowering organizations to drive purposeful impact through streamlined CSR planning, 
            execution, and reporting all on a single intelligent platform.

          </p> */}
        </div>
      </motion.section>

      {/* ================= Redefining CSR ================= */}
      <motion.section
        className="csr-redef containers"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="csr-redef-left" variants={fadeInLeft}>
          <h1>
            SunBPM CSR: Governance & Verifiable Impact
          </h1>
          <p>
            SunBPM CSR is the single digital platform that connects your CSR policy and budget directly
            to validated ground-level outcomes. We eliminate the fragmented spreadsheets and manual data
            compilation, ensuring that every rupee spent and every hour volunteered is captured within an
            audit-ready, centralized system.
          </p>
        </motion.div>
        <motion.div className="csr-redef-right" variants={fadeInRight}>
          <img
            src="/images/products/CSR/CSR Intro Image.png"
            alt="CSR  Intro Image"
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
        <h1 className="csr-section-title">SunBPM CSR Core Modules</h1>

        <div className="csr-modules-grid">
          {CSRMODULES.map(({ icon: Icon, title, points }, idx) => (
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

      {/* ================= Strategic Advantages ================= */}
      <motion.section
        className="csr-ADVANTAGES containers"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h1 className="csr-section-title">
          Delivering Client Value: Strategic Advantages
        </h1>

        <div className="csr-cap-grid">
          {CSRADVANTAGES.map(({ icon: Icon, title, desc }, i) => (

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
            Turn your CSR initiatives into measurable impact with SunBPM a smart platform that ensures
            transparency, accountability, and lasting social value.
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default CSR;
