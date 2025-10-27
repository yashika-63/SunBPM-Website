import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

import "../../CSS/Home/Hero.css";

const Hero = () => {
  const features = [
    "Efficiency and Control",
    "Effectiveness and Responsiveness",
    "Business Performance",
    "Quick Configuration",
  ];

  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>

      <div className="hero-container">
        <div className="hero-grid">
          {/* ===== Left Column ===== */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-left"
          >
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              Trusted by 50+ Enterprise Clients
            </div>

            <h1 className="hero-title">
              Transform Your Business Processes with SunBPM
            </h1>

            <p className="hero-description">
              The comprehensive low-code platform that empowers enterprises to
              digitize, automate, and optimize workflows across all departments.
            </p>

            <div className="hero-buttons">
              <Link to="/BookDemo" className="home-btn-primary">
                Book a Demo
                <ArrowRight className="icon" />
              </Link>
            </div>

            <div className="hero-features">
              {features.map((feature, i) => (
                <div key={i} className="feature-item">
                  <CheckCircle className="hero-feature-icon" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ===== Right Column ===== */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hero-right"
          >
            <div className="hero-card">
              <img
                src="/images/Home/costEfficiency.jpg"
                alt="SunBPM Logo"
                className="hero-img"
              />
            </div>

            {/* Floating Elements */}
            {/* <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="floating-element top-right"
            >
              <div className="floating-circle orange">✓</div>
            </motion.div>

            <motion.div
              animate={{ y: [8, -8, 8] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="floating-element bottom-left"
            >
              <div className="floating-circle dark-orange">⚡</div>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;