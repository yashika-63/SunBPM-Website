import React from "react";
import { motion } from "framer-motion";
import "../../../CSS/Products/CapexOpex/CapexOpex.css";
import CapexOpexADVANTAGES from "../../../data/Products/CapexOpexAdvantages";
import CapexOpexMODULES from "../../../data/Products/CapexOpexModules";

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


const CapexOpex = () => {
  return (
    <div className="CapexOpex-page">
      {/* ================= Hero ================= */}
      <motion.section
        className="CapexOpex-hero"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="CapexOpex-hero-overlay">
          <h1>
            A Unified View of Capital and Operational <br/> Spend.
          </h1>
          <div className="hero-button">
            <button
              className="btn-learn"
              onClick={() => {
                const element = document.getElementById("CapexOpex-modules");
                if (element) {
                  const offset = element.getBoundingClientRect().top + window.pageYOffset - 30;
                  window.scrollTo({ top: offset, behavior: "smooth" });
                }
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </motion.section>

      {/* ================= Redefining CapexOpex ================= */}
      <motion.section
        className="CapexOpex-redef containers"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="CapexOpex-redef-left" variants={fadeInLeft}>
          <h1>
            Manage Capital and Operational Expenses with Clarity
          </h1>
          <p>
            The SunBPM CAPEX/OPEX platform transforms capital and operational expenditure management 
            into a unified, transparent, and compliant process. It integrates every stage — from budget 
            creation and amendments to CAPEX/OPEX request approvals, vendor management, and reporting — 
            into a single, low-code platform. By embedding governance into daily financial operations, 
            SunBPM CAPEX/OPEX eliminates manual errors, accelerates approvals, and ensures fiscal 
            discipline across departments.
          </p>
        </motion.div>
        <motion.div className="CapexOpex-redef-right" variants={fadeInRight}>
          <img
            src="/images/products/CapexOpex/CapexOpex Intro Image.jpg"
            alt="CapexOpex  Intro Image"
            className="CapexOpex-redef-img"
          />
        </motion.div>
      </motion.section>

      {/* ================= Core Modules ================= */}
            <motion.section
                id="CapexOpex-modules"
                className="CapexOpex-modules containers"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <h2 className="CapexOpex-section-title">SunBPM CapexOpex Core Modules</h2>

                <div className="CapexOpex-modules-grid">
                    {CapexOpexMODULES.map(({ icon: Icon, title, points }, idx) => (
                        <motion.div key={idx} className="CapexOpex-module-card" variants={fadeInUp}>
                            <div className="CapexOpex-module-icon">
                                <Icon size={32} />
                            </div>
                            <h4>{title}</h4>
                            <ul>
                                {points.map((p, i) => (
                                    <li key={i}>
                                        <span className="CapexOpex-benefit-dot"></span>
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
        className="CapexOpex-ADVANTAGES containers"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h1 className="CapexOpex-section-title">
          End-to-End Operational Control, Simplified
        </h1>

        <div className="CapexOpex-cap-grid">
          {CapexOpexADVANTAGES.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={i} className="CapexOpex-cap-card" variants={fadeInUp}>
              <div className="CapexOpex-cap-icon">
                <Icon size={26} />
              </div>
              <div className="CapexOpex-cap-heading">{title}</div>
              <div className="CapexOpex-cap-desc">{desc}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ================= CTA ================= */}
      <motion.section
        className="CapexOpex-cta"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="CapexOpex-cta-inner-container">
          <p className="CapexOpex-cta-text">
            Turn your CapexOpex initiatives into measurable impact with SunBPM a smart platform that ensures
            transparency, accountability, and lasting social value.
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default CapexOpex;