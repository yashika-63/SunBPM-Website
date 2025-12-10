import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Building2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../../CSS/Contact us/ContactDetails.css";

export default function ContactDetails() {
  const navigate = useNavigate();

  return (
    <div className="newcd-wrapper">

      {/* Left PANEL */}
      <motion.div
        className="newcd-right"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="newcd-card">

          <h2>More ways to Connect </h2>

          {/* BOX 1 — Phone Numbers */}
          <div className="newcd-small-box">
            <h4>Call Us</h4>

            <a className="newcd-link" href="tel:+918591061753">
              <Phone size={18} /> +91 8591061753
            </a>

            <a className="newcd-link" href="tel:+918850941503">
              <Phone size={18} /> +91 8850941503
            </a>
          </div>

          {/* BOX 2 — Email */}
          <div className="newcd-small-box">
            <h4>Email Us</h4>

            <a className="newcd-link" href="mailto:sales@sunbpm.com">
              <Mail size={18} /> sales@sunbpm.com
            </a>
          </div>
        </div>
      </motion.div>



      {/* Right PANEL */}
      <motion.div
        className="newcd-left"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="newcd-title">Meet Us in Person</h1>

        <div className="newcd-info-box">
          <Building2 size={20} />
          <div>
            <h3>Head Office</h3>
            <p>5th Floor, Omega House, Hiranandani Gardens, Powai, Mumbai, 400076</p>
          </div>
        </div>

        <div className="newcd-info-box">
          <Clock size={20} />
          <div>
            <h3>Business Hours</h3>
            <p>Mon – Fri, 10:00 AM – 5:00 PM IST</p>
          </div>
        </div>

        <button className="newcd-primary-btn" onClick={() => navigate("/Locations")}>
          View All Locations
        </button>
      </motion.div>


    </div>
  );
}