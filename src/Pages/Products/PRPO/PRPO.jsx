import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../../../CSS/Products/PRPO/PRPO.css";
import PRPOADVANTAGES from "../../../data/Products/PRPOAdvantages";
import PRPOModules from "../../../data/Products/PRPOModules";

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



const PRPO = () => {
  const navigate = useNavigate();
  return (
    <div className="PRPO-page">
      {/* ================= Hero ================= */}
      <motion.section
        className="PRPO-hero"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="PRPO-hero-overlay">
          <h1>
            Empower Every Purchase with Ease and <br /> Efficiency
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

      {/* ================= Defining PRPO ================= */}
      <motion.section
        className="PRPO-redef containers"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="PRPO-redef-left" variants={fadeInLeft}>
          <h1>
            A Solution That Helps You Control Spend
          </h1>
          <p>
            The SunBPM Purchase Requisition and Purchase Order (PRPO) system is a comprehensive procurement
            framework built on our low-code platform. It integrates budget control, multi-tier requisition
            initiation and approval flows, vendor management, vendor negotiation, spending analytics, and
            all of the aspects of the supply chain. From initiating purchase requests to ensuring compliance,
            visibility, accountability, and on-time payout of approved line items–this all-in-one system
            enhances transparency, ensuring compliance while reducing approval cycles and costs.
          </p>
        </motion.div>
        <motion.div className="PRPO-redef-right" variants={fadeInRight}>
          <img
            src="https://javajar1234.s3.ap-south-1.amazonaws.com/SunBPM+website/products/PRPO/PRPO+Intro+Image.jpg"
            alt="PRPO  Intro Image"
            className="PRPO-redef-img"
          />
        </motion.div>
      </motion.section>

      {/* ================= Core Modules ================= */}
      <section id="PRPO-core-modules"  className="PRPO-core-modules container">
        <h2 className="PRPO-core-title">Core Modules: Procurement Streamlined with Governance</h2>

        <div className="PRPO-cards-grid">
          {PRPOModules.map((group) => (
            <article
              key={group.id}
              className="PRPO-group-card"
              onClick={() => navigate(`/PRPOModules/${group.id}`)}
            >
              <div
                className="PRPO-card-image-capsule"
                style={{ backgroundImage: `url(${group.image})` }}
                aria-hidden
              >
                <div className="PRPO-capsule-overlay">
                  <button
                    className="PRPO-capsule-view"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/modules/group/${group.id}`);
                    }}
                  >
                    <span className="PRPO-capsule-text">View Modules</span>
                  </button>
                </div>
              </div>

              {/* content above the hover image */}
              <div className="PRPO-PRPO-group-card-body">
                <div className="PRPO-group-top">
                  <span className="PRPO-radio-dot" aria-hidden />
                  <span className="PRPO-group-label">{group.groupName.split(" ")[0]}</span>
                </div>

                <h3 className="PRPO-group-name">{group.groupName.split(" ").slice(0, 4).join(" ")}</h3>

                <p className="PRPO-group-shortdesc">{group.shortDesc}</p>

                {/* bottom pill visible in default state */}
                <div className="PRPO-default-cta">
                  <div className="PRPO-cta-pill">
                    <div className="PRPO-cta-circle">
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

                    <div className="PRPO-cta-line" aria-hidden />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= Strategic Advantages ================= */}
      <motion.section
        className="PRPO-strategic-advantages container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h1 className="PRPO-advantages-title">Procurement Made Transparent and Agile</h1>
        <div className="PRPO-advantages-title-line"></div>

        <div className="PRPO-advantages-grid">
          {PRPOADVANTAGES.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={i} className="PRPO-advantages-card" variants={fadeInUp}>

              <div className="PRPO-advantages-icon-wrap">
                <div className="PRPO-advantages-icon">
                  <Icon size={32} />
                  <span className="PRPO-icon-blink"></span>
                </div>
              </div>

              <h3 className="PRPO-advantages-card-title">{title}</h3>

              {/* Line between heading and paragraph */}
              <div className="PRPO-advantages-card-line"></div>

              <p className="PRPO-advantages-card-desc">{desc}</p>

              <span className="PRPO-shine"></span>
            </motion.div>
          ))}
        </div>
      </motion.section>

    </div>
  );
};

export default PRPO;