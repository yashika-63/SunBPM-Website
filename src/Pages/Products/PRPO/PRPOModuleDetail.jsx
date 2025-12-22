import React, { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PRPOModules from "../../../data/Products/PRPOModules";
import { motion, AnimatePresence } from "framer-motion";
import "../../../CSS/ComponentsCSS/ModuleDetail.css";

export default function PRPOModuleDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const moduleInfo = PRPOModules.find((m) => m.id === id);
  const [openRow, setOpenRow] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Scroll top when module changes
    if (containerRef.current) containerRef.current.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!moduleInfo) return <h2 className="not-found">Module Not Found</h2>;

  const toggleRow = (rowId) => setOpenRow((prev) => (prev === rowId ? null : rowId));

  const copyText = (text) => {
    if (!navigator?.clipboard) return;
    navigator.clipboard.writeText(text);
  };

  const currentIndex = PRPOModules.findIndex(m => m.id === id);
  const nextModule = PRPOModules[currentIndex + 1];

  return (
    <section className="md-wrapper" ref={containerRef} aria-labelledby="module-heading">
      {/* Header */}
      <motion.header
        className="md-header-super"
        initial={{ opacity: 0, y: -22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >

        {/* Top bar with Back + Book Demo */}
        <div className="md-header-bar">
          <button className="md-back-btn" onClick={() => navigate(-1)}>
            ← Back
          </button>

          <button
            className="md-book-btn"
            onClick={() => {
              if (nextModule) {
                navigate(`/PRPOModules/${nextModule.id}`);
              } else {
                navigate("/Products/PRPO");

                setTimeout(() => {
                  const el = document.getElementById("PRPO-core-modules");
                  if (el) {
                    el.scrollIntoView({ behavior: "auto", block: "start" });
                  }
                }, 150);
              }
            }}
          >
            {nextModule ? "Next Module →" : "Back to Modules →"}
          </button>

        </div>

        {/* Center content */}
        <div className="md-header-main">
          <h1 className="md-header-title">{moduleInfo.groupName}</h1>
          {/* <p className="md-header-desc">{moduleInfo.shortDesc}</p> */}
        </div>

        {/* Particles */}
        <div className="md-header-particles-super" />

        {/* Glow sweep */}
        <div className="md-header-sweep" />

        {/* Circular radial glow */}
        <div className="md-header-radial" />

        {/* Slanted decorative bottom */}
        <div className="md-header-bottom-cut" />
      </motion.header>

      <div className="md-header-desc-container-wrap">
        <p className="md-header-desc-container">{moduleInfo.shortDesc}</p>

        <span className="md-header-icon" aria-hidden="true">
          {moduleInfo.icon && <moduleInfo.icon />}
        </span>
      </div>

      {/* Table-style content */}
      <main className="md-content container">
        <div className="md-table-wrap">
          <div className="md-table-head" role="row">
            <div className="col col-title">Module Title</div>
            <div className="col col-focus">Focus</div>
            <div className="col col-benefit">Benefits</div>
          </div>

          <div className="md-table-body">
            <AnimatePresence initial={false}>
              {moduleInfo.modules.map((mod, idx) => {
                const isOpen = openRow === mod.id;
                return (
                  <motion.section
                    key={mod.id}
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.42, ease: "easeOut", delay: idx * 0.04 }}
                    className={`md-row ${isOpen ? "open" : ""}`}
                    tabIndex={0}
                    role="button"
                    aria-expanded={isOpen}
                    onClick={() => toggleRow(mod.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggleRow(mod.id);
                      }
                    }}
                  >
                    <div className="row-accent" aria-hidden="true" />
                    <div className="cell title-cell">
                      <div className="title-inner">
                        <div className="title-index">{idx + 1}</div>
                        <div className="title-text">{mod.title}</div>
                      </div>
                    </div>
                    <div class="md-divider"></div>
                    <div className="cell focus-cell">
                      <ul>
                        {mod.focus.map((f, i) => (
                          <li key={i} title={f}>{f}</li>
                        ))}
                      </ul>
                    </div>

                    <div class="md-divider"></div>

                    <div className="cell benefit-cell">
                      <ul>
                        {mod.benefits.map((b, i) => (
                          <li key={i} title={b}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.section>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </main>
    </section>
  );
}
