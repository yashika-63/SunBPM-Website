import React from "react";
import { motion } from "framer-motion";
import "../../../CSS/Products/EHS/EHS.css";
import EHSADVANTAGES from "../../../data/Products/EHSADVANTAGES";
import EHSMODULES from "../../../data/Products/EHSModules";

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
            Streamlining Customer Relationships <br />for Business Growth.
          </h1>
          <div className="hero-button">
            <button
              className="btn-learn"
              onClick={() => {
                const element = document.getElementById("EHS-modules");
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
            Empowering organizations to drive purposeful impact through streamlined EHS planning, 
            execution, and reporting all on a single intelligent platform.
          </p> */}
        </div>
      </motion.section>

      {/* ================= Redefining EHS ================= */}
      <motion.section
        className="EHS-redef containers"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="EHS-redef-left" variants={fadeInLeft}>
          <h1>
            The core platform for operationalizing health and environmental integrity
          </h1>
          <p>
            EHS Management ensures organizations comply with regulations, protect employee health and
            maintain safety. It involves identifying hazards, implementing safeguards, and monitoring
            performance to reduce risks to people and the environment. SunBPM provides an integrated,
            modular platform that transforms EHS from a reactive reporting function into a proactive,
            preventative control system.
          </p>
        </motion.div>
        <motion.div className="EHS-redef-right" variants={fadeInRight}>
          <img
            src="/images/products/EHS/EHS Intro Image.jpg"
            alt="EHS Intro Image"
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
                    {EHSMODULES.map(({ icon: Icon, title, points }, idx) => (
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

      {/* ================= Strategic Advantages ================= */}
      <motion.section
        className="EHS-ADVANTAGES containers"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h1 className="EHS-section-title">
          Delivering Client Value: Strategic Advantages
        </h1>

        <div className="EHS-cap-grid">
          {EHSADVANTAGES.map(({ icon: Icon, title, desc }, i) => (
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
            Turn your EHS initiatives into measurable impact with SunBPM a smart platform that ensures
            transparency, accountability, and lasting social value.
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default EHS;