import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../../../CSS/Products/EHS/EHS.css";
import EHSADVANTAGES from "../../../data/Products/EHSAdvantages";
import EHSModules from "../../../data/Products/EHSModules";

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
  const navigate = useNavigate();
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
            The core platform for operationalizing <br/>health and environmental integrity
          </h1>
          <div className="product-hero-button">
            <button
              className="btn-learn"
              onClick={() => {
                navigate("/Contact");
              }}
            >
              Let us Talk
            </button>

          </div>
        </div>
      </motion.section>

      {/* ================= Defining EHS ================= */}
      <motion.section
        className="EHS-redef containers"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="EHS-redef-left" variants={fadeInLeft}>
          <h1>
           EHS Management That Powers Safety and Compliance
          </h1>
          <p>
            EHS Management ensures organizations comply with regulations, protect employee health, and 
            maintain safety. It involves identifying hazards, implementing safeguards, and monitoring 
            performance to reduce risks to people and the environment. SunBPM provides an integrated, 
            modular platform that transforms EHS from a reactive reporting function into a proactive, 
            preventative control system.
          </p>
        </motion.div>
        <motion.div className="EHS-redef-right" variants={fadeInRight}>
          <img
            src="https://javajar1234.s3.ap-south-1.amazonaws.com/SunBPM+website/products/EHS/EHS+Intro+Image.jpg"
            alt="EHS  Intro Image"
            className="EHS-redef-img"
          />
        </motion.div>
      </motion.section>

      {/* ================= Core Modules ================= */}
      <section id="EHS-core-modules"  className="EHS-core-modules container">
        <h2 className="EHS-core-title">End-to-End EHS Lifecycle Management</h2>

        <div className="EHS-cards-grid">
          {EHSModules.map((group) => (
            <article
              key={group.id}
              className="EHS-group-card"
              onClick={() => navigate(`/EHSModules/${group.id}`)}
            >
              <div
                className="EHS-card-image-capsule"
                style={{ backgroundImage: `url(${group.image})` }}
                aria-hidden
              >
                <div className="EHS-capsule-overlay">
                  <button
                    className="EHS-capsule-view"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/modules/group/${group.id}`);
                    }}
                  >
                    <span className="EHS-capsule-text">View Modules</span>
                  </button>
                </div>
              </div>

              {/* content above the hover image */}
              <div className="EHS-EHS-group-card-body">
                <div className="EHS-group-top">
                  <span className="EHS-radio-dot" aria-hidden />
                  <span className="EHS-group-label">{group.groupName.split(" ")[0]}</span>
                </div>

                <h3 className="EHS-group-name">{group.groupName.split(" ").slice(0, 4).join(" ")}</h3>

                <p className="EHS-group-shortdesc">{group.shortDesc}</p>

                {/* bottom pill visible in default state */}
                <div className="EHS-default-cta">
                  <div className="EHS-cta-pill">
                    <div className="EHS-cta-circle">
                      <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden>
                        <path
                          d="M8 12h8M14 8l4 4-4 4"
                          fill="none"
                          stroke="#b6b5b5ff"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <div className="EHS-cta-line" aria-hidden />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= Strategic Advantages ================= */}
      <motion.section
        className="EHS-strategic-advantages container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h1 className="EHS-advantages-title">Delivering Client Value: Strategic Advantages</h1>
        <div className="EHS-advantages-title-line"></div>

        <div className="EHS-advantages-grid">
          {EHSADVANTAGES.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={i} className="EHS-advantages-card" variants={fadeInUp}>

              <div className="EHS-advantages-icon-wrap">
                <div className="EHS-advantages-icon">
                  <Icon size={32} />
                  <span className="EHS-icon-blink"></span>
                </div>
              </div>

              <h3 className="EHS-advantages-card-title">{title}</h3>

              {/* Line between heading and paragraph */}
              <div className="EHS-advantages-card-line"></div>

              <p className="EHS-advantages-card-desc">{desc}</p>

              <span className="EHS-shine"></span>
            </motion.div>
          ))}
        </div>
      </motion.section>

    </div>
  );
};

export default EHS;