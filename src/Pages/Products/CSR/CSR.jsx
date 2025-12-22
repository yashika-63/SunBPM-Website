import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../../../CSS/Products/CSR/CSR.css";
import CSRADVANTAGES from "../../../data/Products/CSRAdvantages";
import CSRModules from "../../../data/Products/CSRModules";

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



const CSR = () => {
  const navigate = useNavigate();
  return (
    <div className="csr-page">
      {/* ================= Hero ================= */}
      <motion.section
        className="csr-hero"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="csr-hero-overlay">
          <h1>
            Impact That Speaks. Responsibility <br />That Counts
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

      {/* ================= Defining CSR ================= */}
      <motion.section
        className="csr-redef containers"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="csr-redef-left" variants={fadeInLeft}>
          <h1>
            SunBPM CSR: Governance & Verifiable Impact
          </h1>
          <p>
            SunBPM CSR is the single digital platform that connects your CSR policy and budget directly
            to validated ground-level outcomes. We eliminate the fragmented spreadsheets and manual data
            compilation, ensuring that every rupee spent and every hour volunteered is captured within an
            audit-ready, centralized system.
          </p>
        </motion.div>
        <motion.div className="csr-redef-right" variants={fadeInRight}>
          <img
            src="https://javajar1234.s3.ap-south-1.amazonaws.com/SunBPM+website/products/CSR/CSR+Intro+Image.png"
            alt="CSR  Intro Image"
            className="csr-redef-img"
          />
        </motion.div>
      </motion.section>

      {/* ================= Core Modules ================= */}
      <section id="csr-core-modules" className="csr-core-modules containers">
        <h2 className="csr-core-title">Core Modules: Strategy, Execution, and Verification</h2>

        <div className="csr-cards-grid">
          {CSRModules.map((group) => (
            <article
              key={group.id}
              className="csr-group-card"
              onClick={() => navigate(`/csrmodules/${group.id}`)}
            >
              <div
                className="csr-card-image-capsule"
                style={{ backgroundImage: `url(${group.image})` }}
                aria-hidden
              >
                <div className="csr-capsule-overlay">
                  <button
                    className="csr-capsule-view"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/modules/group/${group.id}`);
                    }}
                  >
                    <span className="csr-capsule-text">View Modules</span>
                  </button>
                </div>
              </div>

              {/* content above the hover image */}
              <div className="csr-csr-group-card-body">
                <div className="csr-group-top">
                  <span className="csr-radio-dot" aria-hidden />
                  <span className="csr-group-label">{group.groupName.split(" ")[0]}</span>
                </div>

                <h3 className="csr-group-name">{group.groupName.split(" ").slice(0, 4).join(" ")}</h3>

                <p className="csr-group-shortdesc">{group.shortDesc}</p>

                {/* bottom pill visible in default state */}
                <div className="csr-default-cta">
                  <div className="csr-cta-pill">
                    <div className="csr-cta-circle">
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

                    <div className="csr-cta-line" aria-hidden />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= Strategic Advantages ================= */}
      <motion.section
        className="csr-strategic-advantages containers"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h1 className="csr-advantages-title">Delivering Client Value: Strategic Advantages</h1>
        <div className="csr-advantages-title-line"></div>

        <div className="csr-advantages-grid">
          {CSRADVANTAGES.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={i} className="csr-advantages-card" variants={fadeInUp}>

              <div className="csr-advantages-icon-wrap">
                <div className="csr-advantages-icon">
                  <Icon size={32} />
                  <span className="csr-icon-blink"></span>
                </div>
              </div>

              <h3 className="csr-advantages-card-title">{title}</h3>

              {/* Line between heading and paragraph */}
              <div className="csr-advantages-card-line"></div>

              <p className="csr-advantages-card-desc">{desc}</p>

              <span className="csr-shine"></span>
            </motion.div>
          ))}
        </div>
      </motion.section>

    </div>
  );
};

export default CSR;