import React from "react";
import { motion } from "framer-motion";
import "../../../CSS/Products/POPR/POPR.css";
import POPRCAPABILITIES from "../../../data/Products/POPRCapabilities";
import POPRMODULES from "../../../data/Products/POPRModules";
import POPROUTCOMES from "../../../data/Products/POPROutcomes";

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
                        Comprehensive Low-Code Platform for purchase requisition (PR) and purchase order (PO)
                    </h1>
                    <p>
                        Our Enterprise PO/PR Solution empowers organizations to achieve sustainability goals through a
                        holistic System approach.
                    </p>
                </div>
            </motion.section>

            {/* ================= What is POPR ================= */}
            <motion.section
                className="POPR-intro containers"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <h2>What is POPR ?</h2>
                <p>
                    <span className="highlight">SunBPM PO/PR</span>{" "}
                    is a unified solution that streamlines the entire purchase requisition (PR) 
                    and purchase order (PO) lifecycle. From requisition initiation to approvals, vendor 
                    coordination, and reporting, the platform ensures accuracy, transparency, and 
                    efficiency in procurement processes.
                </p>
            </motion.section>

            {/* ================= Positive Outcomes ================= */}
            <motion.section
                className="POPR-outcomes containers"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <h2>Positive Outcomes of POPR</h2>

                <div className="POPR-cards">
                    {POPROUTCOMES.map(({ icon: Icon, title, points }, i) => (
                        <motion.div key={i} className="POPR-card" variants={fadeInUp}>
                            <div className="POPR-icon-container">
                                <Icon className="POPR-feature-icon" />
                            </div>
                            <h3>{title}</h3>
                            <ul>
                                {points.map((p, idx) => (
                                    <li key={idx}>
                                        <span className="POPR-benefit-dot"></span>
                                        <span>{p}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* ================= How POPR Works ================= */}
            <motion.section
                className="POPR-how containers"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.div className="POPR-how-left" variants={fadeInLeft}>
                    <img src="/images/products/POPR/POPR-work.png" alt="How POPR works" />
                </motion.div>
                <motion.div className="POPR-how-right" variants={fadeInRight}>
                    <h2>How POPR works</h2>
                    <p>
                        See how SunBPM POPR works from innovation in technology to
                        impactful action.
                    </p>
                    <button
                        className="btn-learn"
                        onClick={() =>
                            document.getElementById("POPR-modules")?.scrollIntoView({ behavior: "smooth" })
                        }
                    >
                        Learn More
                    </button>
                </motion.div>
            </motion.section>

            {/* ================= Redefining POPR ================= */}
            <motion.section
                className="POPR-redef containers"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.div className="POPR-redef-left" variants={fadeInLeft}>
                    <h2>
                        Redefining <span className="highlight">POPR</span> with Smart,
                        Scalable Solutions
                    </h2>
                    <p>
                        With SunBPM PO/PR, businesses can automate procurement cycles, minimize delays, 
                        and gain end-to-end control over purchase activities. The platform ensures 
                        seamless collaboration across departments while aligning procurement practices 
                        with organizational goals.
                    </p>
                </motion.div>
                <motion.div className="POPR-redef-left" variants={fadeInRight}>
                    <img
                        src="/images/products/POPR/POPR-Side Frame.png"
                        alt="POPR Infographic"
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

            {/* ================= Core Capabilities ================= */}
            <motion.section
                className="POPR-capabilities containers"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <h2 className="POPR-section-title">
                    Core <span className="highlight">POPR</span> Capabilities :
                </h2>

                <div className="POPR-cap-grid">
                    {POPRCAPABILITIES.map(({ icon: Icon, title, desc }, i) => (
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
                        SunBPM PO/PR — Automating procurement for faster approvals, smarter decisions, and complete transparency.
                    </p>
                </div>
            </motion.section>
        </div>
    );
};

export default POPR;