import { toast, ToastContainer } from "react-toastify";
import React, { useState, useEffect } from "react";
import "../../CSS/Contact us/ContactUs.css";
import { CalendarCheck2, PhoneCall, Mail, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import MyMap from "./MyMap";
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
      {/* ===== 1) LET’S START A CONVERSATION + WORLD MAP ===== */}
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
                navigate("/Contact");
              }}
            >
              Let us Talk
            </button>
          </div>
        </div>
      </motion.section>

      {/* ===== 2) LET’S CONNECT + FORM ===== */}
      <ContactForm />

      <WorldMap />
      {/* ===== 3) MORE WAYS TO REACH OUT ===== */}
      {/* <motion.section
        className="cu-ways"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="cu-container">
          <h3 className="cu-ways-title">More Ways to Reach Out</h3>

          <div className="cu-ways-grid">
            <motion.div className="cu-way" variants={fadeUp}>
              <div className="cu-way-icon"><Mail size={22} /></div>
              <div className="cu-way-title">Drop Us an Email</div>
              <div className="cu-way-link"
                onClick={() => window.location.href = "mailto:sales@sunbpm.com"}>
                sales@sunbpm.com
              </div>

            </motion.div>

            <motion.div className="cu-way" variants={fadeUp}>
              <div className="cu-way-icon"><PhoneCall size={22} /></div>
              <div className="cu-way-title">Call us now</div>
              <div className="cu-way-small">
                <a href="tel:+918850941503">(+91) 8850941503</a><br />
                <a href="tel:+918591061753">(+91) 8591061753</a><br />
              </div>
            </motion.div>

            <motion.div className="cu-way" variants={fadeUp}>
              <div className="cu-way-icon"><CalendarCheck2 size={22} /></div>
              <div className="cu-way-title">Book a meeting</div>
              <Link to="/BookDemo" className="cu-btn-bookdemo">
                Book now
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section> */}


      {/* ===== 4) OUR LOCATION ===== */}
      {/* <motion.section
        className="cu-location"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="cu-container cu-location-grid">
          <motion.div className="cu-location-text" variants={fadeUp}>
            <h3 className="cu-location-title">Our Location</h3>
            <div className="cu-location-label">Head Office</div>
            <p>
              5th Floor, Omega House, Hiranandani Gardens, Powai, Mumbai,
              Maharashtra 400076
            </p>
          </motion.div>
          <motion.div className="cu-location-map" variants={fadeUp}>
            <img src="/images/ContactUs/maharashtra-outline.png" alt="Powai on Maharashtra map" />
          </motion.div>
        </div>
      </motion.section> */}


      {/* ===== 5) FAQ ===== */}
      {/* <ContactFAQ /> */}

    </main>
  );
};

export default ContactPage;