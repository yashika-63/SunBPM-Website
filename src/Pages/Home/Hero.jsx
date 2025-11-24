import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../../CSS/Home/Hero.css";

export default function HeroSection() {
  const slides = [
    {
      img: "hero 1.jpg",
      title: "SunBPM Corporate Social Responsibility",
      link: "/Products/CSR",
    },
    {
      img: "hero 2.jpg",
      title: "SunBPM Environmental, Social, and Governance",
      link: "/Products/ESG",
    },
    {
      img: "hero 3.jpg",
      title: "SunBPM Environment, Health, and Safety",
      link: "/Products/EHS",
    },
    {
      img: "hero 4.jpg",
      title: "SunBPM Project Management System",
      link: "/Products/QMS",
    },
    {
      img: "hero 5.jpg",
      title: "SunBPM Purchase Requisition & Purchase Order",
      link: "/Products/PRPO",
    },
    {
      img: "hero 1.jpg",
      title: "SunBPM Procurement Decision Tool",
      link: "/Products/CapexOpex",
    },
  ];

  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  // Auto-slideshow every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Typewriter animation
  useEffect(() => {
    let i = 0;
    const currentTitle = slides[index].title;
    let isMounted = true;

    setDisplayText(""); // reset text

    function typeLetter() {
      if (!isMounted) return;

      if (i < currentTitle.length) {
        setDisplayText(currentTitle.slice(0, i + 1)); // SAFE + NO MISSING LETTERS
        i++;
        setTimeout(typeLetter, 50); // smooth typing
      }
    }

    typeLetter();

    return () => {
      isMounted = false; // stop when component changes slide
    };
  }, [index]);



  return (
    <section className="hero-container">

      {/* Background slideshow */}
      <div
        className="slideshow-dynamic"
        style={{
          backgroundImage: `url("/images/Home/Hero/${slides[index].img}")`,
        }}
      ></div>

      <div className="overlay"></div>

      {/* Content */}
      <div className="hero-content">

        {/* Left-to-Right Typing Heading */}
        <motion.h1
          key={index}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-heading typewriter"
        >
          {displayText}
        </motion.h1>

        {/* Dynamic button */}
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          href={slides[index].link}
          className="hero-btn"
        >
          Read More
        </motion.a>
      </div>
    </section>
  );
}
