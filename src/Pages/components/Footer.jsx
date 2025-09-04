import React from 'react';
import '../../CSS/ComponentsCSS/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section address">
          <h1>Driving tomorrow's success with today's technology.</h1>
          <p>
            <strong>Address :</strong> <br />
            <a
              href="https://maps.app.goo.gl/WH2NEhzTctFYarnV9"
              target="_blank"
              rel="noopener noreferrer"
              className="map-link"
            >
              5th Floor, Omega House, Hiranandani Gardens,<br />
              Powai, Mumbai, Maharashtra 400076
            </a>
          </p>

          <p>
            <strong>Contact Us:</strong> <br />
            +91 8850941503,<br /> +91 8591061753
          </p>
          <p>
            <strong>Email:</strong> <br />
            <a href="mailto:sales@pristine-code.com" className="email-link">
              sales@pristine-code.com
            </a>
          </p>
          <p>
            <strong>GST No.:</strong> <br />
            <a>
              27AAOCP9044N1ZK
            </a>
          </p>
        </div>
        <div className="footer-line" />
        <div className="product">
          <h3>Products</h3>
          <ul>
            <li><Link to="/Products/CSR" className="email-link">SunBPM CSR</Link></li>
            <li><Link to="/Products/BRSR" className="email-link">SunBPM BRSR</Link></li>
            <li><Link to="/Products/ESG" className="email-link">SunBPM ESG</Link></li>
            <li><Link to="/Products/EHS" className="email-link">SunBPM EHS</Link></li>
            {/* <li>ERP</li> */}
          </ul>
        </div>
        <div className="more">
          <h3>Explore</h3>
          <ul>
            <li><Link to="/AboutUs" className="email-link">About</Link></li>
            <li><Link to="/Services" className="email-link">Services</Link></li>
            <li><Link to="/Contact" className="email-link">Contact Us</Link></li>
            <li><Link to="/SuccessStories" className="email-link">Sucess stories</Link></li>
          </ul>
        </div>
        <div className="policies">
          <h3>Our Policies</h3>
          <ul>
            <li><Link to="/PrivacyPolicy" className="email-link">Privacy Policies</Link></li>
            <li><Link to="/TermsConditions" className="email-link">Terms & Conditions</Link></li>
            {/* <li>Refund Policy</li> */}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-social">
          <a><Link to="https://www.linkedin.com/company/pristine-it-code" target="_blank" rel="noopener noreferrer" className="email-link"><img src="/images/components/Footer icons/linkedin-01.png" alt="LinkedIn" /></Link></a>
          <a><Link to="https://x.com/PristineITcode" target="_blank" rel="noopener noreferrer"><img src="/images/components/Footer icons/new-twitter.png" alt="X" className="email-link" /></Link></a>
          <a><Link to="https://www.facebook.com/pristineitcode/" target="_blank" rel="noopener noreferrer" className="email-link"><img src="/images/components/Footer icons/facebook-01.png" alt="Facebook" /></Link></a>
          <a><Link to="https://www.instagram.com/pristineitcode/" target="_blank" rel="noopener noreferrer" className="email-link"><img src="/images/components/Footer icons/instagram.png" alt="Instagram" /></Link></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;