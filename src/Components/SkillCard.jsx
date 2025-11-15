import React from "react";

export function SkillCard({ wrapperClass = "col-md-6 col-lg-4 mb-4", title, children }) {
  return (
    <div className={wrapperClass}>
      <div className="info-card p-4 rounded card-shadow-hover h-100">
        <h4 className="mb-4 text-primary">{title}</h4>
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-4">
          {children}
        </div>
      </div>
    </div>
  );
}

export default SkillCard;
