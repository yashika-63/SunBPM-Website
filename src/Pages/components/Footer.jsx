import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import React from 'react';
import '../../CSS/ComponentsCSS/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section address">
          <h1>Shaping future success with the technology we have today.</h1>
          <p>
            <strong>Address:</strong> <br />
            <a
              href="https://maps.app.goo.gl/WH2NEhzTctFYarnV9"
              target="_blank"
              rel="noopener noreferrer"
              className="map-link"
            >
              5th Floor, Omega House, Hiranandani Gardens, Powai, Mumbai, Maharashtra 400076.
            </a>
          </p>

          <p>
            <strong>Contact Us:</strong> <br />
            <a href="tel:+918850941503" className="Phone-link">+91 8850941503</a>,<br />
            <a href="tel:+918591061753" className="Phone-link">+91 8591061753</a>
          </p>

          <p>
            <strong>Email:</strong> <br />
            <a href="mailto:sales@sunbpm.com" className="email-link">
              sales@sunbpm.com
            </a>
          </p>
          {/* <p>
            <strong>GST No.:</strong> <br />
            <a>
              27AAOCP9044N1ZK
            </a>
          </p> */}
        </div>
        <div className="footer-line" />
        <div className="product">
          <h3>Products</h3>
          <ul>
            <li><Link to="/Products/CSR" className="email-link">SunBPM CSR</Link></li>
            {/* <li><Link to="/Products/BRSR" className="email-link">SunBPM BRSR</Link></li> */}
            <li><Link to="/Products/ESG" className="email-link">SunBPM ESG</Link></li>
            <li><Link to="/Products/EHS" className="email-link">SunBPM EHS</Link></li>
            <li><Link to="/Products/PMS" className="email-link">SunBPM PMS</Link></li>
            <li><Link to="/Products/PRPO" className="email-link">SunBPM PRPO</Link></li>
            <li><Link to="/Products/ProcurementDecisionTool" className="email-link">
                SunBPM Procurement<br />Decision Tool</Link></li>
            {/* <li>ERP</li> */}
          </ul>
        </div>
        <div className="more">
          <h3>Explore</h3>
          <ul>
            <li><Link to="/AboutUs" className="email-link">About</Link></li>
            <li><Link to="/Services" className="email-link">Services</Link></li>
            <li><Link to="/Contact" className="email-link">Contact Us</Link></li>
            <li><Link to="/SuccessStories" className="email-link">Success Stories</Link></li>
          </ul>
        </div>
        <div className="policies">
          <h3>Our Policies</h3>
          <ul>
            <li><Link to="/PrivacyPolicy" className="email-link">Privacy Policies</Link></li>
            <li><Link to="/TermsConditions" className="email-link">Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>


      <div className="footer-bottom">
        <div className="footer-social">
          <a
            href="https://www.linkedin.com/company/pristine-it-code"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaLinkedin className="social-icon" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://twitter.com/pristineitcode"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaXTwitter className="social-icon" />
            <span>Twitter</span>
          </a>

          <a
            href="https://www.facebook.com/pristineitcode/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaFacebook className="social-icon" />
            <span>Facebook</span>
          </a>

          <a
            href="https://www.instagram.com/pristineitcode/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaInstagram className="social-icon" />
            <span>Instagram</span>
          </a>

          <a
            href="https://www.youtube.com/@pristineitcode"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaYoutube className="social-icon" />
            <span>YouTube</span>
          </a>
        </div>
      </div>

    </footer>
  );
};
export default Footer;