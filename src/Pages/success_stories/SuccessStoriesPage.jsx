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
            From manufacturing and pharmaceuticals to banking and technology, SunBPM is redefining how 
            industries work. By connecting people, processes, and performance, we help organizations make 
            faster decisions, enhance collaboration, and achieve meaningful growth with intelligent 
            automation.</p>
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

            <div className="story-detail">
              <h3 className="story-detail-title">{story.title}</h3>
              {story.desc.map((paragraph, pidx) => (
                <p className="story-detail-desc" key={pidx}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Client Stories Grid */}
      <section className="clients-section">
        <h2>
          Business Success Across Diverse Industries with{" "}
          <span className="success-highlight">SunBPM</span>
        </h2>
        <motion.div
          className="clients-grid"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {clientCards.map((c, idx) => (
            <motion.div
              className="client-story-card clickable"
              key={idx}
              onClick={() => handleCardClick(c.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}

            >
              <div className="client-story-image">
                <img src={c.image} alt={c.title} />
              </div>
              <div className="client-story-title">{c.title}</div>
              <div className="client-story-desc">{c.desc}</div>
              <button className="client-story-btn">Read More</button>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Projects Section */}
      <motion.section
        className="success-stories-projects"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.h2 className="success-stories-projects-title" variants={fadeUp}>
          Our Latest Projects
        </motion.h2>
        <motion.p className="success-stories-projects-subtitle" variants={fadeUp}>
        </motion.p>
        <div className="success-stories-projects-list">
          {projects.map((proj, idx) => (
            <motion.div
              className="success-stories-project-card"
              key={idx}
              variants={fadeUp}
            >
              <h3 className="success-stories-project-card-title">
                {proj.heading}
              </h3>

              <div className="success-stories-project-info">
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