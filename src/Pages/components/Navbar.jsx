import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import '../../CSS/ComponentsCSS/Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/AboutUs' },
    { name: 'Services', href: '/Services' },
    {
      name: 'Products',
      dropdown: [
        { name: 'SunBPM CSR', href: '/Products/CSR' },
        { name: 'SunBPM ESG', href: '/Products/ESG' },
        { name: 'SunBPM EHS', href: '/Products/EHS' },
        { name: 'SunBPM BRSR', href: '/Products/BRSR' },
      ],
    },
    { name: 'Contact Us', href: '/Contact' },
    { name: 'Success stories', href: '/SuccessStories' },
  ];

  const toggleDropdown = (item) => {
    if (activeDropdown === item) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(item);
    }
  };

  // ⬇️ Helper to navigate + scroll to top
  const handleNavClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false); // close drawer on mobile
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`navbar ${isScrolled ? 'scrolled' : 'transparent'}`}
    >
      <div className="navbar-container">
        <div className="navbar-inner">
          <img
            className="logo"
            src="/images/SunBPM logo.png"
            alt="SunBPM Logo"
            onClick={() => handleNavClick('/')}
            style={{ cursor: 'pointer' }}
          />

          {/* Desktop Links */}
          <div className="nav-links desktop">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="nav-item"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span
                  className={`nav-link ${location.pathname === item.href ||
                    (item.dropdown &&
                      item.dropdown.some((sub) => location.pathname.startsWith(sub.href)))
                    ? 'active'
                    : ''
                    }`}
                  onClick={() => !item.dropdown && handleNavClick(item.href)}
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="chevron-icon" />}
                </span>


                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="dropdown"
                    >
                      {item.dropdown.map((subItem) => (
                        <span
                          key={subItem.name}
                          className="dropdown-link"
                          onClick={() => handleNavClick(subItem.href)}
                        >
                          {subItem.name}
                        </span>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <div className="cta-buttons">
              <Link to="/BookDemo" className="btn-primary">
                Book a Demo
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div
            className="mobile-menu-icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div
            className="drawer-overlay" // this should cover full screen
            onClick={() => setMobileMenuOpen(false)} // click anywhere closes
          >
            <div
              className={`side-drawer open`}
              onClick={(e) => e.stopPropagation()} // ✅ prevent closing when clicking inside
            >
              <div className="drawer-header">
                <button
                  className="drawer-close"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  X
                </button>
              </div>

              <div className="mobile-nav-container">
                {navigation.map((item) => (
                  <div key={item.name} className="mobile-nav-item">
                    <div
                      className="mobile-nav-link"
                      onClick={() =>
                        item.dropdown
                          ? toggleDropdown(item.name)
                          : handleNavClick(item.href)
                      }
                    >
                      <span>{item.name}</span>
                      {item.dropdown && <ChevronDown className="chevron-icon" />}
                    </div>

                    {item.dropdown && activeDropdown === item.name && (
                      <div className="mobile-dropdown">
                        {item.dropdown.map((subItem) => (
                          <span
                            key={subItem.name}
                            onClick={() => handleNavClick(subItem.href)}
                            className="mobile-dropdown-link"
                          >
                            {subItem.name}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mobile-cta">
                <Link to="/BookDemo" className="btn-primary">
                  Book a Demo
                </Link>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>


    </motion.nav>
  );
};

export default Navbar;