import React, { useState } from "react";
import { motion } from "framer-motion";
import "../../CSS/Home/FeatureCard.css";

const featuresData = [
  {
    title: "Low-Code Workflow Builder",
    offerings: [
      "Drag & Drop Capability",
      "Quick Deployment in Weeks",
      "Error-Free from Day One",
      "Easily Adaptable Workflows",
    ],

  },
  {
    title: "Enterprise Security",
    offerings: [
      "Flexible Licensing Options",
      "Role-Based Access Controls",
      "Complete Audit Trails",
      "Data Protection & Compliance",
    ],
  },
  {
    title: "Mobile-First Design",
    offerings: [
      "Unified Experience Across Devices",
      "Support for Field Operations",
      "Instant Mobile Access",
      "Work on the go",
    ],

  },
  {
    title: "Seamless Integrations",
    offerings: [
      "REST API Support",
      "Real-Time Synchronization",
      "Configurable Integrations",
    ],

  },
  {
    title: "Collaborative Workflows",
    offerings: [
      "Multi-User Functionality",
      "Automated Notifications",
      "Task Assignment & Tracking",
      "Comments and Remarks",
    ],

  },
  {
    title: "User-Friendly Experience",
    offerings: [
      "Highly Rated for Usability",
      "Easy Setup & Administration",
      "Smooth Upgradations",
      "Quick User Adoption",
    ],

  },
];

const FeaturesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFeature = featuresData[activeIndex];

  return (
    <section className="features-section">
      <h2 className="features-title">Powerful Features for Every Industry</h2>

      <div className="features-container">
        {featuresData.map((feature, index) => (
          <div className="feature-card" key={index}>
            {/* Top Image */}
            <div className="feature-image">
              <img
                src={`/images/Home/feature/feature${index + 1}.jpg`}
                alt={feature.title}
              />
            </div>

            {/* Blue Title Bar */}
            <div className="feature-overlay">
              <h3>{feature.title}</h3>
            </div>

            {/* Hover Content */}
            <div className="feature-hover">
              <h3>{feature.title}</h3>
              <ul>
                {feature.offerings.map((item, i) => (
                  <li key={i}>
                    <span className="page-bullet-dot"></span>
                    {item}
                  </li>
                ))}
              </ul>

            </div>
          </div>
        ))}
      </div>
    </section>
  );

};

export default FeaturesSection;
