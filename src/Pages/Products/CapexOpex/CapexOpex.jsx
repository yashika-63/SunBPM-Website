import React from "react";
import { motion } from "framer-motion";
import "../../../CSS/Products/CapexOpex/CapexOpex.css";
import CapexOpexCAPABILITIES from "../../../data/Products/CapexOpexCapabilities";
import CapexOpexMODULES from "../../../data/Products/CapexOpexModules";
import CapexOpexOUTCOMES from "../../../data/Products/CapexOpexOutcomes";

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
                        Comprehensive Low-Code Platform for streamline capital (CAPEX) and operational (OPEX)
                    </h1>
                    <p>
                        Our Enterprise CapexOpex Solution empowers organizations to achieve sustainability 
                        goals through a holistic Quality Management System approach.
                    </p>
                </div>
            </motion.section>

            {/* ================= What is CapexOpex ================= */}
            <motion.section
                className="CapexOpex-intro containers"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <h2>What is CapexOpex ?</h2>
                <p>
                    <span className="highlight">SunBPM CAPEX/OPEX</span>{" "}
                    is a comprehensive solution designed to streamline capital (CAPEX) and operational (OPEX)
                    expenditure management. It ensures transparency, accuracy, and compliance across
                    budgeting, approvals, vendor management and reporting, helping organizations
                    optimize financial planning and execution.
                </p>
            </motion.section>

            {/* ================= Positive Outcomes ================= */}
            <motion.section
                className="CapexOpex-outcomes containers"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <h2>Positive Outcomes of CapexOpex</h2>

                <div className="CapexOpex-cards">
                    {CapexOpexOUTCOMES.map(({ icon: Icon, title, points }, i) => (
                        <motion.div key={i} className="CapexOpex-card" variants={fadeInUp}>
                            <div className="CapexOpex-icon-container">
                                <Icon className="CapexOpex-feature-icon" />
                            </div>
                            <h3>{title}</h3>
                            <ul>
                                {points.map((p, idx) => (
                                    <li key={idx}>
                                        <span className="CapexOpex-benefit-dot"></span>
                                        <span>{p}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* ================= How CapexOpex Works ================= */}
            <motion.section
                className="CapexOpex-how containers"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.div className="CapexOpex-how-left" variants={fadeInLeft}>
                    <img src="/images/products/CapexOpex/CapexOpex-work.png" alt="How CapexOpex works" />
                </motion.div>
                <motion.div className="CapexOpex-how-right" variants={fadeInRight}>
                    <h2>How CapexOpex works</h2>
                    <p>
                        See how SunBPM CapexOpex works from innovation in technology to
                        impactful action.
                    </p>
                    <button
                        className="btn-learn"
                        onClick={() =>
                            document.getElementById("CapexOpex-modules")?.scrollIntoView({ behavior: "smooth" })
                        }
                    >
                        Learn More
                    </button>
                </motion.div>
            </motion.section>

            {/* ================= Redefining CapexOpex ================= */}
            <motion.section
                className="CapexOpex-redef containers"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.div className="CapexOpex-redef-left" variants={fadeInLeft}>
                    <h2>
                        Redefining <span className="highlight">CapexOpex</span> with Smart,
                        Scalable Solutions
                    </h2>
                    <p>
                        SunBPM empowers organizations to manage capital and operational expenditures with
                        agility. From budget creation to vendor selection and reporting, the platform
                        ensures end-to-end governance, scalability, and faster decision-making.
                    </p>
                </motion.div>
                <motion.div className="CapexOpex-redef-left" variants={fadeInRight}>
                    <img
                        src="/images/products/CapexOpex/CapexOpex-Side Frame.png"
                        alt="CapexOpex Infographic"
                        className="CapexOpex-redef-img"
                    />
                </motion.div>
            </motion.section>

            {/* ================= Core Modules ================= */}
            <motion.section
                id="CapexOpex-modules"
                className="CapexOpex-modules containers"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <h2 className="CapexOpex-section-title">SunBPM CapexOpex Core Modules</h2>

                <div className="CapexOpex-modules-grid">
                    {CapexOpexMODULES.map(({ icon: Icon, title, points }, idx) => (
                        <motion.div key={idx} className="CapexOpex-module-card" variants={fadeInUp}>
                            <div className="CapexOpex-module-icon">
                                <Icon size={32} />
                            </div>
                            <h4>{title}</h4>
                            <ul>
                                {points.map((p, i) => (
                                    <li key={i}>
                                        <span className="CapexOpex-benefit-dot"></span>
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
                className="CapexOpex-capabilities containers"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <h2 className="CapexOpex-section-title">
                    Core <span className="highlight">CapexOpex</span> Capabilities :
                </h2>

                <div className="CapexOpex-cap-grid">
                    {CapexOpexCAPABILITIES.map(({ icon: Icon, title, desc }, i) => (
                        <motion.div key={i} className="CapexOpex-cap-card" variants={fadeInUp}>
                            <div className="CapexOpex-cap-icon">
                                <Icon size={26} />
                            </div>
                            <div className="CapexOpex-cap-heading">{title}</div>
                            <div className="CapexOpex-cap-desc">{desc}</div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* ================= CTA ================= */}
            <motion.section
                className="CapexOpex-cta"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <div className="CapexOpex-cta-inner-container">
                    <p className="CapexOpex-cta-text">
                        SunBPM CAPEX/OPEX — Transforming financial governance with transparency, efficiency, and smart automation.
                    </p>
                </div>
            </motion.section>
        </div>
    );
};

export default CapexOpex;