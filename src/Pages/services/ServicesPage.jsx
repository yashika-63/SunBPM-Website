import React from "react";
import { motion } from "framer-motion";
import "../../CSS/Services/ServicesPage.css";
import stats from "../../data/statsData";
import serviceAreas from "../../data/serviceAreasData";
import insights from "../../data/insightsData";
import projects from "../../data/projectsData";

// ================== Variants ==================
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// ================== Component ==================
const ServicesPage = () => {
  return (
    <div className="sp-page">
      {/* Service SECTION */}
      <motion.section
        className="sp-service"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="sp-service-content" variants={fadeUp}>
          <div className="sp-service-label">Our Services</div>
          <div className="sp-service-heading">
            Comprehensive Digital Solutions Tailored to Your Business
          </div>
          <p className="sp-service-desc">
            SunBPM delivers end-to-end digitalization solutions tailored to your business needs. From workflow 
            automation and compliance management to analytics and integrations, we help organizations streamline 
            operations, enhance collaboration, and achieve measurable business results.</p>
        </motion.div>
        <motion.div className="sp-service-img" variants={fadeUp}>
          <img src="/images/services/office.jpg" alt="Meeting room" />
        </motion.div>
      </motion.section>

      {/* About SECTION */}
      <motion.section
        className="sp-about"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 className="sp-about-title" variants={fadeUp}>
          Empowering Your Business Through Technology
        </motion.h2>
        <motion.p className="sp-about-desc" variants={fadeUp}>
          SunBPM enables organizations to design, automate, and optimize processes with its low-code platform, delivering flexible, scalable, and user-friendly solutions that drive efficiency, reduce costs, and accelerate growth.
        </motion.p>
      </motion.section>

      {/* Stats SECTION */}
      <motion.section
        className="sp-stats"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="sp-stats-wrapper">
          {stats.map((stat) => (
            <motion.div className="sp-stat-block" key={stat.label} variants={fadeUp}>
              <div className="sp-stat-value">{stat.value}</div>
              <div className="sp-stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Service Area */}
      <motion.section
        className="sp-service-area"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="sp-service-left" variants={fadeUp}>
          <h3>Our Expertise Areas</h3>
          <p>
            We specialize in web and mobile apps, SEO optimization, mobile platforms, and immersive AR/VR experiences. Our solutions blend innovation with practical functionality.
          </p>
        </motion.div>
        <motion.div className="sp-service-right" variants={fadeUp}>
          <div className="sp-service-card">
            {serviceAreas.map((service, idx) => (
              <motion.div className="sp-service-item" key={idx} variants={fadeUp}>
                {service.icon}
                <span className="sp-service-name">{service.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* Insights */}
      <section className="sp-insights">
        <h2 className="sp-insights-title">Explore Insights</h2>
        <div className="sp-insights-list">
          {insights.map((insight, idx) => (
            <div className="sp-insight-card" key={idx}>
              <img src={insight.image} alt={"Insight visual " + (idx + 1)} />
              <div className="sp-insight-info">
                <ul>
                  {insight.desc.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Projects */}
      <motion.section
        className="sp-projects"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 className="sp-projects-title" variants={fadeUp}>
          Our Latest Projects
        </motion.h2>
        <div className="sp-projects-list">
          {projects.map((proj, idx) => (
            <motion.div className="sp-project-card" key={idx} variants={fadeUp}>
              <img src={proj.image} alt={`Project ${idx + 1}`} />
              {proj.heading && <div className="sp-csr-heading">{proj.heading}</div>}
              <div className="sp-project-info">
                <ul>
                  {proj.desc.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default ServicesPage;