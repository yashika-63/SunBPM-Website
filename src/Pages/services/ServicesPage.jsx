
import React, { useEffect, useRef, useState } from "react";
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

// AnimatedNumber Component
const AnimatedNumber = ({ value, animate }) => {
  const suffix = value.replace(/[0-9.]/g, ""); // Extract '+', 'M', etc.
  const numericValue = parseFloat(value);
  const [displayValue, setDisplayValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once animation starts
        }
      },
      { threshold: 0.5 } // Trigger when 50% of element is visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || isNaN(numericValue) || !animate) return;

    let start = 0;
    const duration = 2500; //2.5 seconds
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const increment = numericValue / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        setDisplayValue(numericValue);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible, value, animate]);

  return (
    <span ref={ref}>
      {isNaN(numericValue)
        ? value
        : `${displayValue.toLocaleString()}${suffix}`}
    </span>
  );
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
            SunBPM specializes in delivering workflow automation, application development, process
            consulting, and integration services. Whether you’re optimizing internal workflows or scaling
            enterprise systems, we offer secure, scalable, and data-driven solutions that deliver
            long-term value.</p>
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
          Technology should empower people, not complicate their work. SunBPM helps your teams work
          smarter with intuitive tools that simplify complexity and turn everyday tasks into seamless
          digital experiences.
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
        <div className="sp-stats-header">
          <h2 className="sp-stats-title">Our Impact in Numbers</h2>
        </div>
        <div className="sp-stats-wrapper">
          {stats.map((stats) => (
            <motion.div
              className="sp-stat-block"
              key={stats.label}
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
            >
              <div className="sp-stat-value">
                <AnimatedNumber value={stats.value} animate={true} />
              </div>
              <div className="sp-stat-label">{stats.label}</div>
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
            We specialize in Web Applications, Data Analytics and Mobile Applications. Our solutions combine innovation with practical functionality to drive business growth.
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
        <h2 className="sp-insights-title">SunBPM FrameWork Functionality </h2>
        <div className="sp-insights-list">
          {insights.map((insight, idx) => (
            <div className="sp-insight-card" key={idx}>
              <img src={insight.image} alt={"Insight visual " + (idx + 1)} />
              <h3 className="sp-insight-heading">{insight.title}</h3>
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

      {/* <section className="sp-insights">
        <h2 className="sp-insights-title">Explore Insights</h2>
        <div className="sp-insights-list">
          {insights.map((insight, idx) => (
            <div className="sp-insight-card" key={idx}>
              <img src={insight.image} alt={"Insight visual " + (idx + 1)} />
              <h3 className="sp-insight-heading">{insight.title}</h3>
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
      </section> */}


      {/* Projects */}
      <motion.section
        className="sp-projects"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.h2 className="sp-projects-title" variants={fadeUp}>
          Our Latest Projects
        </motion.h2>
        <div className="sp-projects-list">
          {projects.map((proj, idx) => (
            <motion.div className="sp-project-card" key={idx} variants={fadeUp}>
              <img src={proj.image} alt={`Project ${idx + 1}`} />

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