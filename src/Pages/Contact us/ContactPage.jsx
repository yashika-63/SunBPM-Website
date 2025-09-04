import React, { useState } from "react";
import "../../CSS/Contact us/ContactUs.css";
import { CalendarCheck2, PhoneCall, Mail, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import MyMap from "./MyMap";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const ContactPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "What is SunBPM?", answer: "SunBPM is a business process management solution." },
    { question: "Do I need technical expertise to use SunBPM?", answer: "No, it is designed for ease of use." },
    { question: "Can SunBPM integrate with our existing systems?", answer: "Yes, SunBPM offers integration options." },
    { question: "Is my data secure with SunBPM?", answer: "Yes, data security is a top priority." },
    { question: "Do you offer a free trial or demo?", answer: "Yes, you can request a demo or trial." },
  ];

  return (
    <main className="cu-page">

      {/* ===== 1) LET'S COLLABORATE + WORLD MAP ===== */}
      <motion.section
        className="cu-grand"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="cu-grand-content" variants={fadeUp}>
          <div className="cu-grand-label">Lets Start the Conversation</div>
          {/* <div className="cu-grand-heading">
            Lets Start the Conversation</div> */}
          <p className="cu-grand-desc">
            SunBPM delivers end-to-end digitalization solutions tailored to your business needs. From workflow
            automation and compliance management to analytics and integrations, we help organizations streamline
            operations, enhance collaboration, and achieve measurable business results.</p>
        </motion.div>
        <motion.div className="cu-grand-img" variants={fadeUp}>
          <img src="/images/ContactUs/Doted-map.png" alt="Meeting room" />
        </motion.div>
      </motion.section>

      {/* ===== 2) LET’S START A CONVERSATION + FORM ===== */}
      <motion.section
        className="cu-start"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="cu-container cu-start-grid">

          {/* Left side map */}
          <motion.div className="cu-start-left" variants={fadeUp}>
            <MyMap />
          </motion.div>

          {/* Right side form */}
          <motion.div className="cu-start-right" variants={fadeUp}>
            <form className="cu-card">
              <div className="cu-card-head">
                <h3>Let’s connect</h3>
              </div>

              {/* Full Name + Email */}
              <div className="cu-row-2">
                <div className="cu-field">
                  <label>Full Name *</label>
                  <input type="text" placeholder="Enter Full Name" />
                </div>
                <div className="cu-field">
                  <label>Email *</label>
                  <input type="email" placeholder="Enter Email Address" />
                </div>
              </div>

              {/* Organization + Mobile */}
              <div className="cu-row-2">
                <div className="cu-field">
                  <label>Your Organization *</label>
                  <input type="text" placeholder="Enter Organization Name" />
                </div>
                <div className="cu-field">
                  <label>Mobile Number *</label>
                  <input type="tel" placeholder="Enter Mobile Number" />
                </div>
              </div>

              {/* Products/Services */}
              <div className="cu-field">
                <label>Products / Services Interested In *</label>
                <select>
                  <option value="">Select one</option>
                  <option value="CSR">SunBPM CSR</option>
                  <option value="BRSR">SunBPM BRSR</option>
                  <option value="EHS">SunBPM EHS</option>
                  <option value="ESG">SunBPM ESG</option>
                </select>
              </div>

              {/* Description */}
              <div className="cu-field">
                <label>Describe what you are looking for (Optional)</label>
                <textarea rows="5" placeholder="Enter your message or requirements" />
              </div>

              {/* Submit */}
              <button type="submit" className="cu-btn-dark">Get in touch</button>
            </form>
          </motion.div>
        </div>
      </motion.section>



      {/* ===== 3) MORE WAYS TO REACH OUT ===== */}
      <motion.section
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
              <div className="cu-way-small">sales@pristine-code.com</div>
            </motion.div>

            <motion.div className="cu-way" variants={fadeUp}>
              <div className="cu-way-icon"><PhoneCall size={22} /></div>
              <div className="cu-way-title">Call us now</div>
              <div className="cu-way-small">
                India — (+91) 8850941503<br />
                India — (+91) 8591061753<br />
              </div>
            </motion.div>

            <motion.div className="cu-way" variants={fadeUp}>
              <div className="cu-way-icon"><CalendarCheck2 size={22} /></div>
              <div className="cu-way-title">Book a meeting</div>
              <Link to="/BookDemo" className="cu-way-link">
                Book now
              </Link>

            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ===== 4) OUR LOCATION ===== */}
      <motion.section
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
      </motion.section>

      {/* ===== 5) FAQ ===== */}
      <motion.section
        className="cu-faq"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="cu-container">
          <h3 className="cu-faq-title">Frequently asked questions</h3>

          <div className="cu-faq-list">
            {faqs.map((f, i) => (
              <motion.div
                key={i}
                className={`cu-faq-item ${openIndex === i ? "is-open" : ""}`}
                variants={fadeUp}
              >
                <button
                  className="cu-faq-q"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  type="button"
                  aria-expanded={openIndex === i}
                >
                  <span>{f.question}</span>
                  <ChevronDown className="cu-faq-chevron" size={18} />
                </button>
                <div
                  className="cu-faq-a"
                  style={{ maxHeight: openIndex === i ? "200px" : "0px" }}
                >
                  <p>{f.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default ContactPage;