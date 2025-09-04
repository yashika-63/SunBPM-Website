import React from 'react';
import { motion } from 'framer-motion';
import '../../CSS/Home/FeatureCard.css';

const FeatureCard = ({ icon: Icon, title, description, benefits, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="feature-card"
    >
      <div className="icon-container">
        <Icon className="feature-icon" />
      </div>

      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>

      <ul className="feature-benefits">
        {benefits.map((benefit, idx) => (
          <li key={idx} className="feature-benefit-item">
            <div className="benefit-dot" />
            <span className="benefit-text">{benefit}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default FeatureCard;