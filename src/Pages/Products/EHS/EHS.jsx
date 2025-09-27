import React from "react";
import { motion } from "framer-motion";
import "../../../CSS/Products/EHS/EHS.css";
import EHSOUTCOMES from "../../../data/Products/EHSOutcomes";
import EHSMODULES from "../../../data/Products/EHSModules";
import EHSCAPABILITIES from "../../../data/Products/EHSCapabilities";

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
            Comprehensive Low-Code Platform for Environment, Health, and Safety
          </h1>
          <p>
            Our Enterprise EHS Solution delivers an integrated approach to Environment, Health, and Safety,
            helping organizations ensure compliance, protect employees, and build a sustainable workplace.
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
          <span className="highlight">Environment, Health, and Safety (EHS)</span>{" "}
          is a structured business discipline focused on safeguarding people, protecting the environment, and
          ensuring workplace safety. By integrating regulatory compliance, risk management, and sustainability
          practices, EHS enables organizations to minimize hazards, enhance employee well-being, and drive long-term operational excellence.
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
          {EHSOUTCOMES.map(({ icon: Icon, title, points }, i) => (
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
            See how SunBPM EHS works from innovation in technology to
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
            We provide a next-generation EHS platform that extends beyond regulatory compliance, 
            equipping organizations with actionable insights, advanced safety management, and measurable 
            results. Our solution transforms EHS into a strategic enabler of resilience, stakeholder 
            confidence, and sustainable growth value.
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
          {EHSCAPABILITIES.map(({ icon: Icon, title, desc }, i) => (
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
            Drive safer, smarter, and sustainable operations with an integrated EHS platform built to 
            protect people, ensure compliance, and strengthen business resilience.
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default EHS;