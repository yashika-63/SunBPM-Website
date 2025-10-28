import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";  // ✅ Import here
import "../../CSS/success_stories/SuccessStories.css";
import highlights from "../../data/SucessStories/highlightsData";
import clientCards from "../../data/SucessStories/clientCardsData";
import projects from "../../data/SucessStories/projectsData";

const animationProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: "easeOut" },
};

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

const SuccessStoriesPage = () => {
  const navigate = useNavigate();  // Hook must be inside component

  const handleCardClick = (id) => {
    navigate(`/SuccessStories/${id}`); // go to detail page
  };

  return (
    <div className="success-page">
      {/* Hero Section */}
      {/* <section className="success-hero">
        <div className="success-hero-left">
          <div className="success-hero-title">
            <span className="success-highlight"></span>{" "}
            <span>Success Stories from Our Clients</span>
          </div>
          <div className="success-hero-desc">
            Organizations across industries rely on SunBPM to simplify processes,
            cut costs, and drive business growth.
          </div>
        </div>
        <div className="success-hero-img">
          <img
            src="/images/success_stories/handshake.jpg"
            alt="Business handshake"
          />
        </div>
      </section> */}
      <motion.section
        className="success-grand"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="success-grand-content" variants={fadeUp}>
          <div className="success-grand-label">Success Stories from Our Clients</div>
          <div className="success-grand-heading">
            Comprehensive Digital Solutions Tailored to Your Business
          </div>
          <p className="success-grand-desc">
            Organizations across industries rely on SunBPM to simplify processes, cut costs, and drive business growth.
          </p>
        </motion.div>
        <motion.div className="success-grand-img" variants={fadeUp}>
          <img src="/images/success_stories/handshake.jpg" alt="Business handshake" />
        </motion.div>
      </motion.section>

      {/* Highlight Stories (Alternating Image/Text) */}
      <section className="stories-columns">
        {highlights.map((story, idx) => (
          <div
            className={`story-row ${story.align === "right" ? "reverse" : ""}`}
            key={idx}
          >
            <div className="story-image">
              <img src={story.image} alt={story.title} />
            </div>
            <motion.div className="story-detail" {...animationProps}>
              <div className="story-detail-title">{story.title}</div>
              {story.desc.map((paragraph, pidx) => (
                <p className="story-detail-desc" key={pidx}>
                  {paragraph}
                </p>
              ))}
            </motion.div>
          </div>
        ))}
      </section>

      {/* Client Stories Grid */}
      <section className="clients-section">
        <h2>
          Business Success Across Diverse Industries with <span className="success-highlight">SunBPM</span>
        </h2>
        <div className="clients-grid">
          {clientCards.map((c, idx) => (
            <div
              className="client-story-card clickable"
              key={idx}
              onClick={() => handleCardClick(c.id)}
            >
              <img src={c.image} alt={c.title} />
              <div className="client-story-title">{c.title}</div>
              <div className="client-story-desc">{c.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      {/* <section className="projects-section">
        <h2>
          Our <span className="success-highlight">Successful Projects</span> used
          by the Clients
        </h2>
        <div className="projects-grid">
          {projects.map((proj, idx) => (
            <motion.div className="project-card" key={idx} {...animationProps}>
              <img src={proj.image} alt={proj.title} />
              <div className="project-title">{proj.title}</div>
              <div className="project-desc">{proj.desc}</div>
            </motion.div>
          ))}
        </div>
      </section> */}

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

export default SuccessStoriesPage;