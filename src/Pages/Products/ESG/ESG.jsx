import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../../../CSS/Products/ESG/ESG.css";
import ESGADVANTAGES from "../../../data/Products/ESGAdvantages";
import ESGModules from "../../../data/Products/ESGModules";

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
  const navigate = useNavigate();
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
            ESG: Paving the Path to a Sustainable <br/>Economy
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

      {/* ================= Defining ESG ================= */}
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
            Enterprise ESG Solution enabling the entire ESG glide path. ESG aims to enhance
            disclosures on sustainability-related topics and provide stakeholders with better
            quantitative and qualitative insights and improve performance.
          </p>
        </motion.div>
        <motion.div className="ESG-redef-right" variants={fadeInRight}>
          <img
            src="https://javajar1234.s3.ap-south-1.amazonaws.com/SunBPM+website/products/ESG/ESG+Intro+Image.png"
            alt="ESG  Intro Image"
            className="ESG-redef-img"
          />
        </motion.div>
      </motion.section>

      {/* ================= Core Modules ================= */}
      <section id="ESG-core-modules" className="ESG-core-modules container">
        <h2 className="ESG-core-title">Core Modules: Strategy, Execution, and Verification</h2>

        <div className="ESG-cards-grid">
          {ESGModules.map((group) => (
            <article
              key={group.id}
              className="ESG-group-card"
              onClick={() => navigate(`/ESGModules/${group.id}`)}
            >
              <div
                className="ESG-card-image-capsule"
                style={{ backgroundImage: `url(${group.image})` }}
                aria-hidden
              >
                <div className="ESG-capsule-overlay">
                  <button
                    className="ESG-capsule-view"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/modules/group/${group.id}`);
                    }}
                  >
                    <span className="ESG-capsule-text">View Modules</span>
                  </button>
                </div>
              </div>

              {/* content above the hover image */}
              <div className="ESG-ESG-group-card-body">
                <div className="ESG-group-top">
                  <span className="ESG-radio-dot" aria-hidden />
                  <span className="ESG-group-label">{group.groupName.split(" ")[0]}</span>
                </div>

                <h3 className="ESG-group-name">{group.groupName.split(" ").slice(0, 4).join(" ")}</h3>

                <p className="ESG-group-shortdesc">{group.shortDesc}</p>

                {/* bottom pill visible in default state */}
                <div className="ESG-default-cta">
                  <div className="ESG-cta-pill">
                    <div className="ESG-cta-circle">
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

                    <div className="ESG-cta-line" aria-hidden />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= Strategic Advantages ================= */}
      <motion.section
        className="ESG-strategic-advantages container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h1 className="ESG-advantages-title">Delivering Client Value: Strategic Advantages</h1>
        <div className="ESG-advantages-title-line"></div>

        <div className="ESG-advantages-grid">
          {ESGADVANTAGES.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={i} className="ESG-advantages-card" variants={fadeInUp}>

              <div className="ESG-advantages-icon-wrap">
                <div className="ESG-advantages-icon">
                  <Icon size={32} />
                  <span className="ESG-icon-blink"></span>
                </div>
              </div>

              <h3 className="ESG-advantages-card-title">{title}</h3>

              {/* Line between heading and paragraph */}
              <div className="ESG-advantages-card-line"></div>

              <p className="ESG-advantages-card-desc">{desc}</p>

              <span className="ESG-shine"></span>
            </motion.div>
          ))}
        </div>
      </motion.section>

    </div>
  );
};

export default ESG;