import React from "react";

export function NavLink({ href, label, isActive = false }) {
  return (
    <li className="nav-item">
      <a
        className={`nav-link nav-pill ${isActive ? "active" : ""}`}
        aria-current={isActive ? "page" : "false"}
        href={href}
      >
        <span className="nav-pill-inner">{label}</span>
      </a>
    </li>
  );
}

export default NavLink;
