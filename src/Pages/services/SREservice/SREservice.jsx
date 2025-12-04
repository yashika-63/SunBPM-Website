
import React, { useState } from "react";
import { FaTimes,} from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SREcoreServices from "../../../data/Services/SREcoreServices";
import SREbenefits from "../../../data/Services/SREbenefits";
import "../../../CSS/Services/SREservice/SREservice.css";


// ---------- Animation Variants ----------
const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};


export default function SREService() {
    const [activeService, setActiveService] = useState(null);
    const navigate = useNavigate();
    const scrollPositionRef = React.useRef(0);

    React.useEffect(() => {
        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, []);


    React.useEffect(() => {
        if (activeService) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [activeService]);


    const formattedServices = SREcoreServices.map(service => {
        const lines = service.desc.split("\n").map(l => l.trim()).filter(l => l);
        const intro = lines[0]; // first paragraph
        const points = [];
        let currentTitle = null;
        let currentContent = [];

        for (let i = 1; i < lines.length; i++) {
            const line = lines[i];
            // If line ends with ":" → it's a heading
            if (/^.+:$/.test(line)) {
                // push previous stored block
                if (currentTitle) {
                    points.push({ title: currentTitle, text: currentContent.join(" ") });
                }
                currentTitle = line.replace(":", "");
                currentContent = [];
            } else {
                currentContent.push(line);
            }
        }

        // push last block
        if (currentTitle) {
            points.push({ title: currentTitle, text: currentContent.join(" ") });
        }
        return { ...service, intro, points };
    });


    return (

        <div className="SRE-wrapper">
            {/* HERO */}
            <motion.section
                className="SRE-hero"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <div className="SRE-hero-overlay">
                    <h1>
                        Empowering Enterprise Transformation <br />with Intelligent SRE Solutions
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

            {/* ========================= SRE CORE SERVICES ========================== */}
            <section className="SRE-core">
                <h2 className="SRE-core-title">SRE Core Services</h2>

                <div className="SRE-core-grid">
                    {formattedServices.map((service, index) => (
                        <div
                            key={index}
                            className="SRE-pro-card"
                            onClick={() => {
                                setActiveService(service);
                                scrollPositionRef.current = window.scrollY;
                                document.body.style.position = "fixed";
                                document.body.style.top = `-${scrollPositionRef.current}px`;
                                document.body.style.left = 0;
                                document.body.style.right = 0;
                            }}
                        >
                            <div className="SRE-pro-icon">{service.icon}</div>
                            <h3>{service.title}</h3>

                            <div className="view-detail">
                                View Details <span>→</span>
                            </div>

                            {/* Rising Background Layer */}
                            <div className="rise-bg"></div>
                        </div>
                    ))}
                </div>

                {activeService && (
                    <div className="SRE-modal-bg" onClick={() => {
                        setActiveService(null);
                        document.body.style.overflow = "auto";
                    }}
                    >
                        <div className="SRE-modal" onClick={(e) => e.stopPropagation()}>

                            {/* Header Bar */}
                            <div className="modal-header">
                                <div className="modal-header-left">
                                    <div className="modal-icon">{activeService.icon}</div>
                                    <h2>{activeService.title}</h2>
                                </div>

                                <button className="modal-close" onClick={() => {
                                    setActiveService(null);
                                    document.body.style.position = "";
                                    document.body.style.top = "";
                                    document.body.style.left = "";
                                    document.body.style.right = "";
                                    window.scrollTo(0, scrollPositionRef.current);
                                }}
                                >
                                    <FaTimes />
                                </button>
                            </div>

                            {/* Scrollable Body */}
                            <div className="modal-body">

                                {/* Intro paragraph */}
                                <p className="SRE-intro-text">{activeService.intro}</p>

                                {/* Bullet points */}
                                {activeService.points.map((p, i) => (
                                    <div key={i} className="modal-section">
                                        <div className="modal-subtitle">▹ {p.title}</div>
                                        <p className="modal-subtext">{p.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </section>


            {/* =====================BENEFITS (SRE-flip Cards)======================= */}
            <section className="SRE-benefits">
                <h2 className="SRE-benefits-title">
                    Some Benefits of Implementing SRE in Your Business
                </h2>

                <div className="SRE-flip-grid">
                    {SREbenefits.map((benefit, i) => (
                        <div key={i} className="SRE-flip-card">
                            <div className="SRE-flip-inner">

                                {/* FRONT */}
                                <div className="SRE-flip-front">
                                    <div className="front-icon">
                                        {benefit.icon}
                                    </div>
                                    <h3>{benefit.title}</h3>
                                </div>

                                {/* BACK */}
                                <div className="SRE-flip-back">
                                    <h3>{benefit.title}</h3>
                                    <div className="benefit-divider"></div>
                                    <p>{benefit.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}