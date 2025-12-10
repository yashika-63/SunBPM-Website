import { toast, ToastContainer } from "react-toastify";
import React, { useState, useEffect } from "react";
import "../../CSS/Contact us/ContactUs.css";
import { CalendarCheck2, PhoneCall, Mail, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import MyMap from "./MyMap";
import ContactForm from "./ContactForm";
import ContactFAQ from "./ContactFAQ";
import WorldMap from "./WorldMap";


const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ContactPage = () => {

  return (
    <main className="cu-page">
      {/* ===== hero section ===== */}
      <motion.section
        className="cu-hero"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="cu-hero-overlay">
          <h1>
            Are you looking for a trusted supplier for IT <br />services?
          </h1>
          <div className="hero-button">
            <button
              className="btn-learn"
              onClick={() => {
                const heading = document.getElementById("contact-start");
                if (heading) {
                  const top = heading.getBoundingClientRect().top + window.pageYOffset;
                  window.scrollTo({
                    top: top - 70, // <-- 20px above the heading
                    behavior: "smooth",
                  });
                }
              }}
            >
              Let us Talk
            </button>


          </div>
        </div>
      </motion.section>

      {/* ===== 2) LET’S CONNECT + FORM ===== */}
      <ContactForm />

      {/* ===== PRISTINE REDIRECT SECTION ===== */}
      <motion.section
        className="pristine-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="pristine-wrapper">
          <motion.div
            className="pristine-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* <div className="pristine-animated-border"></div> */}

            <h2 className="pristine-title">Visit Our Partner Organization – Pristine IT Code</h2>

            <p className="pristine-desc">
              Pristine IT Code is the partner organization of SunBPM, enabling digital transformation
              for enterprises through innovative technology, scalable platforms, and end-to-end IT
              solutions. Explore how Pristine helps businesses modernize operations, enhance process
              efficiency, and accelerate their digital journey.
            </p>


            <motion.a
              href="https://pristine-code.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="pristine-btn"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
            >
              Visit Pristine →
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      <WorldMap />

      {/* ===== 5) FAQ ===== */}
      {/* <ContactFAQ /> */}


    </main>
  );
};

export default ContactPage;