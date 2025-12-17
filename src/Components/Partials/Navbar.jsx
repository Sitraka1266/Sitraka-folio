import React, { useState } from "react";
import NavLink from "./NavLink";
import ThemeToggle from "../ThemeToggle";

export function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const navLinks = [
    { href: "#hero", label: "Home", id: "hero" },
    { href: "#a-propos", label: "About", id: "about" },
    { href: "#skills", label: "Skills", id: "skills" },
    { href: "#projets", label: "Projects", id: "projects" },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleNavClick = () => {
    setIsExpanded(false);
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top shadow-complex navbar-custom">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#hero" onClick={handleNavClick}>
          <img src="logo/favicon.svg" width="45" alt="Logo" className="brand-logo" />
          <span className="brand-text fw-bold">Sitraka</span>
        </a>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isExpanded}
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isExpanded ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            {navLinks.map((link) => (
              <NavLink key={link.id} href={link.href} label={link.label} />
            ))}
            <ThemeToggle />
            {/* CTA button: subtle, pill-shaped - visible on larger screens */}
            <li className="nav-item d-none d-lg-block ms-2">
              <a href="#contact" className="btn btn-sm btn-primary cta-btn" onClick={handleNavClick}>
                Contactez-moi
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

