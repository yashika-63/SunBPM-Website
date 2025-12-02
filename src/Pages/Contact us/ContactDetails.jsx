import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../../CSS/Contact us/ContactDetails.css";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const ContactDetails = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="lux-wrapper"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
    >

      {/* Sales Contact */}
      <motion.div className="lux-card" whileHover={{ scale: 1.03 }}>
        <div className="lux-glow"></div>
        <h3 className="lux-card-title">Sales Contact</h3>

        <div className="lux-block">
          <strong>First Contact – Ms. Rekha</strong>

          <a href="tel:+918591061753" className="lux-link">
            <Phone size={18} /> +91 8591061753
          </a>

          <a href="mailto:rekha.rote@pristine-code.com" className="lux-link">
            <Mail size={18} /> rekha.rote@pristine-code.com
          </a>
        </div>

        <div className="lux-block">
          <strong>Second Contact – Mr. Anoop</strong>

          <a href="tel:+918850941503" className="lux-link">
            <Phone size={18} /> +91 8850941503
          </a>

          <a href="mailto:anoop.abraham@pristine-code.com" className="lux-link">
            <Mail size={18} /> anoop.abraham@pristine-code.com
          </a>
        </div>
      </motion.div>

      {/* HR Contact */}
      {/* <motion.div className="lux-card" whileHover={{ scale: 1.03 }}>
        <div className="lux-glow"></div>
        <h3 className="lux-card-title">HR Contact</h3>

        <div className="lux-block">
          <strong>Ms. Sejal</strong>

          <a href="tel:+917208179164" className="lux-link">
            <Phone size={18} /> +91 7208179164
          </a>

          <a href="mailto:careers@pristine-code.com" className="lux-link">
            <Mail size={18} /> careers@pristine-code.com
          </a>
        </div>
      </motion.div> */}

      {/* Meet Us */}
      <motion.div className="lux-card" whileHover={{ scale: 1.03 }}>
        <div className="lux-glow"></div>
        <h3 className="lux-card-title">Meet Us in Person</h3>

        <p className="lux-info">
          <MapPin size={18} /> <strong>Head Office</strong>
        </p>

        <p className="lux-text">
          5th Floor, Omega House, Hiranandani Gardens, Powai, <br />
          Mumbai, Maharashtra 400076
        </p>

        <p className="lux-info">
          <Clock size={18} /> <strong>Business Hours</strong>
        </p>
        <p className="lux-text">Monday – Friday: 10:00 AM – 5:00 PM IST</p>

        <p className="lux-note">
          You are welcome to book an appointment in advance at any location.
        </p>

        <button className="lux-btn" onClick={() => navigate("/Locations")}>
          Our Locations →
        </button>

      </motion.div>
    </motion.div>
  );
};

export default ContactDetails;
