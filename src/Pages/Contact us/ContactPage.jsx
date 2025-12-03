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

      <WorldMap />

      {/* ===== 5) FAQ ===== */}
      {/* <ContactFAQ /> */}

    </main>
  );
};

export default ContactPage;