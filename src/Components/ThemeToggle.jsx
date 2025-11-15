import React from "react";

export function ThemeToggle() {
  return (
    <li className="nav-item d-flex align-items-center">
      <button
        id="theme-toggle"
        className="theme-toggle btn btn-sm button-shadow-subtle"
        aria-label="Toggle theme"
        title="Toggle dark/light theme"
      >
        <span className="toggle-track" aria-hidden="true">
          <span className="toggle-thumb">
            <i className="fas fa-moon"></i>
          </span>
        </span>
        <span className="toggle-label d-none d-lg-inline"></span>
      </button>
    </li>
  );
}

export default ThemeToggle;
