import React from "react";
import { motion } from "framer-motion";
import "../../../CSS/Products/ESG/ESG.css";
import ESGADVANTAGES from "../../../data/Products/ESGAdvantages";
import ESGMODULES from "../../../data/Products/ESGModules";

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
            ESG: Paving the Path to a Sustainable <br/> Economy
          </h1>
          <div className="hero-button">
            <button
              className="btn-learn"
              onClick={() => {
                const element = document.getElementById("ESG-modules");
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

      {/* ================= Redefining ESG ================= */}
      <motion.section
        className="ESG-redef containers"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="ESG-redef-left" variants={fadeInLeft}>
          <h1>
            A Clear View of Your Sustainability Performance
          </h1>
          <p>
            Enterprise ESG Solution enabling the entire ESG glide path. ESG aims to enhance disclosures 
            on sustainability-related topics and provide stakeholders with better quantitative and 
            qualitative insights and improve performance.
          </p>
        </motion.div>
        <motion.div className="ESG-redef-right" variants={fadeInRight}>
          <img
            src="/images/products/ESG/ESG Intro Image.png"
            alt="ESG  Intro Image"
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
        <h1 className="ESG-section-title">SunBPM ESG Core Modules</h1>

        <div className="ESG-modules-grid">
          {ESGMODULES.map(({ icon: Icon, title, points }, idx) => (
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

      {/* ================= Strategic Advantages ================= */}
      <motion.section
        className="ESG-ADVANTAGES containers"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h1 className="ESG-section-title">
          Delivering Client Value: Strategic Advantages
        </h1>

        <div className="ESG-cap-grid">
          {ESGADVANTAGES.map(({ icon: Icon, title, desc }, i) => (
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
            Empower sustainable growth with SunBPM ESG your unified platform for tracking, managing, and 
            reporting environmental, social, and governance performance with accuracy and confidence.
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default ESG;