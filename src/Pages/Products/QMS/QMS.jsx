import React from "react";
import { motion } from "framer-motion";
import "../../../CSS/Products/QMS/QMS.css";
import QMSCAPABILITIES from "../../../data/Products/QMSCapabilities";
import QMSMODULES from "../../../data/Products/QMSModules";
import QMSOUTCOMES from "../../../data/Products/QMSOutcomes";

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
                        Comprehensive Low-Code Platform for Quality Management System
                    </h1>
                    <p>
                        Our Enterprise QMS Solution empowers organizations to achieve sustainability goals through a
                        holistic Quality Management System approach.
                    </p>
                </div>
            </motion.section>

            {/* ================= What is QMS ================= */}
            <motion.section
                className="QMS-intro containers"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <h2>What is QMS ?</h2>
                <p>
                    <span className="highlight">SunBPM Quality Management System (QMS)</span>{" "}
                    is a comprehensive low-code platform designed to ensure quality, compliance, and efficiency
                    across projects. It centralizes processes like project planning, task tracking, defect
                    management, and reporting enabling organizations to deliver consistent, high-quality outcomes.
                </p>
            </motion.section>

            {/* ================= Positive Outcomes ================= */}
            <motion.section
                className="QMS-outcomes containers"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <h2>Positive Outcomes of QMS</h2>

                <div className="QMS-cards">
                    {QMSOUTCOMES.map(({ icon: Icon, title, points }, i) => (
                        <motion.div key={i} className="QMS-card" variants={fadeInUp}>
                            <div className="QMS-icon-container">
                                <Icon className="QMS-feature-icon" />
                            </div>
                            <h3>{title}</h3>
                            <ul>
                                {points.map((p, idx) => (
                                    <li key={idx}>
                                        <span className="QMS-benefit-dot"></span>
                                        <span>{p}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* ================= How QMS Works ================= */}
            <motion.section
                className="QMS-how containers"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.div className="QMS-how-left" variants={fadeInLeft}>
                    <img src="/images/products/QMS/QMS-work.png" alt="How QMS works" />
                </motion.div>
                <motion.div className="QMS-how-right" variants={fadeInRight}>
                    <h2>How QMS works</h2>
                    <p>
                        See how SunBPM QMS works from innovation in technology to
                        impactful action.
                    </p>
                    <button
                        className="btn-learn"
                        onClick={() =>
                            document.getElementById("QMS-modules")?.scrollIntoView({ behavior: "smooth" })
                        }
                    >
                        Learn More
                    </button>
                </motion.div>
            </motion.section>

            {/* ================= Redefining QMS ================= */}
            <motion.section
                className="QMS-redef containers"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.div className="QMS-redef-left" variants={fadeInLeft}>
                    <h2>
                        Redefining <span className="highlight">QMS</span> with Smart,
                        Scalable Solutions
                    </h2>
                    <p>
                        With SunBPM QMS, organizations can automate quality processes, reduce risks, 
                        and maintain compliance while scaling operations. It empowers teams to align 
                        strategy with execution, ensuring both agility and accountability in every project.
                    </p>
                </motion.div>
                <motion.div className="QMS-redef-left" variants={fadeInRight}>
                    <img
                        src="/images/products/QMS/QMS-Side Frame.png"
                        alt="QMS Infographic"
                        className="QMS-redef-img"
                    />
                </motion.div>
            </motion.section>

            {/* ================= Core Modules ================= */}
            <motion.section
                id="QMS-modules"
                className="QMS-modules containers"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <h2 className="QMS-section-title">SunBPM QMS Core Modules</h2>

                <div className="QMS-modules-grid">
                    {QMSMODULES.map(({ icon: Icon, title, points }, idx) => (
                        <motion.div key={idx} className="QMS-module-card" variants={fadeInUp}>
                            <div className="QMS-module-icon">
                                <Icon size={32} />
                            </div>
                            <h4>{title}</h4>
                            <ul>
                                {points.map((p, i) => (
                                    <li key={i}>
                                        <span className="QMS-benefit-dot"></span>
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
                className="QMS-capabilities containers"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <h2 className="QMS-section-title">
                    Core <span className="highlight">QMS</span> Capabilities :
                </h2>

                <div className="QMS-cap-grid">
                    {QMSCAPABILITIES.map(({ icon: Icon, title, desc }, i) => (
                        <motion.div key={i} className="QMS-cap-card" variants={fadeInUp}>
                            <div className="QMS-cap-icon">
                                <Icon size={26} />
                            </div>
                            <div className="QMS-cap-heading">{title}</div>
                            <div className="QMS-cap-desc">{desc}</div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* ================= CTA ================= */}
            <motion.section
                className="QMS-cta"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <div className="QMS-cta-inner-container">
                    <p className="QMS-cta-text">
                        SunBPM QMS — Powering excellence with smart quality control and real-time project insights.
                    </p>
                </div>
            </motion.section>
        </div>
    );
};

export default QMS;