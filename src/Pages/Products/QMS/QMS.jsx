import React from "react";
import { motion } from "framer-motion";
import "../../../CSS/Products/QMS/QMS.css";
import QMSADVANTAGES from "../../../data/Products/QMSAdvantages";
import QMSMODULES from "../../../data/Products/QMSModules";

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


const QMS = () => {
  return (
    <div className="QMS-page">
      {/* ================= Hero ================= */}
      <motion.section
        className="QMS-hero"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="QMS-hero-overlay">
          <h1>
            Quality is the bridge between aspiration and <br/>achievement
          </h1>
          <div className="hero-button">
            <button
              className="btn-learn"
              onClick={() => {
                const element = document.getElementById("QMS-modules");
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

      {/* ================= Redefining QMS ================= */}
      <motion.section
        className="QMS-redef containers"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="QMS-redef-left" variants={fadeInLeft}>
          <h1>
            The core platform for operationalizing health and environmental integrity
          </h1>
          <p>
            QMS Management ensures organizations comply with regulations, protect employee health and
            maintain safety. It involves identifying hazards, implementing safeguards, and monitoring
            performance to reduce risks to people and the environment. SunBPM provides an integrated,
            modular platform that transforms QMS from a reactive reporting function into a proactive,
            preventative control system.
          </p>
        </motion.div>
        <motion.div className="QMS-redef-right" variants={fadeInRight}>
          <img
            src="/images/products/QMS/QMS Intro Image.jpg"
            alt="QMS  Intro Image"
            className="QMS-redef-img"
          />
        </motion.div>
      </motion.section>

      {/* ================= Core Modules ================= */}
      <motion.section
        id="QMS-modules"
        className="QMS-modules containers"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h1 className="QMS-section-title">SunBPM QMS Core Modules</h1>

        <div className="QMS-modules-grid">
          {QMSMODULES.map(({ icon: Icon, title, points }, idx) => (
            <motion.div key={idx} className="QMS-module-card" variants={fadeInUp}>
              <div className="QMS-module-icon">
                <Icon size={32} />
              </div>
              <h4>{title}</h4>
              <ul>
                {points.map((p, i) => (
                  <li key={i}>
                    <span className="QMS-benefit-dot"></span>
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
        className="QMS-ADVANTAGES containers"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h1 className="QMS-section-title">
          Delivering Client Value: Measurable ROI & Strategic Advantages
        </h1>

        <div className="QMS-cap-grid">
          {QMSADVANTAGES.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={i} className="QMS-cap-card" variants={fadeInUp}>
              <div className="QMS-cap-icon">
                <Icon size={26} />
              </div>
              <div className="QMS-cap-heading">{title}</div>
              <div className="QMS-cap-desc">{desc}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ================= CTA ================= */}
      <motion.section
        className="QMS-cta"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="QMS-cta-inner-container">
          <p className="QMS-cta-text">
            Drive quality excellence across your organization with SunBPM QMS automating audits, tracking 
            performance, and ensuring continuous improvement at every stage.
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default QMS;