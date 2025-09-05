// src/pages/AboutUs.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "../../CSS/About/AboutUs.css";

// Animation variants for the hero section
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

const AboutUs = () => {
  useEffect(() => {
    // Timeline animations with IntersectionObserver
    const cards = document.querySelectorAll(".timeline-card");
    if (cards.length) {
      const journeyObserver = new window.IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("show");
              journeyObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );
      cards.forEach((card) => journeyObserver.observe(card));
      return () => {
        cards.forEach((el) => journeyObserver.unobserve(el));
      };
    }
  }, []);

  // Timeline items
  const items = [
    { year: "2019", text: "SunBPM formed by sharing a single, simple, honest proposal." },
    { year: "2020", text: "First enterprise clients embraced the workflow standard." },
    { year: "2021", text: "Platform matures to enterprise build quality and security." },
    { year: "2022", text: "Our new solution (SaaS) expanded feature set." },
    { year: "2023", text: "100+ enterprise clients, C2 / SOC2 type 2 and ISO certified." },
    { year: "2024", text: "Next-gen C2 powered automation workflow launched." },
  ];


  return (
    <div className="about-us-page">
      {/* === HERO SECTION replaced by Aboutus section === */}
      <motion.section
        className="Aboutus"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="Aboutus-content" variants={fadeUp}>
          {/* <div className="Aboutus-label">About Us</div> */}
          <div className="Aboutus-heading">
            Empowering Businesses with Innovation & Technology
          </div>
          <p className="Aboutus-desc">
            At SunBPM, we empower organizations to transform operations with innovation and technology. Our low-code platform enables quick process design, automation, and optimization without complex coding. With built-in flexibility, scalability, and ease of use, SunBPM helps businesses cut costs, boost efficiency, and drive sustainable growth. </p>
        </motion.div>
        <motion.div className="Aboutus-img" variants={fadeUp}>
          <img src="/images/About/Grand-image.png" alt="About SunBPM Team" />
        </motion.div>
      </motion.section>

 {/* Vision & Mission Section */}
      <section className="vision-mission-section container">
        <div className="diagram-container">
          <img src="/images/About/lifecycle.png" alt="Cycle Diagram: Observe, Orient, Decide, Act" />
        </div>
        <div className="text-container">
          <div className="vision-block">
            <h3>Our Vision</h3>
            <p>
              To emerge as the foremost low-code platform that empowers organizations to innovate, embrace 
              digital transformation, and achieve sustainable operational excellence.
            </p>
          </div>
          <div className="mission-block">
            <h3>Our Mission</h3>
            <p>
              To provide scalable, flexible, and intuitive solutions that streamline processes, optimize costs, 
              and accelerate business growth while driving long-term value creation.
            </p>
          </div>
        </div>
      </section>
      
      {/* Intro Section */}
      <section className="intro-section">
        <div className="intro-container">
          <div className="intro-text">
            <h2>What SunBPM Offers.</h2>
            <p>
              SunBPM provides a powerful low-code platform that helps organizations digitalize and 
              automate business processes with speed and precision. From workflow automation and 
              real-time analytics to seamless integrations and enterprise-grade security, SunBPM 
              delivers everything you need to streamline operations, improve compliance, and drive 
              business growth. With its mobile-first design and user-friendly interface, it ensures 
              flexibility, scalability, and ease of adoption across industries and business sizes.
            </p>
            {/* <button className="contact-btn">Contact us</button> */}
          </div>
          <div className="intro-image">
            <img
              src="/images/About/Company meet.png"
              alt="Team meeting in conference room"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Journey Section */}
      {/* <section className="journey"> 
        <div className="journey-head">
          <h2>Our Journey</h2>
          <p>From quodsi persecuti to BUILDNPA - a history of continuous innovation</p>
        </div>
        <div className="timeline">
          <div className="timeline-line" />
          {items.map((it, i) => {
            const side = i % 2 === 0 ? "left" : "right";
            return (
              <div className={`timeline-row ${side}`} key={it.year}>
                <div className={`timeline-card ${side}`}>
                  <div className="year">{it.year}</div>
                  <div className="desc">{it.text}</div>
                </div>
                <span className="dot" />
              </div>
            );
          })}
        </div>
      </section> */}

      {/* Team Section */}
      <section className="team-section container">
        <h1>Our Core Team</h1>
        <div className="team-grid">
          <img src="/images/About/deepak sir card.png" alt="photo" />
          <img src="/images/About/sunil sir card.png" alt="photo" />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;