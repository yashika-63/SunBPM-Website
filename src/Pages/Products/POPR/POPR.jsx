import React from "react";
import { motion } from "framer-motion";
import "../../../CSS/Products/POPR/POPR.css";
import POPRADVANTAGES from "../../../data/Products/POPRADVANTAGES";
import POPRMODULES from "../../../data/Products/POPRModules";

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


const POPR = () => {
  return (
    <div className="POPR-page">
      {/* ================= Hero ================= */}
      <motion.section
        className="POPR-hero"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="POPR-hero-overlay">
          <h1>
            Control Every Purchase with Ease and <br/> Efficiency
          </h1>
          <div className="hero-button">
            <button
              className="btn-learn"
              onClick={() => {
                const element = document.getElementById("POPR-modules");
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

      {/* ================= Redefining POPR ================= */}
      <motion.section
        className="POPR-redef containers"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="POPR-redef-left" variants={fadeInLeft}>
          <h1>
            A Solution That Helps You Control Spend
          </h1>
          <p>
            The SunBPM Purchase Requisition and Purchase Order (PO/PR) System transforms procurement into 
            a unified, transparent, and compliant process. It integrates every stage from requisition 
            initiation and approval to purchase order management, vendor interaction, and reporting 
            into a single, low-code platform. SunBPM PO/PR structures all procurement activities 
            into four interconnected pillars, ensuring complete visibility, accountability, and 
            control across the supply chain.
          </p>
        </motion.div>
        <motion.div className="POPR-redef-right" variants={fadeInRight}>
          <img
            src="/images/products/POPR/POPR Intro Image.jpg"
            alt="POPR  Intro Image"
            className="POPR-redef-img"
          />
        </motion.div>
      </motion.section>

      {/* ================= Core Modules ================= */}
            <motion.section
                id="POPR-modules"
                className="POPR-modules containers"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <h2 className="POPR-section-title">SunBPM POPR Core Modules</h2>

                <div className="POPR-modules-grid">
                    {POPRMODULES.map(({ icon: Icon, title, points }, idx) => (
                        <motion.div key={idx} className="POPR-module-card" variants={fadeInUp}>
                            <div className="POPR-module-icon">
                                <Icon size={32} />
                            </div>
                            <h4>{title}</h4>
                            <ul>
                                {points.map((p, i) => (
                                    <li key={i}>
                                        <span className="POPR-benefit-dot"></span>
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
        className="POPR-ADVANTAGES containers"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h1 className="POPR-section-title">
          Procurement Made Transparent and Agile
        </h1>

        <div className="POPR-cap-grid">
          {POPRADVANTAGES.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={i} className="POPR-cap-card" variants={fadeInUp}>
              <div className="POPR-cap-icon">
                <Icon size={26} />
              </div>
              <div className="POPR-cap-heading">{title}</div>
              <div className="POPR-cap-desc">{desc}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ================= CTA ================= */}
      <motion.section
        className="POPR-cta"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="POPR-cta-inner-container">
          <p className="POPR-cta-text">
            Turn your POPR initiatives into measurable impact with SunBPM a smart platform that ensures
            transparency, accountability, and lasting social value.
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default POPR;