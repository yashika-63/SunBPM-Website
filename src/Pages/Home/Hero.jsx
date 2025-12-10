import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../../CSS/Home/Hero.css";

export default function Hero() {
  const slides = [
    {
      img: "https://javajar1234.s3.ap-south-1.amazonaws.com/SunBPM+website/products/CSR/csr-grand-image.png",
      title: "SunBPM Corporate Social Responsibility",
      link: "/Products/CSR",
    },
    {
      img: "https://javajar1234.s3.ap-south-1.amazonaws.com/SunBPM+website/products/ESG/ESG-grand-image.jpg",
      title: "SunBPM Environmental, Social, and Governance",
      link: "/Products/ESG",
    },
    {
      img: "https://javajar1234.s3.ap-south-1.amazonaws.com/SunBPM+website/products/EHS/EHS-grand-image.png",
      title: "SunBPM Environment, Health, and Safety",
      link: "/Products/EHS",
    },
    {
      img: "https://javajar1234.s3.ap-south-1.amazonaws.com/SunBPM+website/products/QMS/QMS-grand-image.jpg",
      title: "SunBPM Project Management System",
      link: "/Products/PMS",
    },
    {
      img: "https://javajar1234.s3.ap-south-1.amazonaws.com/SunBPM+website/products/PRPO/PRPO-grand-image.jpg",
      title: "SunBPM Purchase Requisition & Purchase Order",
      link: "/Products/PRPO",
    },
    {
      img: "https://javajar1234.s3.ap-south-1.amazonaws.com/SunBPM+website/products/CapexOpex/CapexOpex-grand-image.png",
      title: "SunBPM Procurement Decision Tool",
      link: "/Products/ProcurementDecisionTool",
    },
  ];

  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  // Auto-slideshow every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
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
        className={`slideshow-dynamic ${ index === 1 ? "right-crop" : ""
          }`}
        style={{
          backgroundImage: `url(${slides[index].img})`,
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
