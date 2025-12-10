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

      <FeatureCard />

      {/* Stats */}
      <section className="trusted-section">
        <div className="trusted-container">
          {/* Left Section */}
          <motion.div
            className="trusted-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="trusted-heading">Trusted by Industry Leaders</h2>
            <p className="trusted-desc">
              Empowering enterprises to streamline operations and achieve excellence.
            </p>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            className="trusted-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* New accent line */}
            <div className="trusted-line"></div>



            <div className="stats-wrapper">
              {industryStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-item"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="stat-value">
                    <CountUp
                      start={0}
                      end={parseInt(stat.value)}
                      duration={2}
                      enableScrollSpy={true}   
                      scrollSpyDelay={100}
                    />
                    +
                  </h3>

                  <p className="stat-label">{stat.label}</p>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </section>

      {/* <ClientReviews /> */}

    </div>
  );
};

export default Sunbpmhome;