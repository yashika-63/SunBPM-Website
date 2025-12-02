import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../../../CSS/Products/CapexOpex/CapexOpex.css";
import CapexOpexADVANTAGES from "../../../data/Products/CapexOpexAdvantages";
import CapexOpexModules from "../../../data/Products/CapexOpexModules";

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
  const navigate = useNavigate();
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
            A Unified View of Capital and Operational <br />Spend.
          </h1>
          <div className="hero-button">
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

      {/* ================= Defining CapexOpex ================= */}
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
            The SunBPM CAPEX/OPEX platform transforms capital and operational expenditure management into a
            unified, transparent, and compliant process. It integrates every stage — from budget creation
            and amendments to CAPEX/OPEX request approvals, vendor management, and reporting — into a
            single, low-code platform. By embedding governance into daily financial operations,
            SunBPM CAPEX/OPEX eliminates manual errors, accelerates approvals, and ensures fiscal
            discipline across departments.
          </p>
        </motion.div>
        <motion.div className="CapexOpex-redef-right" variants={fadeInRight}>
          <img
            src="https://javajar1234.s3.ap-south-1.amazonaws.com/SunBPM+website/products/CapexOpex/CapexOpex+Intro+Image.jpg"
            alt="CapexOpex  Intro Image"
            className="CapexOpex-redef-img"
          />
        </motion.div>
      </motion.section>

      {/* ================= Core Modules ================= */}
      <section className="CapexOpex-core-modules container">
        <h2 className="CapexOpex-core-title">Core Modules: CAPEX/OPEX Streamlined with Governance</h2>

        <div className="CapexOpex-cards-grid">
          {CapexOpexModules.map((group) => (
            <article
              key={group.id}
              className="CapexOpex-group-card"
              onClick={() => navigate(`/CapexOpexModules/${group.id}`)}
            >
              <div
                className="CapexOpex-card-image-capsule"
                style={{ backgroundImage: `url(${group.image})` }}
                aria-hidden
              >
                <div className="CapexOpex-capsule-overlay">
                  <button
                    className="CapexOpex-capsule-view"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/modules/group/${group.id}`);
                    }}
                  >
                    <span className="CapexOpex-capsule-text">View Modules</span>
                  </button>
                </div>
              </div>

              {/* content above the hover image */}
              <div className="CapexOpex-CapexOpex-group-card-body">
                <div className="CapexOpex-group-top">
                  <span className="CapexOpex-radio-dot" aria-hidden />
                  <span className="CapexOpex-group-label">{group.groupName.split(" ")[0]}</span>
                </div>

                <h3 className="CapexOpex-group-name">{group.groupName.split(" ").slice(0, 4).join(" ")}</h3>

                <p className="CapexOpex-group-shortdesc">{group.shortDesc}</p>

                {/* bottom pill visible in default state */}
                <div className="CapexOpex-default-cta">
                  <div className="CapexOpex-cta-pill">
                    <div className="CapexOpex-cta-circle">
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

                    <div className="CapexOpex-cta-line" aria-hidden />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= Strategic Advantages ================= */}
      <motion.section
        className="CapexOpex-strategic-advantages container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h1 className="CapexOpex-advantages-title">End-to-End Operational Control, Simplified</h1>
        <div className="CapexOpex-advantages-title-line"></div>

        <div className="CapexOpex-advantages-grid">
          {CapexOpexADVANTAGES.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={i} className="CapexOpex-advantages-card" variants={fadeInUp}>

              <div className="CapexOpex-advantages-icon-wrap">
                <div className="CapexOpex-advantages-icon">
                  <Icon size={32} />
                  <span className="CapexOpex-icon-blink"></span>
                </div>
              </div>

              <h3 className="CapexOpex-advantages-card-title">{title}</h3>

              {/* Line between heading and paragraph */}
              <div className="CapexOpex-advantages-card-line"></div>

              <p className="CapexOpex-advantages-card-desc">{desc}</p>

              <span className="CapexOpex-shine"></span>
            </motion.div>
          ))}
        </div>
      </motion.section>

    </div>
  );
};

export default CapexOpex;