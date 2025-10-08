import React from 'react';
import { motion } from 'framer-motion';
import Hero from './Hero';
import FeatureCard from './FeatureCard';
import ClientsSection from './ClientsSection';
import { CheckCircle } from 'lucide-react';
import '../../CSS/Home/Sunbpmhome.css';
import features from '../../data/featuresData';
import valueProps from "../../data/valuePropsData";
import industryStats from "../../data/industryStatsData";

const Sunbpmhome = () => {
  return (
    <div className="home">
      <Hero />
      {/* Value Proposition */}
      <section className="section white-background">
        <div className="container">
          <div className="text-center">
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="section-title">
              Why Leading Enterprises Choose SunBPM
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="section-subtitle">
              Accelerate innovation and efficiency with our all-in-one low-code platform.
            </motion.p>
          </div>
          <div className="value-grid">
            {valueProps.map((prop, index) => (
              <motion.div key={index} className="value-card">
                <div className="icon-container">
                  <prop.icon className="icon-white" />
                </div>
                <h3 className="value-title">{prop.title}</h3>
                <p className="value-description">{prop.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section gray-background">
        <div className="container">
          <div className="text-center section-header">
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="section-title">
              Powerful Features for Every Industry
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="section-subtitle">
              Everything you need to digitize and automate your workflows
            </motion.p>
          </div>
          <div className="feature-grid">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section orange-gradient">
        <div className="container">
          <div className="text-center section-header">
            <motion.h2 className="section-title white-text">
              Trusted by Industry Leaders
            </motion.h2>
            <motion.p className="section-subtitle light-text" >
              Join hundreds of enterprises that have transformed their operations
            </motion.p>
          </div>
          <div className="stats-grid">
            {industryStats.map((stat, index) => (
              <motion.div key={index} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section white-background">
        <div className="container grid-2">
          <motion.div className="benefits-content">
            <h2 style={{ textAlign: 'left', marginTop: '0px'  }} className="section-title">
              Transform Your Business Operations</h2>
            <p style={{ textAlign: 'left' , }} className="section-subtitle">
              SunBPM empowers organizations to streamline processes, reduce costs, and improve compliance while maintaining flexibility.
            </p>
            <div className="benefits-list">
              {[
                'Enhance efficiency, control, and visibility.',
                'Reduce costs while boosting performance.',
                'Ensure compliance with effective controls.',
                'Stay flexible with process-tailored solutions.',
              ].map((benefit, index) => (
                <div key={index} className="benefit-item">
                  <CheckCircle className="benefit-icon" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div className="image-wrapper">
            <div className="image-card">
              <img src="/images/Home/stakeholder.png" alt="Business Process Automation" className="image" />
              {/* <div className="cost-card">
                <div className="cost-value">10%</div>
                <div className="cost-label">Cost Reduction</div>
              </div> */}
            </div>
          </motion.div>
        </div>
      </section>

      <ClientsSection />
    </div>
  );
};

export default Sunbpmhome;