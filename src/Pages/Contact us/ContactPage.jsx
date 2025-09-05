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
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    organization: "",
    mobile: "",
    interest: "",
    description: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const faqs = [
  {
    question: "What is SunBPM and how can it help my organization?",
    answer:
      "SunBPM is a comprehensive low-code platform that enables organizations to design, automate, and optimize business processes quickly. It helps reduce costs, improve compliance, and boost efficiency without requiring heavy coding.",
  },
  {
    question: "How is SunBPM different from traditional ERP systems?",
    answer:
      "Unlike traditional ERP solutions, SunBPM is flexible, customizable, and faster to implement. It adapts to your unique processes instead of forcing you into rigid, off-the-shelf workflows.",
  },
  {
    question: "Can SunBPM integrate with my existing IT systems?",
    answer:
      "Yes, SunBPM offers seamless integration with ERP, HR, CRM, and other enterprise applications using APIs, pre-built connectors, and real-time synchronization.",
  },
  {
    question: "Do I need programming expertise to use SunBPM?",
    answer:
      "No, SunBPM is a low-code platform with an intuitive drag-and-drop interface, allowing business users to design and manage workflows without advanced technical skills.",
  },
  {
    question: "How long does it take to implement SunBPM?",
    answer:
      "SunBPM enables organizations to automate standard business processes within just 3–4 weeks, ensuring quick ROI and minimal disruption.",
  },
  {
    question: "How secure is SunBPM for enterprise use?",
    answer:
      "SunBPM provides enterprise-grade security with role-based access controls, complete audit trails, and data encryption to keep your business data safe.",
  },
];

  // handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // validate inputs
  const validate = () => {
    let newErrors = {};
    if (!formData.fullname) newErrors.fullname = "Full name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.organization) newErrors.organization = "Organization is required";
    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit number";
    }
    if (!formData.interest) newErrors.interest = "Please select your interest";

    return newErrors;
  };

  // submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setSubmitted(false);

      try {
        const response = await fetch("http://localhost:6002/api/book-demo", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fullName: formData.fullname,
            email: formData.email,
            organization: formData.organization,
            mobileNumber: formData.mobile,
            productsServices: formData.interest,
            description: formData.description,
          }),
        });

        if (response.ok) {
          setSubmitted(true);
          setFormData({
            fullname: "",
            email: "",
            organization: "",
            mobile: "",
            interest: "",
            description: "",
          });
        } else {
          const errorData = await response.json();
          console.error("Error submitting:", errorData);
          alert("Something went wrong. Try again!");
        }
      } catch (err) {
        console.error("Network error:", err);
        alert("Server not reachable. Please check backend.");
      }
    }
  };

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
          <p className="cu-grand-desc">
            SunBPM delivers end-to-end digitalization solutions tailored to your business needs. From workflow
            automation and compliance management to analytics and integrations, we help organizations streamline
            operations, enhance collaboration, and achieve measurable business results.
          </p>
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
            {submitted ? (
              <div className="success-msg">
                Thank you! We will get back to you shortly.
              </div>
            ) : (
              <form className="cu-card" onSubmit={handleSubmit}>
                <div className="cu-card-head">
                  <h3>Let’s connect</h3>
                </div>

                {/* Full Name + Email */}
                <div className="cu-row-2">
                  <div className="cu-field">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      name="fullname"
                      value={formData.fullname}
                      onChange={handleChange}
                      placeholder="Enter Full Name"
                    />
                    {errors.fullname && <p className="error">{errors.fullname}</p>}
                  </div>
                  <div className="cu-field">
                    <label>Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter Email Address"
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                  </div>
                </div>

                {/* Organization + Mobile */}
                <div className="cu-row-2">
                  <div className="cu-field">
                    <label>Your Organization *</label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="Enter Organization Name"
                    />
                    {errors.organization && <p className="error">{errors.organization}</p>}
                  </div>
                  <div className="cu-field">
                    <label>Mobile Number *</label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Enter Mobile Number"
                    />
                    {errors.mobile && <p className="error">{errors.mobile}</p>}
                  </div>
                </div>

                {/* Products/Services */}
                <div className="cu-field">
                  <label>Products / Services Interested In *</label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                  >
                    <option value="">Select one</option>
                    <option value="SunBPM CSR">SunBPM CSR</option>
                    <option value="SunBPM BRSR">SunBPM BRSR</option>
                    <option value="SunBPM EHS">SunBPM EHS</option>
                    <option value="SunBPM ESG">SunBPM ESG</option>
                  </select>
                  {errors.interest && <p className="error">{errors.interest}</p>}
                </div>

                {/* Description */}
                <div className="cu-field">
                  <label>Describe what you are looking for (Optional)</label>
                  <textarea
                    name="description"
                    rows="5"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Enter your message or requirements"
                  />
                </div>

                {/* Submit */}
                <button type="submit" className="cu-btn-dark">
                  Get in touch
                </button>
              </form>
            )}
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
