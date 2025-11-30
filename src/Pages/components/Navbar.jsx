import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import '../../CSS/ComponentsCSS/Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // which nav item’s dropdown is open
  const [hoveredProduct, setHoveredProduct] = useState('SunBPM CSR'); // which product is previewed
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeTimeoutRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    {
      name: 'Services',
      dropdown: [
        // { name: 'Our core services', href: '/Services' },
        { name: 'ERP Implementation and services', href: '/Services/ERP' },
        { name: 'Mobile App Development services', href: '/Services/MobileApp' },
        { name: 'Data Analytics services', href: '/Services/DataAnalytics' },
        { name: 'Business process Automation services', href: '/Services/BPA' },
        { name: 'Site Reliability Services', href: '/Services/SiteReliability' },
      ],
    },
    {
      name: 'Products',
      dropdown: [
        { name: 'SunBPM Corporate Social Responsibility', href: '/Products/CSR' },
        { name: 'SunBPM Environmental, Social, and Governance', href: '/Products/ESG' },
        { name: 'SunBPM Environment, Health, and Safety', href: '/Products/EHS' },
        { name: 'SunBPM Project  Management System', href: '/Products/PMS' },
        { name: 'SunBPM Purchase Requisition and Purchase Order', href: '/Products/PRPO' },
        { name: 'SunBPM Procurement Decision Tool', href: '/Products/ProcurementDecisionTool' },
      ],
    },
    { name: 'Clients', href: '/Client' },
    { name: 'About', href: '/' },
    { name: 'Contact Us', href: '/Contact' },
  ];


  const handleNavClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (item) => {
    setOpenDropdown((prev) => (prev === item ? null : item));
  };

  // utility: start close timer (if pointer leaves), short delay to avoid flicker
  const startCloseTimer = (delay = 100) => {
    clearCloseTimer();
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, delay);
  };
  const clearCloseTimer = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
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

          {/* === Desktop Navigation === */}
          <div className="nav-links desktop">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="nav-item"
                // widen hover target by using nav-item (not only nav-link)
                onMouseEnter={() => {
                  if (item.dropdown) {
                    clearCloseTimer();
                    setOpenDropdown(item.name);
                    // ensure hoveredProduct has a sane default
                    if (!item.dropdown.some(d => d.name === hoveredProduct)) {
                      setHoveredProduct(item.dropdown[0].name);
                    }
                  }
                }}
                onMouseLeave={() => {
                  if (item.dropdown) startCloseTimer(100);
                }}
              >
                <span
                  className={`nav-link ${location.pathname === item.href ||
                    (item.dropdown &&
                      item.dropdown.some((sub) =>
                        location.pathname.startsWith(sub.href)
                      ))
                    ? 'active'
                    : ''
                    }`}
                  onClick={() => !item.dropdown && handleNavClick(item.href)}
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="chevron-icon" />}
                </span>

                {/* === Mega Dropdown === */}
                <AnimatePresence>
                  {item.dropdown && openDropdown === item.name && (
                    <motion.div
                      className="mega-overlay"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onMouseEnter={() => {
                        clearCloseTimer();
                        setOpenDropdown(item.name);
                      }}
                      onMouseLeave={(e) => {
                        // ✅ Close immediately when the cursor leaves BOTH the Products area and dropdown
                        const dropdown = e.currentTarget;
                        const rect = dropdown.getBoundingClientRect();
                        const { clientX: x, clientY: y } = e;

                        // if mouse is outside dropdown bounds, close it
                        if (
                          y < rect.top ||
                          y > rect.bottom ||
                          x < rect.left ||
                          x > rect.right
                        ) {
                          setOpenDropdown(null);
                        } else {
                          startCloseTimer(100);
                        }
                      }}
                    >
                      <motion.div
                        className="mega-dropdown"
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 10, opacity: 0 }}
                      >
                        {/* LEFT SIDE - PRODUCT LIST */}
                        <div className="mega-left">
                          {item.dropdown.map((subItem) => (
                            <div
                              key={subItem.name}
                              className={`mega-item ${subItem.name === hoveredProduct ? 'active' : ''
                                }`}
                              onMouseEnter={() => {
                                clearCloseTimer();
                                setHoveredProduct(subItem.name);
                              }}
                              onClick={() => handleNavClick(subItem.href)}
                            >
                              {subItem.name}
                            </div>
                          ))}
                        </div>

                        {/* RIGHT SIDE - PRODUCT PREVIEW */}
                        <div className="mega-right">
                          {(() => {

                            /* ======================= PRODUCT PREVIEW DATA ====================== */
                            const productDetails = {
                              'SunBPM Corporate Social Responsibility': {
                                title: 'SunBPM Corporate Social Responsibility',
                                desc: 'Manage corporate social responsibility with transparency and efficiency.',
                                img: "/images/products/CSR/CSR-grand-image.png",
                              },
                              'SunBPM Environmental, Social, and Governance': {
                                title: 'SunBPM Environmental, Social, and Governance',
                                desc: 'Drive sustainability and compliance through smart ESG management.',
                                img: "/images/products/ESG/ESG-grand-image.png",
                              },
                              'SunBPM Environment, Health, and Safety': {
                                title: 'SunBPM Environment, Health, and Safety',
                                desc: 'Ensure environment, health, and safety compliance across operations.',
                                img: "/images/products/EHS/EHS-grand-image.jpg",
                              },
                              'SunBPM Project  Management System': {
                                title: 'SunBPM Project  Management System',
                                desc: 'Maintain quality and standards effortlessly with intelligent QMS workflows.',
                                img: "/images/products/QMS/QMS-grand-image.jpg",
                              },
                              'SunBPM Purchase Requisition and Purchase Order': {
                                title: 'SunBPM Purchase Requisition and Purchase Order',
                                desc: 'Simplify procurement and approval with efficient PR and PO tracking.',
                                img: "/images/products/PRPO/PRPO-grand-image.jpg",
                              },
                              'SunBPM Procurement Decision Tool': {
                                title: 'SunBPM Procurement Decision Tool',
                                desc: 'Optimize capital and operational expenditure with complete visibility.',
                                img: "/images/products/CapexOpex/CapexOpex-grand-image.png",
                              },
                            };

                            /* =================== SERVICE PREVIEW DATA =================== */
                            const serviceDetails = {
                              // 'Our core services': {
                              //   title: 'Our core services',
                              //   desc: 'Comprehensive Digital Solutions Tailored to Your Business.',
                              //   img: "/images/services/core-services/erp-grand-image.jpg",
                              // },
                              'ERP Implementation and services': {
                                title: 'ERP Implementation and Services',
                                desc: 'Empowering Enterprise Transformation with Intelligent ERP Solutions.',
                                img: "/images/services/core-services/erp-grand-image.jpg",
                              },
                              'Mobile App Development services': {
                                title: 'Mobile App Development services',
                                desc: 'Expand footprint with innovative mobile applications.',
                                img: "/images/services/core-services/mobile-app-grand-image.jpg",
                              },
                              'Data Analytics services': {
                                title: 'Data Analytics services',
                                desc: 'Every Growth Strategy Now Starts With Data.',
                                img: "/images/services/core-services/Data-analitics-grand-image.png",
                              },
                              'Business process Automation services': {
                                title: 'Business Process Automation services',
                                desc: 'Orchestrate end-to-end workflows with intelligent process automation.',
                                img: "/images/services/core-services/BPA-grand-image.jpg",
                              },
                              'Site Reliability Services': {
                                title: 'Site Reliability Services',
                                desc: 'End-to-End IT support that keeps your business running strong.',
                                img: "/images/services/core-services/SRE-grand-image.jpg",
                              },
                            };

                            /* ======================= MERGE BOTH DATA SETS ======================= */
                            const allDetails = { ...productDetails, ...serviceDetails };

                            const active = allDetails[hoveredProduct];

                            if (!active) return null;

                            return (
                              <div className="mega-preview">
                                <h4>{active.title}</h4>
                                <p>{active.desc}</p>
                                <img
                                  src={active.img}
                                  alt={active.title}
                                  className="mega-image"
                                />
                              </div>
                            );
                          })()}
                        </div>

                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            ))}

            <div className="cta-buttons">
              <Link to="/BookDemo" className="navbar-btn-primary">
                Book a Demo
              </Link>
            </div>
          </div>

          {/* === Mobile Menu Toggle === */}
          <div
            className="mobile-menu-icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </div>
        </div>
      </div>

      {/* === Mobile Drawer === */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div
            className="drawer-overlay"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div
              className={`side-drawer open`}
              onClick={(e) => e.stopPropagation()}
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

                    {item.dropdown && openDropdown === item.name && (
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
                <Link to="/BookDemo" className="navbar-btn-primary">
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