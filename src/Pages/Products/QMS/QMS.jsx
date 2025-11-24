import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../../../CSS/Products/QMS/QMS.css";
import QMSADVANTAGES from "../../../data/Products/QMSADVANTAGES";
import QMSModules from "../../../data/Products/QMSModules";

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



const QMS = () => {
  const navigate = useNavigate();
  return (
    <div className="QMS-page">
      {/* ================= Hero ================= */}
      <motion.section
        className="QMS-hero"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="QMS-hero-overlay">
          <h1>
            From Planning to Delivery, SunBPM PMS delivers <br /> excellence at every stage
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

      {/* ================= Defining QMS ================= */}
      <motion.section
        className="QMS-redef containers"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="QMS-redef-left" variants={fadeInLeft}>
          <h1>
            Quality That Powers Performance
          </h1>
          <p>
            The SunBPM Project Management System (PMS) is a powerful low-code platform designed to streamline
            project planning, execution, and delivery. It links project execution and development cycles into
            a unified base, enabling data-driven project status tracking that are always deliverable on-time.
            From setting project goals, managing project tasks and quality standards to ensuring every
            deliverable meets quality, regulatory, and efficiency standards, our suite providing the
            project-in-cycle built responsibly for predictable project outcomes.
          </p>
        </motion.div>
        <motion.div className="QMS-redef-right" variants={fadeInRight}>
          <img
            src="/images/products/QMS/QMS Intro Image.jpg"
            alt="QMS  Intro Image"
            className="QMS-redef-img"
          />
        </motion.div>
      </motion.section>

      {/* ================= Core Modules ================= */}
      <section className="QMS-core-modules container">
        <h2 className="QMS-core-title">Core Modules: Quality Embedded in Execution</h2>

        <div className="QMS-cards-grid">
          {QMSModules.map((group) => (
            <article
              key={group.id}
              className="QMS-group-card"
              onClick={() => navigate(`/QMSModules/${group.id}`)}
            >
              <div
                className="QMS-card-image-capsule"
                style={{ backgroundImage: `url(${group.image})` }}
                aria-hidden
              >
                <div className="QMS-capsule-overlay">
                  <button
                    className="QMS-capsule-view"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/modules/group/${group.id}`);
                    }}
                  >
                    <span className="QMS-capsule-text">View Modules</span>
                  </button>
                </div>
              </div>

              {/* content above the hover image */}
              <div className="QMS-QMS-group-card-body">
                <div className="QMS-group-top">
                  <span className="QMS-radio-dot" aria-hidden />
                  <span className="QMS-group-label">{group.groupName.split(" ")[0]}</span>
                </div>

                <h3 className="QMS-group-name">{group.groupName.split(" ").slice(0, 4).join(" ")}</h3>

                <p className="QMS-group-shortdesc">{group.shortDesc}</p>

                {/* bottom pill visible in default state */}
                <div className="QMS-default-cta">
                  <div className="QMS-cta-pill">
                    <div className="QMS-cta-circle">
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

                    <div className="QMS-cta-line" aria-hidden />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= Strategic Advantages ================= */}
      <motion.section
        className="QMS-strategic-advantages container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h1 className="QMS-advantages-title">Delivering Client Value: Strategic Advantages</h1>
        <div className="QMS-advantages-title-line"></div>

        <div className="QMS-advantages-grid">
          {QMSADVANTAGES.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={i} className="QMS-advantages-card" variants={fadeInUp}>

              <div className="QMS-advantages-icon-wrap">
                <div className="QMS-advantages-icon">
                  <Icon size={32} />
                  <span className="QMS-icon-blink"></span>
                </div>
              </div>

              <h3 className="QMS-advantages-card-title">{title}</h3>

              {/* Line between heading and paragraph */}
              <div className="QMS-advantages-card-line"></div>

              <p className="QMS-advantages-card-desc">{desc}</p>

              <span className="QMS-shine"></span>
            </motion.div>
          ))}
        </div>
      </motion.section>

    </div>
  );
};

export default QMS;