import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import Hero from './Hero';
import FeatureCard from './FeatureCard';
// import ClientsSection from './ClientsSection';
// import { CheckCircle } from 'lucide-react';
// import features from '../../data/featuresData';
import valueProps from "../../data/valuePropsData";
import industryStats from "../../data/industryStatsData";
import '../../CSS/Home/Sunbpmhome.css';
import CountUp from "react-countup";
// import ClientReviews from './ClientReviews';

const AnimatedNumber = ({ value, animate }) => {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value);
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (!animate) return; // only start counting when animate is true
    let start = 0;
    const end = numericValue;
    const duration = 3000; // 3 seconds
    const stepTime = 20;
    const increment = (end - start) / (duration / stepTime);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, stepTime);

    return () => clearInterval(timer);
  }, [numericValue, animate]);

  return <span>{count}{suffix}</span>;
};

const Sunbpmhome = () => {
  const statsRef = useRef(null);
  const inView = useInView(statsRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0 });
  }, [inView, controls]);

  return (
    <div className="home">

      <Hero />

      <section className="value-section">
        <h2 className="value-title">Why Leading Enterprises Choose SunBPM</h2>
        <p className="value-desc"> SunBPM delivers what you need at a fraction of the cost in half the time.</p>
        <div className="value-container">
          {valueProps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div className="value-card" key={index}>
                <div
                  className="value-image"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>

                <div className="value-content">
                  <div className="value-icon">
                    <Icon size={36} />
                  </div>
                  <h3>{item.title}</h3>
                  <p className="value-description">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Stats */}
      <section className="trusted-section">
        <div className="trusted-container">

          {/* Header */}
          <motion.div
            className="trusted-header"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="trusted-heading">Trusted by Industry Leaders</h2>
            <p className="trusted-desc">
              Empowering enterprises to streamline operations and achieve excellence.
            </p>
          </motion.div>

          {/* Divider */}
          <div className="trusted-line"></div>

          {/* Stats */}
          <motion.div
            className="stats-wrapper"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {industryStats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-item"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="stat-value-number">
                  <CountUp
                    start={0}
                    end={Number(stat.value.replace(/\D/g, ""))}
                    duration={2}
                    enableScrollSpy
                  >
                    {({ countUpRef }) => <span ref={countUpRef}></span>}
                  </CountUp>
                  +
                </h3>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>


      <FeatureCard />

    </div>
  );
};

export default Sunbpmhome;