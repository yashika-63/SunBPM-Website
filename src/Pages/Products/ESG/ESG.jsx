import React from "react";
import { motion } from "framer-motion";
import "../../../CSS/Products/ESG/ESG.css";
import ESGCAPABILITIES from "../../../data/Products/ESGCapabilities";
import ESGMODULES from "../../../data/Products/ESGModules";
import ESGOUTCOMES from "../../../data/Products/ESGOutcomes";

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
          {ESGOUTCOMES.map(({ icon: Icon, title, points }, i) => (
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
            See how SunBPM ESG works from innovation in technology to
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
          {ESGCAPABILITIES.map(({ icon: Icon, title, desc }, i) => (
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